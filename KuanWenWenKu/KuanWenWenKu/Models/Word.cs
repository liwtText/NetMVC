using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace KuanWenWenKu.Models
{
    public class Word
    {
        public int Id { get; set; }
        public string Title { get; set; }
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string Gif { get; set; }
        public string Url { get; set; }
        public string Format { get; set; }
        public int Browse { get; set; }
        public int Price { get; set; }
    }
}
