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
        //takes  in race, class, name, background
        public Character(string name, CharacterRaces race, CharacterClasses characterClass)
            {

            int minStat = 8;

            racialBonuses.Add("Strength", race.raceBonuses[0]);
            racialBonuses.Add("Dexterity", race.raceBonuses[1]);
            racialBonuses.Add("Constitution", race.raceBonuses[2]);
            racialBonuses.Add("Intelligence", race.raceBonuses[3]);
            racialBonuses.Add("Wisdom", race.raceBonuses[4]);
            racialBonuses.Add("Charisma", race.raceBonuses[5]);

            foreach (KeyValuePair<string,int> kvp in racialBonuses)
            {
                statDict.Add(kvp.Key, minStat + racialBonuses[kvp.Key]); 
            }

            Name = name;
             Race = race;
             CharacterClass = characterClass;
 

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int level = 0;
        public IDictionary<string,int> statDict = new Dictionary<string, int>();
        public IDictionary<string, int> racialBonuses = new Dictionary<string, int>();
        public CharacterRaces Race { get; set; }
        public CharacterClasses CharacterClass { get; set;}
        public int charGold = 0;
        public int charSilver = 0;
        public int charCopper = 0;
    }
}
