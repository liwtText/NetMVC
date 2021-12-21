function scrollDoor(){} 
scrollDoor.prototype = { 
    sd : function(menus,divs,openClass,closeClass){ 
        var _this = this; 
        if(menus.length != divs.length) 
        { 
            //alert("菜单层数量和内容层数量不一样!"); 
            return false; 
        }                 
        for(var i = 0 ; i < menus.length ; i++) 
        {     
            _this.$(menus[i]).value = i;                 
            _this.$(menus[i]).onmouseover = function(){ 
                     
                for(var j = 0 ; j < menus.length ; j++) 
                {                         
                    _this.$(menus[j]).className = closeClass; 
                    _this.$(divs[j]).style.display = "none"; 
                } 
                _this.$(menus[this.value]).className = openClass;     
                _this.$(divs[this.value]).style.display = "block";                 
            } 
        } 
        }, 
    $ : function(oid){ 
        if(typeof(oid) == "string") 
        return document.getElementById(oid); 
        return oid; 
    } 
} 
/*
window.onload = function(){ 
    var SDmodel = new scrollDoor(); 
    SDmodel.sd(["m01","m02","m03","m04"],["c01","c02","c03","c04"],"sd01","sd02"); 
    SDmodel.sd(["db01","db02"],["db001","db002"],"sd01","sd02");
	SDmodel.sd(["s01","s02"],["x01","x02"],"sd01","sd02");
	SDmodel.sd(["tj01","tj02","tj03","tj04","tj05","tj06","tj07","tj08"],["tj001","tj002","tj003","tj004","tj005","tj006","tj007","tj008"],"sd01","sd02");
} 
*/