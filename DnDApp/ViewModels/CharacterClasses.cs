using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DnDApp.ViewModels
{
    public class CharacterClasses
    {

        [JsonProperty("description")]
        public string description { get; set; }
        [JsonProperty("Class Name")]
        public string clName { get; set; }
         
        [JsonProperty("magicUser")]
        public Boolean magicUser { get; set; }
        [JsonProperty("hitdice")]
        public string hitdice { get; set; }
        [JsonProperty("armourProf")]
        public List<string> armourProf { get; set; }
        [JsonProperty("weaponProf")]
        public List<string> weaponProf { get; set; }
        [JsonProperty("toolProf")]
        public List<string> toolProf { get; set; }
        [JsonProperty("savingProf")]
        public List<string> savingProf { get; set; }
        [JsonProperty("skillChoices")]
        public int skillChoices { get; set; }
        [JsonProperty("skillsToChoose")]
        public List<string> skillsToChoose { get; set; }
        [JsonProperty("EquipmentChoice1")]
        public List<string> EquipmentChoice1 { get; set; }
        [JsonProperty("EquipmentChoice2")]
        public List<string> EquipmentChoice2 { get; set; }
        [JsonProperty("EquipmentChoice3")]
        public List<string> EquipmentChoice3 { get; set; }
        [JsonProperty("EquipmentChoice4")]
        public List<string> EquipmentChoice4 { get; set; }
        [JsonProperty("otherEquipment")]
        public List<string> otherEquipment { get; set; }
        // public List<string> startingClassAbilities { get; set; }
        [JsonProperty("ClassAbilities")]
        public AbilityJson ClassAbilities { get; set; }
        [JsonProperty("Subclass")]
        public List<string> Subclass { get; set; }

        public CharacterClasses(string className)
        {
            //parse Json using the className
          //  string fileLocation = Directory.GetCurrentDirectory() + "\\Data\\ClassesJson\\" + className +".json";

    
 

        }

    }

    public class ClassList 
    {
        public List<CharacterClasses> avaliableClasses = new List<CharacterClasses>();

        public ClassList()
        {
            //fetch character classes from JSON
            string classesFolderLocation = Directory.GetCurrentDirectory() + "\\Data\\Classes";
            string[] classesJson = Directory.GetFiles(classesFolderLocation);

            foreach (string rJ in classesJson)
            {
                avaliableClasses.Add(JsonConvert.DeserializeObject<CharacterClasses>(File.ReadAllText(rJ)));

            }

            foreach (CharacterClasses ClassObj in avaliableClasses)
            {
                var fileLocation = Directory.GetCurrentDirectory() + "\\Data\\AbilitiesJson\\" + ClassObj.clName +" Abilities.json";
                ClassObj.ClassAbilities = JsonConvert.DeserializeObject<AbilityJson>(File.ReadAllText(fileLocation));
            }
        }
 
        
    }

    
}
