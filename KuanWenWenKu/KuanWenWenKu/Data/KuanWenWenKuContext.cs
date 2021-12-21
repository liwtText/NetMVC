using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using KuanWenWenKu.Models;

namespace KuanWenWenKu.Data
{
    public class KuanWenWenKuContext : DbContext
    {
        public KuanWenWenKuContext(DbContextOptions<KuanWenWenKuContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }
        public DbSet<Word> Word { get; set; }
    }
}
