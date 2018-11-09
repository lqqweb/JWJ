//底部公司信息
window.onload=function(){

	   footerPosition();
		function footerPosition(){
        $(".bootom").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight || document.documentElement.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $(".bootom").addClass("fixed-bottom");
        } else {
            $(".bootom").removeClass("fixed-bottom");
        }
    }

    window.onresize =footerPosition;

}

//右侧咨询框
	$(function(){

		var $bottomTools = $('.right_tools');
		
		$(window).scroll(function () {
			var scrollHeight = $(document).height();
			var scrollTop = $(window).scrollTop();
			var $windowHeight = $(window).innerHeight();
			scrollTop > 50 ? $(".backUp_tool").fadeIn(200).css("display","block") : $(".backUp_tool").fadeOut(200);
			$bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 120 : $windowHeight + scrollTop + 120 - scrollHeight);
		});

		$('.backUp_tool').click(function (e) {
			e.preventDefault();
			$('html,body').animate({ scrollTop:0});
		});

	});


//底部公司信息

// 	$(function(){
//     function footerPosition(){
//         $(".bootom").removeClass("fixed-bottom");
//         var contentHeight = document.body.scrollHeight,//网页正文全文高度
//             winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
//         if(!(contentHeight > winHeight)){
//             //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
//             $(".bootom").addClass("fixed-bottom");
//         } else {
//             $(".bootom").removeClass("fixed-bottom");
//         }
//     }
//     footerPosition();
//     $(window).resize(footerPosition);


// });
