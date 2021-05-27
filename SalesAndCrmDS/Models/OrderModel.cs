using Microsoft.EntityFrameworkCore;
using System;

namespace SalesAndCrm.Models
{    
    public class Order
    {
        public Order()
        {
            OrderId = Guid.NewGuid().ToString();
        }
        public string OrderId { get; set; }

        public string AgentId { get; set; }

        public string CustomerId { get; set; }

        public string Channel { get; set; }

        public char Status { get; set; }

        public string PaymentStatus { get; set; }

        public int Age { get; set; }

        public int Premium { get; set; }

        public char PaymentMode { get; set; } 
        
        public byte[] Quote { get; set; }
    }
}
