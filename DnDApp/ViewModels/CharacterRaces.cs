using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DnDApp.ViewModels
{
    public class CharacterRaces
    {
        [JsonProperty("raceName")]
        public String raceName = "";
        [JsonProperty("Description")]
        public String Description = "";
        [JsonProperty("raceBonuses")]
        public int[] raceBonuses = new int[6];
        [JsonProperty("bonusNotes")]
        public string bonusNotes = "";
        [JsonProperty("size")]
        public string size = "Medium";
        [JsonProperty("speed")]
        public int speed = 30;
        [JsonProperty("speedNotes")]
        public string speedNotes = "";
        [JsonProperty("Vision")]
        public string Vision = "Standard: Need a Torch or magic to see in the Dark";
        [JsonProperty("raceAbilities")]
        public List<string> raceAbilities = new List<string>();

    }

    public class RaceList
    {
        public List<CharacterRaces> avaliableRaces = new List<CharacterRaces>();

        /// <summary>
        /// Constructor for RaceList class.
        /// Goes to where the folder of the Character Races JSONs are stored
        /// Deserialize each of them into CharacterRace objects and store them into the avaliableRaces list
        /// </summary>
        public RaceList()
        {

            string racesFolderLocation = Directory.GetCurrentDirectory() + "\\Data\\Races";
            string[] raceJson = Directory.GetFiles(racesFolderLocation);

            foreach (string rJ in raceJson)
            {
                avaliableRaces.Add(JsonConvert.DeserializeObject<CharacterRaces>(File.ReadAllText(rJ)));
            }


        }
    }
}
