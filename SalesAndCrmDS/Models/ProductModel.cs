using Microsoft.EntityFrameworkCore;
using System;

namespace SalesAndCrm.Models
{    
    public class Product
    {
        public Product()
        {
            ProductId = Guid.NewGuid().ToString();
        }
        public string ProductId { get; set; }

        public string PlanId { get; set; }

        public string ProductName { get; set; }

        public DateTime Expiry { get; set; }

    }
}
