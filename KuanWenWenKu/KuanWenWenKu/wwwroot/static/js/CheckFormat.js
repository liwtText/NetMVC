// 格式校验

// 邮箱格式
function isEmail(email)
{
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(emailReg.test(email))
    {
        return true;
    }

    return false;
}

// 手机格式
function isMobile(mobile)
{
    var mobileReg = /^1\d{10}$/;
    if(mobileReg.test(mobile))
    {
        return true;
    }

    return false;
}

// 座机格式
function isPhone(phone)
{
    var phoneReg = /^(\d{3}|\d{4})-(\d{7}|\d{8})(-\d+)*$/;
    if(phoneReg.test(phone))
    {
        return true;
    }

    return false;
}

// 邮编格式
function cisPostcode(postcode)
{
    var postReg = /^\d{6}$/;
    if(postReg.test(postcode))
    {
        return true;
    }

    return false;
}

// 传真格式
function isFax(fax)
{
    var phoneReg = /^(\d{3}|\d{4})-(\d{7}|\d{8})(-\d+)*$/;
    if(phoneReg.test(fax))
    {
        return true;
    }

    return false;
}

// 正整数
function IsNum(value)
{
    var numReg = /^\d+$/;
    if(numReg.test(value))
    {
        return true;
    }

    return false;
}

//URL
function IsUrl(str)
{
    var Expression = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true)
    {
        return true;
    }
    return false;
}