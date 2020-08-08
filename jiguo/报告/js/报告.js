$(".body1_content span").click(function  () {
	$(this).css({"color":"red","border-bottom":" 2px solid red"});
	$(this).siblings().removeAttr("style");
	var i=$(this).index();
	$("body2_content").eq(i).show;
	$(".body2_content").eq(i).siblings().hide();
	alert(1)
})