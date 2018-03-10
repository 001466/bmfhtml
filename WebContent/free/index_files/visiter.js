


$(function(){
	

	var url=window.document.location.href;
	var i=url.indexOf("#");
	if(i>-1){
		url=url.substring(0,i);
	}
	
	$.ajax({
	    type: 'POST',
	    method: "POST",
	    url:'http://ordersvr.easyad888.com/visitor/add',
	    //url: 'http://localhost:8888/visitor/add',
	    data: {
	    	"customType":1,
	    	"customFrom":"sogou",
	    	"customVisitUrl": url,
	    	"producttype":"bmf"
	    },
        crossDomain: true,
        success  : function(data) {  
        	console.log('wellcome!');
        } 
	}); 
	


});