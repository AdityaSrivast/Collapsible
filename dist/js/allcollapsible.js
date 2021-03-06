/*MIT License

Copyright (c) 2018 Aditya Srivastava*/

$(document).ready(function() {
	$(".collapsible-body").hide();
	$(".with-arrow").find(".collapsible-title").prepend("<i class='right-arrow'></i>");
	$(".with-plus").find(".collapsible-title").addClass('plus');
	$(".with-vertical-bar").find(".collapsible-title").addClass('vertical-bar');
	$(".with-star").find(".collapsible-title").addClass("star");
	$(".with-pencil").find(".collapsible-title").addClass('pencil');
	$(".with-bullets").find(".collapsible-title").addClass('bullets');
	$(".with-pointer").find(".collapsible-title").addClass('direction-pointer');
	$(".with-caret").find(".collapsible-title").addClass('caret');
	$(".with-right-caret").find(".collapsible-title").addClass('caret-right');
	$(".fadein-effect").find(".collapsible-title").addClass('fadein');
	$(".fadeout-effect").find(".collapsible-title").addClass('fadeout');
	$(".collapsible-title").click(function() {
		$(this).toggleClass("active");
		var collapsible = $(this).closest(".collapsible");
		var active = collapsible.find(".active");
		if($(this).closest('.extensible').length == 0) {
			collapsible.find(".collapsible-body").not($(this).siblings(".collapsible-body")).slideUp(300);
			active.not($(this)).toggleClass("active");
			$("i.down-arrow").not($(this).children("i.down-arrow")).replaceWith("<i class='right-arrow'></i>");
		}
		$(this).siblings(".collapsible-body").slideToggle(300,function() {
			if ($(this).is(':visible')) {
				$(this).siblings(".collapsible-title").children("i.right-arrow").replaceWith("<i class='down-arrow'></i>");
			}
			else {
				$(this).siblings(".collapsible-title").children("i.down-arrow").replaceWith("<i class='right-arrow'></i>");
			}
		});
	})
});
