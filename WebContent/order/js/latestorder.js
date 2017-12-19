$(function(){	scollDown("latestorder",1000);});function scollDown(id,time){    var time=time||2500;    setInterval(function(){        $("#"+id+" ul").prepend($("#"+id+" ul li:last"));    },time);}var not3chanpin = new Array("十二生肖本命佛");var not3yanse = new Array(" 肖鼠--黑曜石吊坠", " 肖牛--冰种黑曜石", " 肖虎--白玛瑙吊坠", " 肖兔--红玛瑙吊坠", " 肖龙--和田玉吊坠", " 肖蛇--和田青玉本命佛", " 肖马--黑曜石吊坠", " 肖羊--冰种黑曜石", " 肖猴--白玛瑙吊坠", " 肖鸡--和田玉吊坠", " 肖狗--和田青玉本命佛", " 肖猪--黑曜石吊坠");var not3chima = new Array();       function getProduct(){		var not3str="";	
	if(not3chanpin.length !=0){not3str=not3str+not3chanpin[Math.floor((Math.random()*not3chanpin.length))];}	
	if(not3yanse.length !=0){not3str=not3str+not3yanse[Math.floor((Math.random()*not3yanse.length))];}	
	if(not3chima.length !=0){not3str=not3str+not3chima[Math.floor((Math.random()*not3chima.length))];}	
	return not3str;	} 
document.writeln("<ul>");
document.writeln("<li><span>[最新奉请]：<\/span>张**（130****3260）在1分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>李**（136****7163）在3分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>赵**（139****1955）在7分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>刘**（180****6999）在9分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>周**（151****2588）在4分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>王**（133****4096）在10分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>秦**（139****1955）在15分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>朱**（180****6999）在20分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>吴**（151****2588）在12分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新奉请]：<\/span>谭**（133****4096）在18分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>张**（133****1056）在18分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>马**（164****5190）在28分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>李**（130****6366）在38分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>谭**（133****2097）在48分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>李**（137****3296）在53分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");document.writeln("<li><span>[最新奉请]：<\/span>何**（153****8093）在61分钟前奉请了 "+getProduct()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<\/ul>");