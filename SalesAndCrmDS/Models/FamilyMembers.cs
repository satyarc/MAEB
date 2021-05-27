using Microsoft.EntityFrameworkCore;
using System;

namespace SalesAndCrm.Models
{
    public class FamilyMember
    {
        public FamilyMember()
        {
            FamilyMemberId = Guid.NewGuid().ToString();
        }

        public string FamilyMemberId { get; set; }
        public string MemberId { get; set; }

        public string Lastname { get; set; }

        public string Firstname { get; set; }

        public string DateOfBirth { get; set; }

        public string Relation { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string ZipCode { get; set; }

        public string Address { get; set; }

        public Int32 Status { get; set; }

    }
}
