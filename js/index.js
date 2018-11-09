
//右侧咨询框
	$(function(){

		var $bottomTools = $('.right_tools');
		
		$(window).scroll(function () {
			var scrollHeight = $(document).height();
			var scrollTop = $(window).scrollTop();
			var $windowHeight = $(window).innerHeight();
			scrollTop > 50 ? $(".backUp_tool").fadeIn(200).css("display","block") : $(".backUp_tool").fadeOut(200);
			$bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 240 : $windowHeight + scrollTop + 240 - scrollHeight);
		});

		$('.backUp_tool').click(function (e) {
			e.preventDefault();
			$('html,body').animate({ scrollTop:0});
		});

	});


//解决方案
		$(function(){
 			$(".compare").click(function(){
 					$(this).addClass('selectP').siblings().removeClass('selectP');
 					$(".img1").css("display","block");
 					$(".img2").css("display","none");
 					$(".img3").css("display","none");
 					$(".detaliContent1").css("display","block");
 					$(".detaliContent2").css("display","none");
 					$(".detaliContent3").css("display","none");
 			})
 			$(".smartHome").click(function(){
 					$(this).addClass('selectP').siblings().removeClass('selectP');
 					$(".img1").css("display","none");
 					$(".img2").css("display","block");
 					$(".img3").css("display","none");
 					$(".detaliContent1").css("display","none");
 					$(".detaliContent2").css("display","block");
 					$(".detaliContent3").css("display","none");
 			})
 			$(".talentService").click(function(){
 					$(this).addClass('selectP').siblings().removeClass('selectP');
 					$(".img1").css("display","none");
 					$(".img2").css("display","none");
 					$(".img3").css("display","block");
 					$(".detaliContent1").css("display","none");
 					$(".detaliContent2").css("display","none");
 					$(".detaliContent3").css("display","block");
 			})
 		})
