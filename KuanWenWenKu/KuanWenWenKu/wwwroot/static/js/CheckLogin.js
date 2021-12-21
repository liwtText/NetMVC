// 登陆时的客户端校验
function checkLogin(uid, pid)
{
    // 用户名 空校验
    var oUser = document.getElementById(uid);
    if(oUser)
    {
        if(oUser.value == "")
        {
            alert("请输入用户名！");
            oUser.focus();
            return false;
        }
    }
    
    // 密码 空校验 长度校验
    var oPwd = document.getElementById(pid);
    if(oPwd)
    {
        if(oPwd.value == "")
        {
            alert("请输入密码！");
            oPwd.focus();
            return false;
        } 
    }
    
    return true;
}