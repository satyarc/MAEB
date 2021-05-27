using Microsoft.EntityFrameworkCore;
using System;
using SalesAndCrm.Models;

namespace SalesAndCrm.Models
{
    public class MaebDbContext : DbContext
    {
        public MaebDbContext(DbContextOptions<MaebDbContext> options) : base(options)
        {

        }

        public DbSet<Agent> Agents{get; set;}
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }

        public DbSet<Order> FamilyMembers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<SalesAndCrm.Models.FamilyMember> FamilyMember { get; set; }
    }

}
