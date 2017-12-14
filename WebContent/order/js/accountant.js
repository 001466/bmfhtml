function mone(thid, che, totalMoney) {

    var mon = document.getElementById("mon");

    var bazhe1 = document.getElementById("bazhe1");

    var bazhe2 = document.getElementById("bazhe2");

    var taoshu = document.getElementById("taoshu");

    //var hdmon = document.getElementById("hdmon");
    if (che == 0) {

        mon.innerHTML = 0;

        //hdmon.value = 0;
        bazhe1.style.display = "none";

        bazhe2.style.display = "none";

        taoshu.style.display = "none"

    } else if (che == 1) {

        mon.innerHTML = totalMoney;

        //hdmon.value = totalMoney;
        bazhe1.style.display = "none";

        bazhe2.style.display = "none";

        taoshu.style.display = "none"

    } else {

        totalMoney = Number(totalMoney);

        mon.innerHTML = totalMoney;

        //taoshu.innerHTML = "һ";
        //hdmon.value = totalMoney + "-1";
        bazhe1.style.display = "inline";

        bazhe2.style.display = "inline";

        taoshu.style.display = "inline"

    }

}


 


function allcp(thid) {
	 

	 if (thid.checked == true) {
		 thid.parentNode.className = "redboder";
	 }else{
		 thid.parentNode.className = "";
	 }
	
	 return ;
	 
    vals = thid.value.split("|");

    var che = 0;

    var totalMoney = 0;

    var prdAttr = 0;

    jncheck = 0;
    
    for (var i = 0; i < $(".ck").length; i++) {

        if ($(".ck")[i].checked == true) {

            prdAttr = $(".ck")[i].value.split("|");

            totalMoney = Number(totalMoney) + Number(prdAttr[0]);

            che++

        }

    }
    
    
   
    $("#Prices").val(totalMoney);

    var selectedUl = document.getElementById("productSelected");

    var li = document.createElement("li");

    var a = document.createElement("a");

    li.appendChild(a);

    

    if (thid.checked == true) {

    	a.innerHTML = vals[1];

    	selectedUl.appendChild(li);

    }

    else {

        var as = selectedUl.getElementsByTagName("li");

        thid.parentNode.className = "";

        for (var i = 0; i < as.length; i++) {

            var txt = as[i].innerText || as[i].textContent;

            if (txt === vals[1]) {

                as[i].parentNode.removeChild(as[i])

            }

        }

    }

    var pd = "";
    var i = 0;
    $('#productSelected li a').each(function () {
        if (i == 0) {
            pd += $(this).html()
        }
        else if (i == 1) {
            pd += $(this).html();
        }
        else {
            pd += "+" + $(this).html();
        }
        i++;
    })
    
    $("#Products").val(pd);
    



    //mone(thid, che, totalMoney)

}