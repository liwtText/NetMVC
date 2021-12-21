using NPOI.HSSF.UserModel;
using NPOI.SS.Converter;
using NPOI.SS.UserModel;
using NPOI.Word2Html;
using NPOI.XSSF.UserModel;
using NPOI.XWPF.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace UploadFileWinForm
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string strWord = Path.Combine(Application.StartupPath, "abc.docx");
            NpoiDoc npoiDoc = new NpoiDoc();

            _ = npoiDoc.NpoiDocx(strWord, NpoiDoc_uploadImgUrlyDelegate);
        }
        private string NpoiDoc_uploadImgUrlyDelegate(byte[] imgByte, string picType)
        {
            return $"data:{picType};base64,{Convert.ToBase64String(imgByte)}";
        }
        /// <summary>
        /// （NPOI）Excel转HTML
        /// </summary>
        /// <param name="HtmlName">HTML文件的的名称（不带后缀）</param>
        /// <param name="Filename">需要转换Excel的绝对路径</param>
        /// <returns></returns>
        public string ExcelToHtml(string HtmlName, string Filename)
        {
            IWorkbook workbook;
            //获取后缀名称
            string fileExt = Path.GetExtension(Filename).ToLower();
            //判断是否可以打开该文件，如果出错则文件已经打开或者有异常
            if (!File.Exists(fileExt)) return null;
            using (FileStream fs = new FileStream(Filename, FileMode.Open, FileAccess.Read))
            {
                //如果是XLSX格式选择XSSFWorkbook ，如果是XLS格式选择HSSFWorkbook 
                if (fileExt == ".xlsx")
                { workbook = new XSSFWorkbook(fs); }
                else if (fileExt == ".xls")
                { workbook = new HSSFWorkbook(fs); }
                else { workbook = null; }
                if (workbook == null) { return null; }

            }

            ExcelToHtmlConverter eth = new ExcelToHtmlConverter();

            // 设置输出参数
            eth.OutputColumnHeaders = true; //是否输出ColumnHeader
            eth.OutputHiddenColumns = false;//是否在表头插入一行序列号
            eth.OutputHiddenRows = false;//是否输出HiddenRow
            eth.OutputLeadingSpacesAsNonBreaking = true; //不清楚
            eth.OutputRowNumbers = false;//是否在列头插入一行序列号
            eth.UseDivsToSpan = false; //不清楚


            // 加载Excel文件
            eth.ProcessWorkbook(workbook);

            // 保存文件值当前路径

            string htmlFile = Application.StartupPath + "\\" + HtmlName + ".html";
            eth.Document.Save(htmlFile);
            return htmlFile;

        }

        public static void Export()
        {
            string filepath = Path.Combine(Application.StartupPath, "abc.docx");
            //string filepath = HttpContext.Current.Server.MapPath("~/simpleTable.docx");
            var tt = new { name = "cjc", age = 29 };
            using (FileStream stream = File.OpenRead(filepath))
            {
                XWPFDocument doc = new XWPFDocument(stream);
                //遍历段落                  
                foreach (var para in doc.Paragraphs)
                {
                    //ReplaceKey(para, tt);
                }                    //遍历表格      
                var tables = doc.Tables;
                foreach (var table in tables)
                {
                    foreach (var row in table.Rows)
                    {
                        foreach (var cell in row.GetTableCells())
                        {
                            foreach (var para in cell.Paragraphs)
                            {
                                //ReplaceKey(para, tt);
                            }
                        }
                    }
                }

                //FileStream out1 = new FileStream(HttpContext.Current.Server.MapPath("~/simpleTable" + DateTime.Now.Ticks + ".docx"), FileMode.Create);
                //doc.Write(out1);
                //out1.Close();
            }
        }

    }
}
