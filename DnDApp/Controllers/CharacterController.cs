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
            var RaceList = new RaceList();
            var ClassList = new ClassList();
            var SampleCharacters = new List<Character>();

            SampleCharacters.Add(new Character("Chris", RaceList.avaliableRaces.Where(race => race.raceName == "Dragonborn").FirstOrDefault(),
                ClassList.avaliableClasses.Where(classObj => classObj.clName == "Paladin").FirstOrDefault())
            {
                Id = 1
            }
 
      );
            SampleCharacters.Add(new Character("Vinh", RaceList.avaliableRaces.Where(race => race.raceName == "Humans").FirstOrDefault(), ClassList.avaliableClasses.Where(classObj => classObj.clName == "Bard").FirstOrDefault())
            {
                Id = 2,
                
            }
      );


            SampleCharacters.Add(new Character("Connor", RaceList.avaliableRaces.Where(race => race.raceName == "Humans").FirstOrDefault(), ClassList.avaliableClasses.Where(classObj => classObj.clName == "Fighter").FirstOrDefault())
                {
                Id = 3,
                 
             
            }
                );

            SampleCharacters.Add(new Character("Kurt", RaceList.avaliableRaces.Where(race => race.raceName == "Drow").FirstOrDefault(), ClassList.avaliableClasses.Where(classObj => classObj.clName == "Ranger").FirstOrDefault())
                {
                Id = 4,
              

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
