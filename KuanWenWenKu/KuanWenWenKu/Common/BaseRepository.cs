using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Transactions;
using LinqToDB.Data;
using Newtonsoft.Json;

namespace KuanWenWenKu.Common
{
    /// <summary>
    /// 基础仓库
    /// </summary>
    //public class BaseRepository 
    //{
    //    /// <summary>
    //    /// db的表的字段定义缓存
    //    /// </summary>

    //    protected static readonly ConcurrentDictionary<string, List<CodeGenField>> _dbColumnsCache = new ConcurrentDictionary<string, List<CodeGenField>>();

    //    /// <summary>
    //    /// DB
    //    /// </summary>
    //    public DbContext<AntEntity> DB => DbModel.DbContext.DB;

    //}

    /// <summary>
    /// 基础泛型仓库
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseRepository<T> /*: IRepository<T> where T : class*/
    {
        
        ///// <summary>
        ///// 当前的Entity
        ///// </summary>
        //public IQueryable<T> Entity => DB.GetTable<T>();


        //public int Save(T entity)
        //{
        //    return this.DB.Insert(entity);
        //}

        //public long BatchSave(T[] entities)
        //{
        //    return this.DB.BulkCopy(entities).RowsCopied;
        //}

        //public long InsertWithIdentity(T entity)
        //{
        //    return (long)this.DB.InsertWithIdentity(entity);
        //}




        //public int Update(T entity)
        //{
        //    return this.DB.Update(entity);
        //}


        //public int Delete(T entity)
        //{
        //    return this.DB.Delete(entity);
        //}

        //public int BatchDelete(T[] entities)
        //{
        //    return this.DB.Delete(entities);
        //}



        //public int Delete(Expression<Func<T, bool>> exp)
        //{
        //    return this.DB.Tables.Get<T>().Delete(exp);
        //}

        //public T FindSingle(Expression<Func<T, bool>> exp)
        //{
        //    return this.DB.Tables.Get<T>().FirstOrDefault(exp);
        //}

        //public bool IsExist(Expression<Func<T, bool>> exp)
        //{
        //    return this.DB.Tables.Get<T>().Any(exp);
        //}

        //public IEnumerable<T1> Query<T1>(string sql, params DataParameter[] parameters)
        //{
        //    return this.DB.Query<T1>(sql, parameters);
        //}

        //public IEnumerable<T1> Query<T1>(T1 templete, string sql, params DataParameter[] parameters)
        //{
        //    return this.DB.Query<T1>(templete, sql, parameters);
        //}



        //public T1 Execute<T1>(string sql, params DataParameter[] parameters)
        //{
        //    return this.DB.Execute<T1>(sql, parameters);
        //}

    }
}
