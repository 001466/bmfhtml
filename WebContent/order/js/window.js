var win = new function () {
    // 确认框和提示框宽度
    this.width = 350;

    // 确认框和提示框高度
    this.height = 172;

    // 手动关闭窗体
    this.close = function () {
        $('.win iframe').remove();
        $('.win').remove();


    };



    // 打开窗体
    this.open = function (width, height, title, url, closed) {
        this._close = function () {
            this.close();
            if ($.isFunction(closed)) closed();
        };

        var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><a href="javascript:void(0)" onclick="win._close();" class="close-btn" title="关闭">×</a><iframe class="body-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto" src=""></iframe></div></div>';
        var jq = $(html);
        jq.find(".window-panel").height(height).width(width).css("margin-left", -width / 2).css("margin-top", -height / 2);
        jq.find(".title").find(":header").html(title);
        jq.find(".body-panel").height(height - 36).attr("src", url);
        jq.appendTo('body').fadeIn();
        $(".win .window-panel").focus();
    };

    // 显示消息框
    function messageBox(html, title, message) {
        win.close();
        var jq = $(html);

        jq.find(".window-panel").height(win.height).width(win.width).css("margin-left", -win.width / 2).css("margin-top", win.height / 4);
        jq.find(".title-panel").height(win.height);
        jq.find(".title").find(":header").html(title);
        jq.find(".body-panel").height(win.height - 36);
        if (message == "ImgMsg") {
            jq.find(".content").prepend("<img src='../images/ok.jpg'/*tpa=http://crm.jiekezunni.cn/Ztrh_Hty/images/ok.jpg*/  />"); //图片提示
            jq.find(".content").css("padding", "0px 0px 0px 0px");
            jq.find(".window-panel").css({ "height": '260px', "margin-top": "-100px" });
            jq.find(".w-btn").css({ "margin": '15px 10px 0px 10px' });
			 clock(10);
        }else {
            jq.find(".content").html(message.replace('\r\n', '<br/>'));
        }
        jq.appendTo('body').show();
        $(".win .w-btn:first").focus();
		//clock(10);
        center(jq.find('.title-panel'));
    }


    // 确认框
    this.confirm = function (title, message, selected) {
        this._close = function (r) {
            this.close();
            if ($.isFunction(selected)) selected(r);
        };
		
        var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><a href="javascript:void(0)" onclick="TMclose();" class="close-btn" title="关闭">×</a><div class="body-panel"><p class="content"></p><p class="btns"><button class="w-btn" tabindex="1" onclick="TMclose();">好的</button><button class="w-btn" onclick="TMclose();">关闭</button></p></div></div></div>';
        messageBox(html, title, message);
 
    };

    // 黄玉产品确认框
    this.confirmhy = function (title, message, selected) {
        this._close = function (r) {
            this.close();
            if ($.isFunction(selected)) selected(r);
        };
		
        var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><a href="javascript:void(0)" onclick="HYclose();" class="close-btn" title="关闭">×</a><div class="body-panel"><p class="content"></p><p class="btns"><button class="w-btn" tabindex="1" onclick="HYclose();">好的</button><button class="w-btn" onclick="HYclose();">关闭</button></p></div></div></div>';
        messageBox(html, title, message);
    };

    // 提示框
    this.alert = function (title, message, closed) {
        this._close = function () {
            this.close();

            if ($.isFunction(closed)) closed();
        };

        var html = '<div class="win"><div class="mask-layer"></div><div class="window-panel"><iframe class="title-panel" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe><div class="title"><h3></h3></div><a href="javascript:void(0)" onclick="win._close();" class="close-btn" title="关闭">×</a><div class="body-panel"><p class="content"></p><p class="btns"><button class="w-btn" tabindex="1" onclick="win._close();">知道了</button></p></div></div></div>';
        messageBox(html, title, message);
    }

    // 提示框
    this.alertEx = function (message) {
        this.alert('系统提示', message);
    }
};



// 居中
function center(obj) {

    var screenWidth = $(window.parent).width(), screenHeight = $(window.parent).height();  //当前浏览器窗口的 宽高
    var scrolltop = $(document).scrollTop(); //获取当前窗口距离页面顶部高度

    var objLeft = (screenWidth - obj.width()) / 2;
    var objTop = (screenHeight - obj.height()) / 2 + scrolltop;

    obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });
    //浏览器窗口大小改变时
    $(window).resize(function () {
        screenWidth = $(window).width();
        screenHeight = $(window).height();
        scrolltop = $(document).scrollTop();

        objLeft = (screenWidth - obj.width()) / 2;
        objTop = (screenHeight - obj.height()) / 2 + scrolltop;

        obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });

    });
    //浏览器有滚动条时的操作、
    $(window).scroll(function () {
        screenWidth = $(window).width();
        screenHeight = $(window).height();
        scrolltop = $(document).scrollTop();

        objLeft = (screenWidth - obj.width()) / 2;
        objTop = (screenHeight - obj.height()) / 2 + scrolltop;

        obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });
    });

}

function clock(i) {
    i = i - 1
    $("H3").html("成功！窗口" + i + "秒后自动关闭跳转推荐产品！");
    if (i > 0) {

        setTimeout("clock(" + i + ")", 1000);
    }
    else {
        $('.win iframe').remove();
        $('.win').remove();
        parent.location.href = 'http://hx-xj.wangzhan0123.cn/';

    }

}


