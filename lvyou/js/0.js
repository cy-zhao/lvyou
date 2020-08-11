var i = 0;
var sr;
$(function() {
	scroll();
	$(".lunb>ul>li").hover(function() {
		clearTimeout(sr);
	}, function() {
		scroll();
	});
	

});

function scroll() {
$(".prev").click(function  () {
		if (i==0) {
			
		} else{
			i-=1
		}
	
	})
	$(".next").click(function  () {
		if (i==4) {
			
		} else{
			i+=1
		}
			
	})
	if (i == 4) {
		i = 0;
	}
	$(".lunb>ul>li").eq(i).show();
	$(".lunb>ul>li").eq(i).siblings().hide();
	i++;
	
	sr = setTimeout("scroll()", 1500);
	
}
