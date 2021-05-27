using Microsoft.EntityFrameworkCore;
using System;

namespace SalesAndCrm.Models
{
    public class Customer
    {
        public Customer()
        {
            CustomerId = Guid.NewGuid().ToString();
        }
        public string CustomerId { get; set; }

        public string CustomerLastName { get; set; }

        public string CustomerFirstName { get; set; }

        public string AgentId { get; set; }

        public string EmailId { get; set; }

        public string DateOfBirth { get; set; }

        public string MembershipDuration { get; set; }

        public string CityCode { get; set; }

        public string CountryCode { get; set; }

        public string ZipCode { get; set; }

        public string Address { get; set; }

        public int Phone { get; set; }

    }
}
