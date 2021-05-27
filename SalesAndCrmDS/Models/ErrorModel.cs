using Microsoft.EntityFrameworkCore;
using System;

namespace SalesAndCrm.Models
{
    public class ErrorModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
