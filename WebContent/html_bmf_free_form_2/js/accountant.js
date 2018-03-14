 


function allcp(thid) {
	 
		
	 if (thid.checked == true) {
		 thid.parentNode.className = "redborder";
	 }else{
		 thid.parentNode.className = "";
	 }
	
	 
    vals = thid.value.split("|");


    var totalMoney = 0;
    for (var i = 0; i < $(".ck").length; i++) {
        if ($(".ck")[i].checked == true) {
            totalMoney = Number(totalMoney) + Number($(".ck")[i].value.split("|")[0]);
        }
    }
    $("#productPrices").val(totalMoney);
    document.getElementById("productPricesLabel").innerHTML=totalMoney;

   
    

    var selectedUl = document.getElementById("productSelected");
    var li = document.createElement("li");
    if (thid.checked == true) {
    	li.innerHTML = vals[1];
    	selectedUl.appendChild(li);
    }else {
        var ls = selectedUl.getElementsByTagName("li");
        for (var i = 0; i < ls.length; i++) {
            var txt = ls[i].innerText || ls[i].textContent;
            if (txt === vals[1]) {
            	selectedUl.removeChild(ls[i])
            }
        }
    }

   
    
    
    var pds = "";
    $('#productSelected li ').each(function () {
    	pds += $(this).html()+"|";
    })
    $("#productId").val(pds.substring(0,pds.length-1));
    

}