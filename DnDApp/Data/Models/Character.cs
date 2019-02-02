using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DnDApp.Data.Models
{
    public class Character
    {
        public Character()
        {

        }

        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        [Required]
        public string Race { get; set; }
        //public string Background { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public DateTime LastModifiedDate { get; set; }

        public string Campaigns { get; set; }

        #region Lazy-Load Properties
        /// <summary>
        /// The owner of the character: it will be loaded
        /// on first use thanks to the EF Lazy-Loading feature.
        /// </summary>
        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }

        #endregion
    }
}
