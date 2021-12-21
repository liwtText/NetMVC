using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace KuanWenWenKu.Data
{
    public interface IDataAccess<T, TKey>
    {
        int AddEntity(T entity);
        int UpdateEntity(T entity, params string[] parameter);
        int DeleteEntity(T entity);

        int DeleteEntityByWhere(Expression<Func<T, bool>> where);

        void UpdateBatch(T Model, Expression<Func<T, bool>> where, params string[] strs);
        IQueryable<T> GetByWhere(Expression<Func<T, bool>> where);

        IQueryable<T> GetPageEntity(Expression<Func<T, bool>> where, Expression<Func<T, TKey>> orderBy, int pageSize, int pageNumber);

        long GetCount(Expression<Func<T, bool>> where);
    }
}