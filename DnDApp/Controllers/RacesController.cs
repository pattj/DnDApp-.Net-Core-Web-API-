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
    public class RacesController : Controller
    {
        RaceList raceList = new RaceList();
        // GET: api/<controller>
        //Return  list of character races
        [HttpGet]
        public IActionResult Get()
        {
            

            return new JsonResult(
            raceList,
            new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            });
        }

        // GET api/<controller>/5
        //Return information about the race that the user selected/passed  in
        [HttpGet("{raceName}")]
        public IActionResult Get(string raceName)
        {
            return new JsonResult(
           raceList.avaliableRaces.Where(raceObj => raceObj.raceName.ToLower() == raceName.ToLower()),
           new JsonSerializerSettings()
           {
               Formatting = Formatting.Indented
           });
        }

     
    }
}
