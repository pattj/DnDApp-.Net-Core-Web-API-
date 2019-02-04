using DnDApp.Data.Models;
using Newtonsoft.Json;
//using Newtonsoft.Json;
using System;
using System.IO;
using Xunit;
using Xunit.Abstractions;

namespace XUnitTestProject1
{
    public class UnitTest1
    {
        [Fact]
        public void DeserializeJson()
        {
          
            bool fileExist = false;
            string fileLocation = Directory.GetCurrentDirectory();
           Classes testClass = JsonConvert.DeserializeObject<Classes>(File.ReadAllText("Data\\CharacterClasses\\Bard.json"));
            if (File.Exists("Data\\CharacterClasses\\Bard.json"))
            {
                fileExist = true;
            }
            Assert.True( fileExist);
            Assert.Equal("Bard", testClass.clName);
        }
    }
}
