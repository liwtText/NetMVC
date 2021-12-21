// 免费注册 前台数据校验
function chkReg()
{
    // Email
    var oEmail = document.getElementById(eId);
    if(oEmail)
    {
        if(oEmail.value == "")
        {
            alert("请输入用户名！");
            oEmail.focus();
            return false;
        } 
    }

    // 密码
    var oPassword = document.getElementById(pId);
    if(oPassword)
    {
        if(oPassword.value == "")
        {
            alert("请输入密码！");
            oPassword.focus();
            return false;
        }
        else if(oPassword.value.length < 6)
        {
            alert("密码长度不能小于6位！");
            oPassword.focus();
            return false;
        }
    }

    // 确认密码
    var oCpassword = document.getElementById(cId)
    if(oCpassword)
    {
        if(oCpassword.value == "")
        {
            alert("请输入确认密码！");
            oCpassword.focus();
            return false;
        }
        else if(oCpassword.value != oPassword.value)
        {
            alert("两次密码输入不一致！");
            oCpassword.focus();
            return false;
        }
    }
     

    return true;
}