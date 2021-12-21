using KuanWenWenKu.Data;
using KuanWenWenKu.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace KuanWenWenKu.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly KuanWenWenKuContext _context;

        public HomeController(ILogger<HomeController> logger, KuanWenWenKuContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Test()
        {
            return View();
        }
        public IActionResult Details()
        {
            return View();
        }
        
       [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<JsonResult> GetDataAsync(string code)
        {
            List<Word> words = new List<Word>();
            try
            {
                words = await _context.Word.ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogDebug("异常：" + ex);
            }
            return Json(words);
        }

       
    }
}
