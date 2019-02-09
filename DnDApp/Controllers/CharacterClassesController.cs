using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DnDApp.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DnDApp.Controllers
{
    [Route("api/[controller]")]
    public class CharacterClassesController : Controller
    {
        ClassList classList = new ClassList();

        [HttpGet]
        public IActionResult Get()
        {
             

            return new JsonResult(
            classList.avaliableClasses,
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            });
        }
        // GET api/<controller>/5
        [HttpGet("{className}")]
        public IActionResult Get(string className)
        {
            return new JsonResult(
            classList.avaliableClasses.Where(classObj=> classObj.clName.ToLower() == className.ToLower()),
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
});
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
