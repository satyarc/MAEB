using System;

namespace SalesAndCrm.Models
{
    public class Agent
    {
        public Agent()
        {
            AgentId = Guid.NewGuid().ToString();
        }
        public string AgentId { get; set; }

        public string AgentName { get; set; }
    }
}
