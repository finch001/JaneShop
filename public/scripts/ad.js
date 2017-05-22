/**
 * Created by finch on 5/22/17.
 */
$(function () {
	var $imgrolls = $("#jnImageroll div a");
	var index = 0;
	$imgrolls.css("opacity", "0.7");
	var adTimer = null;
	var len = $imgrolls.length;
	$imgrolls.mouseover(function () {
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();

	$("#jnImageroll").hover(function () {
		if (adTimer) {
			clearInterval(adTimer);
		}
	}, function () {
		adTimer = setInterval(function () {
			showImg(index);
			index++;
			if (index == len) {
				index = 0;
			}
		}, 5000);
	}).trigger("mouseleave");
})

function showImg(index) {
	var $rollList = $("#jnImageroll div a");

	var newHref = $rollList.eq(index).attr("href");

	$("#JS_imgWrap").attr("href", newHref).find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
	$rollList.removeClass("chos").css("opacity", "0.7")
		.eq(index).addClass("chos").css("opacity", "1");
}