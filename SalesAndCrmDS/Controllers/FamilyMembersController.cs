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
    public class FamilyMembersController : Controller
    {
        private readonly MaebDbContext _context;

        public FamilyMembersController(MaebDbContext context)
        {
            _context = context;
        }

        // GET: FamilyMembers
        public async Task<string> Index()
        {
            //var familyOf001 =  _context.FamilyMember.(m => m.MemberId == "001");

            return JsonSerializer.Serialize(await _context.FamilyMember.ToListAsync());
        }

        // GET: FamilyMembers/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var familyMember = await _context.FamilyMember
                .FirstOrDefaultAsync(m => m.FamilyMemberId == id);
            if (familyMember == null)
            {
                return NotFound();
            }
            return RedirectToAction(nameof(Index));
        }

        
        // POST: FamilyMembers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [EnableCors]
        public async Task<IActionResult> Create( FamilyMember familyMember)
        {
                _context.Add(familyMember);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
        }

        // POST: FamilyMembers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(string id,  FamilyMember familyMember)
        {
            if (id != familyMember.FamilyMemberId)
            {
                return NotFound();
            }

            try
            {
                _context.Update(familyMember);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FamilyMemberExists(familyMember.FamilyMemberId))
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

        // POST: FamilyMembers/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var familyMember = await _context.FamilyMember.FindAsync(id);
            _context.FamilyMember.Remove(familyMember);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FamilyMemberExists(string id)
        {
            return _context.FamilyMember.Any(e => e.FamilyMemberId == id);
        }
    }
}
