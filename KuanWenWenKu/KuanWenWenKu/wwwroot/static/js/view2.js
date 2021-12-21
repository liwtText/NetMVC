var docViewer; function getDocViewer() {
    if (docViewer)
        return docViewer; else if (window.FlexPaperViewer)
        return window.FlexPaperViewer; else if (document.FlexPaperViewer)
        return document.FlexPaperViewer; else
        return null;
}
function onExternalLinkClicked(link) { window.location.href = link; }
function onProgress(loadedBytes, totalBytes) { }
function onDocumentLoading() { }
function onCurrentPageChanged(pagenum) { }
function onDocumentLoaded(totalPages) { }
function onDocumentLoadedError(errMessage) { }
(function (e) { e.fn.raty = function (l) { options = e.extend({}, e.fn.raty.defaults, l); if (this.attr("id") === undefined) { c("Invalid selector!"); return; } $this = e(this); if (options.number > 20) { options.number = 20; } if (options.path.substring(options.path.length - 1, options.path.length) != "/") { options.path += "/"; } var q = $this.attr("id"), x = options.path, v = options.cancelOff, t = options.cancelOn, r = options.showHalf, o = options.starHalf, h = options.starOff, n = options.starOn, s = options.onClick, g = 0, m = ""; if (!isNaN(options.start) && options.start > 0) { g = (options.start > options.number) ? options.number : options.start; } for (var p = 1; p <= options.number; p++) { m = (options.number <= options.hintList.length && options.hintList[p - 1] !== null) ? options.hintList[p - 1] : p; starFile = (g >= p) ? n : h; $this.append('<img id="' + q + "-" + p + '" src="' + x + starFile + '" alt="' + p + '" title="' + m + '" class="' + q + '"/>').append((p < options.number) ? "" : ""); } $this.append('<input id="' + q + '-score" type="hidden" name="' + options.scoreName + '"/>'); e("#" + q + "-score").val(g); if (r) { var k = e("input#" + q + "-score").val(), j = Math.ceil(k), u = (j - k).toFixed(1); if (u >= 0.3 && u <= 0.7) { j = j - 0.5; e("img#" + q + "-" + Math.ceil(j)).attr("src", x + o); } else { if (u >= 0.8) { j--; } else { e("img#" + q + "-" + j).attr("src", x + n); } } } if (!options.readOnly) { if (options.showCancel) { var w = '<img src="' + x + options.cancelOff + '" alt="x" title="' + options.cancelHint + '" class="button-cancel"/>'; if (options.cancelPlace == "left") { $this.prepend(w + ""); } else { $this.append("").append(w); } $this.css("width", options.number * 20 + 20); e("#" + q + " img.button-cancel").live("mouseenter", function () { e(this).attr("src", x + t); e("img." + q).attr("src", x + h); }).live("mouseleave", function () { e(this).attr("src", x + v); e("img." + q).trigger("mouseout"); }).live("click", function () { e("input#" + q + "-score").val(0); if (s) { s(0); } }); } else { $this.css("width", options.number * 20); } e("img." + q).live("mouseenter", function () { var y = e("img." + q).length; for (var z = 1; z <= y; z++) { if (z <= this.alt) { e("img#" + q + "-" + z).attr("src", x + n); } else { e("img#" + q + "-" + z).attr("src", x + h); } } }).live("click", function () { e("input#" + q + "-score").val(this.alt); if (s) { s(this.alt); } }); $this.live("mouseleave", function () { var D = e(this).attr("id"), z = e("img." + D).length, C = e("input#" + D + "-score").val(); for (var A = 1; A <= z; A++) { if (A <= C) { e("img#" + D + "-" + A).attr("src", x + n); } else { e("img#" + D + "-" + A).attr("src", x + h); } } if (r) { var C = e("input#" + D + "-score").val(), y = Math.ceil(C), B = (y - C).toFixed(1); if (B >= 0.3 && B <= 0.7) { y = y - 0.5; e("img#" + D + "-" + Math.ceil(y)).attr("src", x + o); } else { if (B >= 0.8) { y--; } else { e("img#" + D + "-" + y).attr("src", x + n); } } } }).css("cursor", "pointer"); } else { $this.css("cursor", "default"); } return $this; }; e.fn.raty.defaults = { cancelHint: "cancel this rating!", cancelOff: "cancel-off.png", cancelOn: "cancel-on.png", cancelPlace: "left", hintList: ["bad", "poor", "regular", "good", "gorgeous"], number: 5, path: "img/", readOnly: false, scoreName: "score", showCancel: false, showHalf: false, starHalf: "star-half.png", start: 0, starOff: "star-off.png", starOn: "star-on.png" }; e.fn.raty.readOnly = function (g) { if (g) { e("img." + $this.attr("id")).die(); $this.css("cursor", "default").die(); } else { d(); f(); b(); $this.css("cursor", "pointer"); } return e.fn.raty; }; e.fn.raty.start = function (g) { a(g); return e.fn.raty; }; e.fn.raty.click = function (h) { var g = (h >= options.number) ? options.number : h; a(g); if (options.onClick) { options.onClick(g); } else { c('You should add the "onClick: function() {}" option.'); } return e.fn.raty; }; function d() { var g = $this.attr("id"); e("img." + g).live("mouseenter", function () { var h = e("img." + g).length; for (var j = 1; j <= h; j++) { if (j <= this.alt) { e("img#" + g + "-" + j).attr("src", options.path + options.starOn); } else { e("img#" + g + "-" + j).attr("src", options.path + options.starOff); } } }); } function f() { $this.live("mouseleave", function () { var k = e(this).attr("id"); var g = e("img." + k).length; var j = e("input#" + k + "-score").val(); for (var h = 1; h <= g; h++) { if (h <= j) { e("img#" + k + "-" + h).attr("src", options.path + options.starOn); } else { e("img#" + k + "-" + h).attr("src", options.path + options.starOff); } } }); } function b() { var g = $this.attr("id"); e("img." + g).live("click", function () { e("input#" + g + "-score").val(this.alt); }); } function a(k) { var j = $this.attr("id"), g = e("img." + j).length; e("input#" + j + "-score").val(k); for (var h = 1; h <= g; h++) { if (h <= k) { e("img#" + j + "-" + h).attr("src", options.path + options.starOn); } else { e("img#" + j + "-" + h).attr("src", options.path + options.starOff); } } } function c(g) { if (window.console && window.console.log) { window.console.log(g); } } })(jQuery);
 
function copyurl() { url = document.getElementById("link_url").value; document.getElementById("link_url").value = url; document.getElementById("link_url").focus(); document.getElementById("link_url").select(); copyToClipboard(url); }
function copyToClipboard(txt) {
    if (window.clipboardData) { window.clipboardData.clearData(); window.clipboardData.setData("Text", txt); } else if (navigator.userAgent.indexOf("Opera") != -1) { window.location = txt; } else if (window.netscape) {
        try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); } catch (e) { alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试,具体可以参考http://www.jb51.net/article/16705.htm"); return false; }
        var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard); if (!clip)
            return; var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable); if (!trans)
            return; trans.addDataFlavor('text/unicode'); var str = new Object(); var len = new Object(); var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString); var copytext = txt; str.data = copytext; trans.setTransferData("text/unicode", str, copytext.length * 2); var clipid = Components.interfaces.nsIClipboard; if (!clip)
            return false; clip.setData(trans, null, clipid.kGlobalClipboard);
    }
    alert("复制成功！");
}
function inputFus(desId) { document.getElementById(desId).focus(); $("#" + desId).select(); }
function copyUrl(desId) {
    var obj = document.getElementById(desId); inputFus(desId)
    if (window.ActiveXObject) { ClipCopy = obj.createTextRange(); ClipCopy.execCommand("Copy"); } else { document.getElementById("textUrlError").style.display = "none"; document.getElementById("flUrlError").style.display = "none"; document.getElementById("endShareCodeError").style.display = "none"; document.getElementById(desId + "Error").style.display = "block"; return; }
}
function changeSize(url, w, h, obj) {
    var str = '<embed src="' + url + '" width="' + w + '" height="' + h + '" type="application/x-shockwave-flash" ALLOWFULLSCREEN="true" ALLOWSCRIPTACCESS="always"></embed>'; document.getElementById("endShareCode").value = str; var oBox = document.getElementById('b_size'); var aLI = oBox.getElementsByTagName('a'); var i = 0; for (i = 0; i < aLI.length; i++) { aLI[i].index = i; for (i = 0; i < aLI.length; i++) { aLI[i].className = ""; } }
    obj.className = "cur";
}
var html = "";
function popTest() {

    $("#pflashContent").hide();
    var html = '<iframe src="Share.aspx?id=' + DocID + '" frameborder="0" style="width: 500px; height: 300px"></iframe>';
    obj = art.dialog({ title: '分享资源', content: html, cancel: CloseDocWindow, cancelValue: '关闭',
        close: CloseDocWindow, width: '540', height: '310', skin: 'blue', lock: true, background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%',
        top: '38.2%', zIndex: 1987, resize: true, drag: true
    });

}
function popTest_list() { 
    var html = '<iframe src="Share.aspx?id=' + DocID + '" frameborder="0" style="width: 600px; height: 300px"></iframe>';
    obj = art.dialog({ title: '分享资源', content: html, cancel: CloseDocWindow, cancelValue: '关闭',
        close: CloseDocWindow, width: '640', height: '310', skin: 'blue', lock: true, background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%',
        top: '38.2%', zIndex: 1987, resize: true, drag: true
    });

}
function InitShare() { }
var html = ""; function popTest2() {
$("#pflashContent").hide(); if (html == "") {
    html = document.getElementById("share2").innerHTML; 
    document.getElementById("share2").removeChild(document.getElementById("share")); }
    obj = art.dialog({ title: '分享资源', content: html });
}
function CallLimit(a) { alert("这里调用您自己的js,实现相应功能！"); }
function BookMark(a) { alert("这里调用您自己的书签js,实现相应功能！"); }
function BookNote(a) { alert("这里调用您自己的笔记js,实现相应功能！"); }
function PageLimit(a) { }
function BuyDoc(docid) { popDownLoad(1); }
function ShowDownLoad() { popDownLoad(); }
function TestPageLimit() { new Ajax.Request("Ajax.aspx", { method: "post", parameters: "test=1", onSuccess: function (transport) { window.location.href = window.location.href; }, onFailure: function () { } }); return false; }
var swfVersionStr = "10.0.0"; var xiSwfUrlStr = "FlexPaper/FlexPaper/playerProductInstall.swf";
 
if (isplay == "1") {
    if (document.getElementById("dp")) SwfFile = document.getElementById("dp").value;
    var flashvars = { SwfFile:  SwfFile, Scale: 1, LimitButtonText: LimitButtonText, PageAvage: PageAvage,
        PageTotal: PageTotal, ZoomTransition: "easeOut", ZoomTime: 0.5, ZoomInterval: 0.1,
        FitPageOnLoad: false, FitWidthOnLoad: true, PrintEnabled: false, FullScreenAsMaxWindow: false,
        ProgressiveLoading: true, PageLimit: PLimit, PageLimitUrl: urlroot + "pagelimit.swf",
        IsShowBookMark: IsShowBookMark,
        PrintToolsVisible: false, ViewModeToolsVisible: true, ZoomToolsVisible: true, FullScreenVisible: true,
        NavToolsVisible: true, CursorToolsVisible: false, SearchToolsVisible: false, showMenu: false, ADList: ADList,
        LimitText: encodeURIComponent('<P ALIGN="center"><b><FONT FACE="Arial" SIZE="14" COLOR="#000000" LETTERSPACING="0" KERNING="0">很抱歉，此页已超出免费预览范围啦\r如果喜欢就付费下载吧，价格不贵，且低碳环保！\r全文下载仅售：<FONT COLOR="#ff5500">' + LimitText + '</FONT>' + scorename + '</FONT></b></P>'),
        ADListScroll: ADListScroll, IsShowTextSelect: true, StartAtPage: StartAtPage, SearchServiceUrl: (urlroot + "webservices.aspx?a=search&id=[id]&p=[page]&s=[searchterm]"), IsShowLogin: IsShowLogin, IsShowReg: IsShowReg, FindPwdUrl: urlroot + "GetPwd.aspx", RegSeviceUrl: urlroot + "WebClause.aspx", RequestUrl: urlroot + "WebServices.aspx",
        BookMarkPage: BookMarkPage, IsKeep: false, keepFolderID: keepFolderID, zhuantieUrl: "", yinshuaUrl: "", dayinUrl: "", DocID: DocID, MuluXmlList: "", DocScore: DocScore, IsDownLoad: false, UserInfo: UserInfo, pageType: 3, IsShowPPT: IsShowPPT, IsShowPPTButton: IsShowPPTButton, ADplayTime: ADplayTime, ADPlayUrl: ADPlayUrl, ADWebSiteUrl: ADWebSiteUrl, LogoUrl: urlroot, localeChain: "zh_CN"
    };
    params.quality = "high"; params.bgcolor = "#676f74"; params.allowscriptaccess = "sameDomain";
    params.allowfullscreen = "true";
    var attributes = {}; attributes.id = "FlexPaperViewer"; attributes.name = "FlexPaperViewer";
    swfobject.embedSWF('FlexPaper/FlexPaper/FP_Blue.swf', "flashContent", width, height, swfVersionStr, xiSwfUrlStr,
    flashvars, params, attributes); swfobject.createCSS("#flashContent", "display:block;text-align:left;");
}

function DownLoad() { var url = 'download.aspx?id=' + DocID; CloseDocWindow(); window.open(url); var bd = parseInt($("#bdspan").text()) + 1; $("#bdspan").text(bd); }
function popHelp() { obj = art.dialog({ content: document.getElementById("DivHelp"), close: CloseDocWindow, title: '获取财富提示', ok: false, cancel: true, cancelValue: '关闭', skin: 'blue', lock: true, background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%', top: '38.2%', zIndex: 1987, resize: false, drag: true }); }

function GetOperate() {
    var u = "View.aspx"; $.ajax({ type: "POST", url: u, data: "operate=1&docid=" + DocID + "&type=" + operateType, success: function (msg) {
        var arr = msg.split('|');
        if (arr[0] == "1") {
            if (operateType == "1") {
                var s = '<table><tr><td>购买成功，页面将刷新后即可全文阅读。</td></tr></table>';
                obj.close();
                obj = art.dialog({ content: s, close: refreshMe, title: '提示',
                    ok: refreshMe, okValue: '刷新页面', skin: 'blue', lock: true, background: '#666',
                    opacity: .6, duration: 300, fixed: true, left: '50%', top: '38.2%', zIndex: 1987, resize: true, drag: true
                });
            }
            else {
                var s = '<table><tr><td>下载成功，请点击下面按钮下载文件。</td></tr><tr><td><b><a href="download.aspx?id=' + DocID + '" class="d_button" target="_blank">下载文件</a></b></td></tr></table>';
                obj.close();
                obj = art.dialog({ content: s, close: CloseDocWindow, title: '提示',
                    cancel: CloseDocWindow, cancelValue: '关闭', skin: 'blue', lock: true, background: '#666',
                    opacity: .6, duration: 300, fixed: true, left: '50%', top: '38.2%', zIndex: 1987, resize: true, drag: true
                });
            }
            return false;
        }
        else {
            window.alert(arr[1]); return false;
        }
        return false;
    }, error: function () { window.alert("系统忙，请稍候再试!"); return false; }
    }); return false;
}
function popDownLoad(type) {
    var url = 'download.aspx?id=' + DocID; CloseDocWindow(); window.open(url);return;
    if (uid == "0") { popLogin(); return; } operateType = type;
    var u = "View.aspx"; $.ajax({ type: "POST", url: u, data: "downtip=1&docid=" + DocID + "&type=" + type, success: function (msg) {
        $("#pflashContent").hide();
        var arr = msg.split('|');
        if (arr[0] == "1") {
            obj = art.dialog({ content: arr[1], close: CloseDocWindow, title: '提示',
                ok: GetOperate, cancel: CloseDocWindow, okValue: '确认', cancelValue: '取消', skin: 'blue', lock: true, background: '#666',
                opacity: .8, duration: 300, fixed: true, left: '50%', top: '38.2%', zIndex: 1987, resize: true, drag: true
            });
        }
        else {
            obj = art.dialog({ content: arr[1], close: CloseDocWindow, title: '提示', ok: false, cancel: CloseDocWindow, cancelValue: '关闭',
                skin: 'blue', lock: true, background: '#666', opacity: .8, duration: 300, fixed: true, left: '50%', top: '38.2%',
                zIndex: 1987, resize: true, drag: true
            });
        } 
    }, error: function () { window.alert("系统忙，请稍候再试!"); } 
    });
}

function SetScore(score) { if (uid == "0") { popLogin(); return; }; new Ajax.Request("View.aspx", { method: "post", parameters: "score=" + score + "&docid=" + DocID, onSuccess: function (transport) { var response = transport.responseText || ""; if (response != "") { var arr = response.split(";"); $('div#cancel-custom').empty(); document.getElementById("cancel-custom").style.display = "none"; $('div#cancel-custom2').raty({ hintList: ["", "", "", "", ""], path: 'js/RatyPlugin/img', readOnly: true, start: arr[0] }); $('#msg').text("谢谢评价。"); $('#spanScore').text(arr[0]); $('#spanScoreCount').text(arr[1]); setTimeout(" showmsg()", 1000); } }, onFailure: function () { } }); return false; }
function showmsg() { document.getElementById("msg").innerHTML = ""; }
var sMax; var holder; var preSet; var rated; var voted = false;
var pagesize = parseInt(document.getElementById("HiddenPageSize")==null?"0":document.getElementById("HiddenPageSize").value);
var isinitcomment = false;
function refreshComment() {
    var num_entries = parseInt(commentCount / pagesize); var numy = commentCount % pagesize;
    if (numy > 0) { num_entries = num_entries + 1; }
    $("#Pagination").pagination(num_entries, { num_edge_entries: 1, num_display_entries: 5, callback: pageselectCallback, items_per_page: 1 }); if (num_entries <= 1) $("#Pagination").hide(); else $("#Pagination").show();
     
}
function pageselectCallback(page_index) { if (isinitcomment) { isinitcomment = false; return }; $.ajax({ type: "POST", url: "View.aspx", data: "PageNo=" + (page_index + 1) + "&bid=" + DocID + "&pagesize=" + document.getElementById("HiddenPageSize").value, success: function (msg) { var arr = msg.split(','); if (arr.length == 2) { $("#ct").text(arr[0]); $("#ct2").text(arr[0]); $("#Searchresult").empty().append(arr[1]); } }, error: function () { $("#Searchresult").empty().append("读取数据失败！"); } }); return false; }

function Mark() {

    var pn = document.getElementById("pageNumInput").value;

    if (BookMarkPage == pn) return;

    var u = "WebServices.aspx";$.ajax({ type: "POST", url: u, data: "a=bookmark&id=" + DocID + "&uid=" + uid + "&p=" + pn,
        success: function (msg) {  
            if (msg == "1") {
                BookMarkPage = pn;
                document.getElementById("bookmark").className = "mark1";
                window.alert("书签添加成功");
            }
            else {
                window.alert("书签添加失败");
            }
        }, error: function () { window.alert("提交失败!"); }
    });
}
 
function Button1_onclick() { 
    var text = "textareaComment"; var comment = $F(text); comment = comment.replace(/(^\s*)|(\s*$)/g, "");
    comment = comment.replace(/[\r\n]/g, ""); 
     if (comment == "") { document.getElementById(text).value = ""; alert("请填写评论内容！"); return false; }
     var r = comment;
   
    var u = "View.aspx"; $.ajax({ type: "POST", url: u, data: "bid=" + DocID + "&Remark=" + r, success: function (msg) {
        if (msg == "1") { window.alert("提交成功!"); commentCount++; refreshComment(); document.getElementById(text).value = ""; }
     else {}
    }, error: function () { window.alert("提交失败!"); }
    });
}
function initbookScore(avscore, _isScore) {
    $(function() {
        var hintList = new Array("很差", "较差", "还行", "推荐", "力荐");
        
        if (_isScore == "0") {
            $('div#cancel-custom').raty({ path: 'js/RatyPlugin/img', cancelPlace: 'right', showCancel: false, start: avscore, showHalf: true, hintList: ["很差", "较差", "还行", "推荐", "力荐"], onClick: function(score) { SetScore(score); }, onMouseout: function(score) {
                if (score)
                    document.getElementById("msg").innerHTML = hintList[score - 1];
                else
                    document.getElementById("msg").innerHTML = "";
            }, onMouseon: function(score) {
                if (score)
                    document.getElementById("msg").innerHTML = hintList[score - 1];
                else
                    document.getElementById("msg").innerHTML = "";
            }
            });
        }
        else { $('div#cancel-custom2').raty({ hintList: ["", "", "", "", ""], path: 'js/RatyPlugin/img', readOnly: true, start: avscore }); }

    });
}

function InitDRIcon() {
}

function ChangeScreen() { 
    if (cw == 790) {
        cw = 1060; document.getElementById("boxright").style.display = "none";
        $("#chgscreen").text('窄屏显示'); 
    }
    else {
        cw = 790; document.getElementById("boxright").style.display = "";
        $("#chgscreen").text('宽屏显示');
    }

    if (isplay != "1") {
        var ch = parseInt(zrate * cw + "") == 0 ? 560 : parseInt(zrate * cw + "");
        $('#boxleft').css({
            width: cw
        }); 
        $('.brandlist').css({
            width: $("#boxleft").width() - 80
        });

        $('#flash_div').css({
            width: cw - 20
        }); 
        $('#myElement').css({
            width: cw-20,
            height: ch
        });
        if (document.getElementById("tdmyElement"))
            $('#tdmyElement').css({
                width: cw-20,
                height: ch
            });
    }
    else {
        $('#boxleft').css({
            width: cw
        }); 
        $('.brandlist').css({
            width: $("#boxleft").width() - 80
        });
         

        $('#flash_div').css({
            width: cw-20
        }); 
        if (document.getElementById("FlexPaperViewer"))
            document.getElementById("FlexPaperViewer").width = cw-20;
        setTimeout("AdjustWidth()", 100);
    }
}



function AdjustWidth() { window.document.FlexPaperViewer.AdjustWidth(); }
function refreshMe() { window.location.href = window.location.href; }
var obj;
function CloseDocWindow() { if ($("#pflashContent")) $("#pflashContent").show(); }
function popFolder() {
    $("#pflashContent").hide();
    var html = '<iframe src="FlexPaper/BookFolderSelect.aspx?id=' + DocID + '" scrolling="no" frameborder="0" style="width: 550px; height: 300px"></iframe>'
    if (uid == "0") { popLogin(); return; }
    obj = art.dialog({ title: '收藏资源', content: html, cancel: CloseDocWindow, cancelValue: '取消',
        close: CloseDocWindow, width: '540', height: '380', skin: 'blue', lock: true,
        background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%',
        top: '38.2%', zIndex: 1987, resize: true, drag: true
    });
}
function CloseMe() {
    obj.close();CloseDocWindow();
}
function popLogin() {
    window.location.href = 'login.aspx'; return;
    $("#pflashContent").hide();
    if (uid != "0") { refreshMe(); return; }
    obj = art.dialog({ title: '登录', content: document.getElementById("logindiv").innerHTML,
        close: CloseDocWindow, width: '540', height: '380', skin: 'blue', lock: true, cancel: CloseDocWindow, cancelValue: '取消',
        background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%',
        top: '38.2%', zIndex: 1987, resize: true, drag: true
    });
}
function Login() { 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "") {
        alert("请输入用户名。");
        return false;
    }
    if (password == "") {
        alert("请输入密码。");
        return false;
    }
    var k = "0";
    if (document.getElementById("cookietime").checked) k = "1";

    new Ajax.Request("LoginByPost.aspx", {
        method: "post",
        parameters: "username=" + username + "&password=" + password + "&k=" + k,
        onSuccess: function (transport) {
            var response = transport.responseText || "";
            if (response != "") {
                var arr = response.split(";");
                if (arr[0] == "0") {
                    alert(arr[1]);
                    return false;
                } else if (arr[0] == "1") {
                    refreshMe(); CloseMe(); 
                }

            }
        },
        onFailure: function () { }
    });
    return false;
}

function toQzoneLogin() {
    var A = window.open("oauth/QQlogin.aspx", "TencentLogin");
}
function zoomWorksImg() {
    var worksBigImg = $("#J_worksBigImg"),
		img = worksBigImg.find("img");
    worksBigImg.show();
    var width = img.width(),
		height = img.height(),
		rate = height / width;
    if (width > 1024) {
        width = 1024;
        if ($.browser.msie && $.browser.version == "6.0") {
            img.css({ "width": width + "px", "height": rate * width + "px" });
        }
    }
}