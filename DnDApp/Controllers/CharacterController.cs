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
    public class CharacterController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var SampleCharacters = new List<Character>();

            SampleCharacters.Add(new Character()
            {
                Id = 1,
                Name = "Jim",
                Race = "Elf"
            }
      );
            SampleCharacters.Add(new Character()
            {
                Id = 2,
                Name = "Vinh",
                Race = "Human"
            }
      );


            SampleCharacters.Add(new Character()
                {
                Id = 3,
                Name ="Connor",
                Race = "Human"
            }
                );

            SampleCharacters.Add(new Character()
                {
                Id = 4,
                Name ="Kurt",
                Race = "Orc"
            }
                );

            return new JsonResult(
            SampleCharacters,
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            });

        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
