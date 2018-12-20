$(function(){
    common();
    gnb();
    visual();
    notice();
    overView();
    table();
})
function common(){
    $(document).on("click","a[href='#'],button",function(e){
        e.preventDefault();
    })
}
function gnb(){
	var subGnb=$("#gnb .gnb-menu ul li .sub-gnb");
	var gnbMenu=$("#gnb .gnb-menu>ul>li>a");
	var w="";
	var windowW=$(window).width();
	var mMenu=$("#gnb .gnb-menu>ul>li>a");
	var mSub=$("#gnb .gnb-menu ul li .sub-gnb");
	if(windowW>768){
		$(window).on("resize load",function(){
			gnbMenu.hover(function(){
				w=$(this).next(".sub-gnb").innerWidth()-40;
				subGnb.hide();
				$(this).next(".sub-gnb").css({display:"block",marginLeft:-(w/2)});
				console.log(w)
			})
			$("#header").on("mouseleave",function(){
				subGnb.hide();
			})
		})
	}else{
		mMenu.on("click",function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				$(this).next().slideUp();
			}else{
				mMenu.removeClass("on");
				$(this).addClass("on");
				mSub.slideUp();
				$(this).next().slideDown();
			}
		})
		$("#gnb .gnb-menu.left>ul>li:last-child>a").on("click",function(){
			if($(this).hasClass("on")){
				$(this).parents("ul").css({paddingBottom:0})
			}else{
				$(this).parents("ul").css({paddingBottom:10})
			}
		})
		$(".menu-bt button").on("click",function(){
			if($(this).hasClass("close")){
				$("#gnb").slideUp();
				$(this).removeClass("close");
			}else{
				$("#gnb").slideDown();
				$(this).addClass("close");
			}
		})
	}
	$(window).on("load resize",function(){
		windowW=$(window).width();
		if(windowW<720){
			$("#gnb").hide();
			$(".menu-bt button").removeClass("close");

		}else if(windowW>768){
			$("#gnb").show();
			$(".menu-bt button").removeClass("close");
		}
	})

}
function visual(){
	var item=$("#visual .banner li");
	var pagingLi=$("#visual .paging li");
	var cnt=0;
	var timer="",delay=4000;
	timer=setInterval(make,delay);
	function make(){
		cnt++;
		if(cnt>2){cnt=0;}
		banner();
	}
	pagingLi.on("click",function(){
		cnt=$(this).index();
		banner();
		clearInterval(timer);
		timer=setInterval(make,delay);
	})
	function banner(){
		pagingLi.removeClass("on")
		pagingLi.eq(cnt).addClass("on");
		item.fadeOut(800);
		item.eq(cnt).fadeIn(600);
	}
}
function notice(){
	var nList=$(".notice-wrap .notice-list");
	var timer="",delay=3000;
	var h=$(".notice-wrap .notice-list li").height();
	var cnt=0;
	timer=setInterval(make,delay);
	function make(){
		cnt++;
		if(cnt>2){cnt=0};
		nList.animate({top:-(cnt*h)})
	}
}
function overView(){
	var item=$(".section .ov-list li");
	var itemNum=item.length;
	var max=0;
	var itemArr=[];
	console.log(itemNum)
	for(var i=0;i<itemNum;i++){
		itemArr[i]=item.eq(i).innerHeight();
		console.log(itemArr[i])
	}
	for(var i=0;i<itemNum;i++){
		if(max<itemArr[i]){
			max=itemArr[i];
		}
		max=item.eq(0).height();
		console.log(max);
	}
	// item.height(max)
	// for(var i=0;i<item.length;i++){
	// 	if(max<item.eq(i).height()){
	// 		max=item.eq(i).height();
	// 	}
	// }
	// max=item.eq(0).innerHeight();
	// console.log(max)
	// $(window).on("resize load",function(){
	// 	for(var i=0;i<item.length;i++){
	// 		if(max<item.eq(i).innerHeight()){
	// 			max=item.eq(i).innerHeight();
	// 		}
	// 	}
	// 	console.log(max)
	// })
	
}
function table(){
	var tab=$(".table-top .tab-box li a");
	var cnt=0;
	var id="";
	$(".table").first().show();
	tab.on("click",function(e){
		tab.parent("li").removeClass("on");
		$(this).parent("li").addClass("on");
		e.preventDefault();
		id=$(this).attr("href");
		$(".table").css({display:"none"});
		console.log(id)
		$(id).show();
	})
}