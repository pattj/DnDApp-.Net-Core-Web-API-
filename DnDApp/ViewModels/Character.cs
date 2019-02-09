using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
 
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DnDApp.Data.Models;

namespace DnDApp.ViewModels
{
    public class Character
    {
        public Character()
            {
            }

        public int Id { get; set; }
        public string Name { get; set; }
        public CharacterRaces Race { get; set; }
        public CharacterClasses CharacterClass { get; set;}
    }
}
