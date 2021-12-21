
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Web;

namespace KuanWenWenKu.Data
{
    public class BaseService<T> where T : class, new()
    { 
        public readonly KuanWenWenKuContext db;

        public BaseService(KuanWenWenKuContext context)
        {
            db = context;
        }

        public int AddEntity(T entity)
        {
            db.Set<T>().Add(entity);
            return db.SaveChanges();
        }

        public int AddEntityRange(List<T> entityList)
        {
            db.Set<T>().AddRange(entityList);
            return db.SaveChanges();
        }

        public int DeleteEntity(T entity)
        {
            db.Set<T>().Attach(entity);
            db.Set<T>().Remove(entity);
            return db.SaveChanges();
        }

        public int DeleteEntityByWhere(Expression<Func<T, bool>> where)
        {
            var list = db.Set<T>().Where(where);
            list.ForEachAsync(t => { db.Set<T>().Attach(t); db.Set<T>().Remove(t); });
            return db.SaveChanges();
        }

        public void Dispose()
        {
            this.db.Dispose();
        }

        public IQueryable<T> GetByWhere(Expression<Func<T, bool>> where)
        {
            return db.Set<T>().Where(where).AsQueryable();
        }

        public long GetCount(Expression<Func<T, bool>> where)
        {
            return db.Set<T>().Where(where).Count();
        }

        public IQueryable<T> GetPageEntity(Expression<Func<T, bool>> where, Expression<Func<T>> orderBy, int pageSize, int pageNumber)
        {
            return db.Set<T>().Where(where).Take(pageSize * pageNumber).Skip(pageSize * (pageNumber - 1)).AsQueryable();
        }

        public void UpdateBatch(T Model, Expression<Func<T, bool>> where, params string[] strs)
        {
            List<T> tempList = db.Set<T>().Where(where).ToList();
            Type t = typeof(T);

            List<PropertyInfo> tempPro = t.GetProperties(BindingFlags.Public | BindingFlags.Instance).ToList();
            Dictionary<string, PropertyInfo> propertyDic = new Dictionary<string, PropertyInfo>();
            tempPro.ForEach(p =>
            {
                if (strs.Contains(p.Name)) { propertyDic.Add(p.Name, p); }
            });
            foreach (string str in strs)
            {
                if (propertyDic.ContainsKey(str))
                {
                    PropertyInfo propertyInfo = propertyDic[str];

                    object value = propertyInfo.GetValue(Model, null);
                    foreach (T tempData in tempList)
                    {

                        propertyInfo.SetValue(tempData, value, null);
                    }
                }
            }
        }

        public int UpdateEntity(T entity, params string[] parameter)
        {
            var entry = db.Entry<T>(entity);
            entry.State = EntityState.Unchanged;
            foreach (var item in parameter)
            {
                entry.Property(item).IsModified = true;
            }
            return db.SaveChanges();
        }

    }
}