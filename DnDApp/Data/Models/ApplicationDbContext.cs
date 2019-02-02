using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DnDApp.Data.Models
{
    public class ApplicationDbContext :DbContext
    {
        #region Constructor
        public ApplicationDbContext(DbContextOptions options) :
        base(options)
        {
        }
        #endregion Constructor

        #region Methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>().ToTable("Users");
            modelBuilder.Entity<ApplicationUser>().HasMany(u =>
            u.Characters).WithOne(i => i.User);

        }

        #endregion Methods

        #region Properties
        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<Character> Characters { get; set; }
         
        #endregion Properties

    }



}
