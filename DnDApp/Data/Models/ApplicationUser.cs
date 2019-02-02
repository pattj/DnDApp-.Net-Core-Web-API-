using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DnDApp.Data.Models
{
    public class ApplicationUser
    {
        public ApplicationUser()
        {

        }

        [Key]
        [Required]
        public string Id { get; set; }

        [Required]
        [MaxLength(128)]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
        public string DisplayName { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        #region Lazy-Load Properties
        /// <summary>
        /// A list of all the character created by this users.
        /// </summary>
        public virtual List<Character> Characters { get; set; }
        #endregion

    }
}
