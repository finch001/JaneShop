/**
 * Created by finch on 5/22/17.
 */
$(function () {
	$("#nav li").hover(function () {
		$(this).find(".jnNav").show();
	}, function () {
		$(this).find(".jnNav").hide();
	});
})



