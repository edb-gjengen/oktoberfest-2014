function scrollTo(ev, element, highlight) {
	if (highlight === undefined) highlight = false;
	
	var initialColor = "#95AA61";

	if (highlight) $(element).css("background", initialColor);
	$("body").stop().scrollTo(element, 400, function() {
		if (highlight) $(element).animate({ backgroundColor: $.Color('transparent') }, "slow");
	});
	ev.preventDefault();
}

/**
 * Parallax.
 */
$(function() {
	$(document).scroll(function() {
		$('body').css( 'background-position', '0px -' + $('body').scrollTop()/20 + 'px' );
console.log( $('body').scrollTop()/2 + ' 0px');
	});
});
