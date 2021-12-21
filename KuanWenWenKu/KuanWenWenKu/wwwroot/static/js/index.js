
if (adwidth>0) {
    $(document).ready(function () {
        var t = false;
        var str = '';
        var speed = 300;
        var w = adwidth;
        var n = $('#actor li').length;
        var numWidth = n * 48;
        var _left = (w - (numWidth + 26)) / 2;
        var c = 0;
        $('#actor').width(w * n);

        if (adcount > 1) {
            $('#actor li').each(function (i) {
                str += '<span></span>'
            });
        }
        $('#numInner').width(numWidth).html(str);
        $('#numInner').css('left', _left + 13);
        $('#numInner span:first').addClass('on');
        function cur(ele, currentClass) {
            ele = $(ele) ? $(ele) : ele;
            ele.addClass(currentClass).siblings().removeClass(currentClass)
        }
        function slide(j) {
            if ($('#actor').is(':animated') == false) {
                c += j;
                if (c != -1 && c != n) {
                    $('#actor').animate({
                        'marginLeft': -c * w + 'px'
                    },
                    speed)
                } else if (c == -1) {
                    c = n - 1;
                    $("#actor").css({
                        "marginLeft": -(w * (c - 1)) + "px"
                    });
                    $("#actor").animate({
                        "marginLeft": -(w * c) + "px"
                    },
                    speed)
                } else if (c == n) {
                    c = 0;
                    $("#actor").css({
                        "marginLeft": -w + "px"
                    });
                    $("#actor").animate({
                        "marginLeft": 0 + "px"
                    },
                    speed)
                }
                cur($('#numInner span').eq(c), 'on')
            }
        }
        $('#numInner span').click(function () {
            c = $(this).index();
            fade(c);
            cur($('#numInner span').eq(c), 'on')
        });
        $('#numInner span').mouseover(function () {
            c = $(this).index();
            fade(c);
            cur($('#numInner span').eq(c), 'on')
        });
        function fade(i) {
            if ($('#actor').css('marginLeft') != -i * w + 'px') {
                $('#actor').css('marginLeft', -i * w + 'px');
                $('#actor').fadeOut(0,
                function () {
                    $('#actor').fadeIn(500)
                })
            }
        }
        function start() {
            t = setInterval(function () {
                slide(1)
            },
            5000)
        }
        function stopt() {
            if (t) clearInterval(t)
        }
        $("#imgPlay").hover(function () {
            stopt()
        },
        function () {
            if (adcount > 1) start()
        });
        if (adcount > 1) start()
    });
}
if (tjwidth>0) {
$(document).ready(function() {
    var t = false;
    var str = '';
    var speed = 300;
    var w = tjwidth;
    var n = $('#actor2 li').length;
    var numWidth = n * 48;
    var _left = (w - (numWidth + 26)) / 2;
    var c = 0;
    $('#actor2').width(w * n);
    $('#actor2 li').each(function(i) {
        str += '<span></span>'
    });
    //    $('#tuijdiv .mc').width(numWidth);
    //    $('#tuijdiv .num').css('left', _left);
    function cur(ele, currentClass) {
        ele = $(ele) ? $(ele) : ele;
        ele.addClass(currentClass).siblings().removeClass(currentClass)
    }
    function slide(j) {
        if ($('#actor2').is(':animated') == false) {
            c += j;
            if (c != -1 && c != n) {
                $('#actor2').animate({
                    'marginLeft': -c * w + 'px'
                },
                speed)
            } else if (c == -1) {
                c = n - 1;
                $("#actor2").css({
                    "marginLeft": -(w * (c - 1)) + "px"
                });
                $("#actor2").animate({
                    "marginLeft": -(w * c) + "px"
                },
                speed)
            } else if (c == n) {
                c = 0;
                $("#actor2").css({
                    "marginLeft": -w + "px"
                });
                $("#actor2").animate({
                    "marginLeft": 0 + "px"
                },
                speed)
            }
        }
    }
    $('#tuijtag span').click(function() {
        c = $(this).index();
        fade(c);
        cur($('#tuijtag span').eq(c), 'on')
    });
    $('#tuijtag span').mouseover(function() {
        c = $(this).index();
        fade(c);
        cur($('#tuijtag span').eq(c), 'on')
    });
    function fade(i) {
        if ($('#actor2').css('marginLeft') != -i * w + 'px') {
            $('#actor2').css('marginLeft', -i * w + 'px');
            $('#actor2').fadeOut(0,
            function() {
                $('#actor2').fadeIn(500)
            })
        }
    }
    function start() {
        t = setInterval(function() {
            slide(1)
        },
        5000)
    }
    function stopt() {
        if (t) clearInterval(t)
    }
    $("#tuijdiv").hover(function() {
        stopt()
    });
});
 }
 
 
function dakainit() { if (uid == "0") { return } new Ajax.Request("ajax.aspx", { method: "post", parameters: "id=" + uid + "&isdaka=", onSuccess: function (transport) { var response = transport.responseText || ""; if (response != "") { var arr = response.split("|"); if (arr[0] == "0") { return false } else if (arr[0] == "1") { var msg = "<div id='dodaka' class='xiabandaka' onclick='dakaqiandao();'></div>" + "您在" + arr[1] + "打了上班打卡，获取<b style='color:#ff1100'>" + arr[2] + "</b>个" + scorename; $("#daka").empty().append(msg); return false } else if (arr[0] == "2") { var msg = "<div id='dodaka' class='xiuxizhong'></div>" + "您在" + arr[1] + "打了下班打卡，获取<b style='color:#ff1100'>" + arr[2] + "</b>个" + scorename; $("#daka").empty().append(msg); return false } } }, onFailure: function () { } }); return false } function dakaqiandao() { if (uid == "0") { alert("请先登录！"); document.getElementById("username").focus(); return } new Ajax.Request("ajax.aspx", { method: "post", parameters: "id=" + uid + "&daka=", onSuccess: function (transport) { var response = transport.responseText || ""; if (response != "") { var arr = response.split("|"); if (arr[0] == "0") { alert(arr[1]); return false } else if (arr[0] == "1") { alert(arr[1] + "，您获取" + arr[2] + "个积分奖励！"); var msg = "<div id='dodaka' class='xiabandaka' onclick='dakaqiandao();'></div>" + "您在" + arr[3] + "进行了上班打卡，获取<b style='color:#ff1100'>" + arr[2] + "</b>个" + scorename; $("#daka").empty().append(msg); return false } else if (arr[0] == "2") { alert(arr[1] + "，您获取" + arr[2] + "个积分奖励！"); var msg = "<div id='dodaka' class='xiuxizhong'></div>" + "您在" + arr[3] + "进行了下班打卡，获取<b style='color:#ff1100'>" + arr[2] + "</b>个" + scorename; $("#daka").empty().append(msg); return false } } }, onFailure: function () { } }); return false }
 function toQzoneLogin() { var A = window.open("oauth/QQlogin.aspx", "TencentLogin") }
function GetUserActive() {
    new Ajax.Request("Ajax.aspx", { method: "post", parameters: 'ua=1', onSuccess: function (transport) {
        var response = transport.responseText || ""; if (response != "") {
            var arr = response.split(','); if (arr.length == 3) 
{ $("#span_user").text(arr[0]); $("#span_book").text(arr[1]); 
if (isactive=="1") $("#user-container-ul").html(arr[2]); } } }, onFailure: function () { } }); }

function Reg() {
    var username = document.getElementById("reg_username").value;
    var reg_password1 = document.getElementById("reg_password1").value;
    var reg_password2 = document.getElementById("reg_password2").value;
    var reg_email = document.getElementById("reg_email").value;
    if (reg_email == "") { alert("请输入邮箱。"); return false }
    if (username == "") { alert("请输入用户名。"); return false }
    if (reg_password1 == "") { alert("请输入密码。"); return false }
    if (reg_password2 == "") { alert("请输入确认密码。"); return false }
    if (reg_password2 != reg_password1) { alert("两次输入的密码不一致。"); return false } 
    if (!document.getElementById("chkProtocol").checked) { alert("请选择同意服务条款。"); return false }
    new Ajax.Request("LoginByPost.aspx", { method: "post", parameters: "username=" + username + "&password=" + encodeURIComponent(reg_password1) + "&email=" + reg_email + "&reg=1",
        onSuccess: function (transport) {
            var response = transport.responseText || "";
            if (response != "") {
                var arr = response.split(";"); if (arr[0] == "0") { alert(arr[1]); return false }
                else if (arr[0] == "1" || arr[0] == "2") { window.location.href = arr[1] } 
            } 
        }, onFailure: function () { } 
    }); return false
}
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con" + name + i);
        menu.className = i == cursel ? "over" : " ";
        con.style.display = i == cursel ? "block" : "none";
    }
}
function setTab2(cursel, n) {
    for (i = 1; i <= n; i++) {
        var con = document.getElementById("k" + i);
        var con1 = document.getElementById("conA" + i);
        con.className = (i == cursel ? "over" : "");
        con1.style.display = i == cursel ? "block" : "none";
    }
}


function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var yz = document.getElementById("yz").value;
    if (username == "") {
        alert("请输入用户名。");
        return false;
    }
    if (password == "") {
        alert("请输入密码。");
        return false;
    }
    if ((limitlogin==0||havelogin>=limitlogin) && yz == "") {
        alert("请输入验证码。");
        return false;
    }
    var k = "0";
    if (document.getElementById("cookietime").checked) k = "1";

    new Ajax.Request("LoginByPost.aspx", {
        method: "post",
        parameters: "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&k=" + k + "&yz=" + yz + "&r=" + ((limitlogin==0||havelogin>=limitlogin)?"1":"0"),
        onSuccess: function (transport) {
            var response = transport.responseText || ""; 

            if (response != "") {
                var arr = response.split(";");
                if (arr[0] == "0") {
                    alert(arr[1]);
                    havelogin+=1;
                    
                    if((limitlogin==0||havelogin>=limitlogin))
                    {
                        if($("#trverifier"))
                            $("#trverifier").show();
                    }
                    return false;
                } else if (arr[0] == "1") {
                    window.parent.location.href = arr[1];
                    window.opener.location.href = arr[1];
                } else if (arr[0] == "2") {
                    alert(arr[1]);
                    try { window.parent.location.href = arr[2]; } catch (e) { }
                    try { window.opener.location.href = arr[2]; } catch (e) { }
                    
                    
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

function CloseDocWindow() { }
function popFolder(tuid) {
    var fuid = 0;
    new Ajax.Request("User.aspx", {
        method: "post",
        parameters: "fuid=" + encodeURIComponent(fuid),
        onSuccess: function (transport) {
            var response = transport.responseText || ""; 
            if (response != "") { 
                var arr = response.split(";"); 
                fuid = (arr[1]);

                if (fuid == 0) { alert("您好，请先登录！"); window.location.href = 'Login.aspx'; return; }
                var html = '<iframe src="MessageManage/send.aspx?id=' + tuid + '" scrolling="no" frameborder="0" style="width: 500px; height: 260px"></iframe>';

                obj = art.dialog({
                    title: '发私信', content: html,
                    close: CloseDocWindow, width: '520', height: '300', skin: 'blue', lock: true,
                    background: '#666', opacity: .6, duration: 300, fixed: true, left: '50%',
                    top: '38.2%', zIndex: 1987, resize: true, drag: true
                });
            }
        },
        onFailure: function () { }
    });

}
function CloseMe() {
    obj.close(); CloseDocWindow();
}

function guanzhu(id) { 
    new Ajax.Request("User.aspx", {
        method: "post",
        parameters: "tid=" + encodeURIComponent(id),
        onSuccess: function (transport) {
            var response = transport.responseText || "";

            if (response != "") {
                var arr = response.split(";");
                if (arr[0] == "0") { 
                    alert("您好，请先登录！"); window.location.href = 'Login.aspx'; return;
                }
                else if (arr[0] == "1") {
                    alert(arr[1]);
                } 
            }
        },
        onFailure: function () { }
    }); 
}
 