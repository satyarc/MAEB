using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SalesAndCrm.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Cors;

namespace SalesAndCrmDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentsController : Controller
    {
        private readonly MaebDbContext _context;

        public AgentsController(MaebDbContext context)
        {
            _context = context;
        }

        // GET: Agents
        [EnableCors]
        public async Task<string> Index()
        {
            return JsonSerializer.Serialize(await _context.Agents.ToListAsync());
        }

        // GET: Agents/Details/5
        [EnableCors]
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var agent = await _context.Agents
                .FirstOrDefaultAsync(m => m.AgentId == id);
            if (agent == null)
            {
                return NotFound();
            }

            return RedirectToAction(nameof(Index));
        }

        // POST: Agents/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Create(Agent agent)
        {
            _context.Add(agent);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        // POST: Agents/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Edit(string id,  Agent agent)
        {
            if (id != agent.AgentId)
            {
                return NotFound();
            }
  
            try
            {
                _context.Update(agent);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgentExists(agent.AgentId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }

        // POST: Agents/Delete/5
        [HttpPost, ActionName("Delete")]
        [EnableCors]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var agent = await _context.Agents.FindAsync(id);
            _context.Agents.Remove(agent);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AgentExists(string id)
        {
            return _context.Agents.Any(e => e.AgentId == id);
        }
    }
}
