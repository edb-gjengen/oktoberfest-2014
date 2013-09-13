function scrollTo(ev, element, highlight) {
	if (highlight === undefined) highlight = false;
	
	var initialColor = "#95AA61";

	if (highlight) $(element).css("background", initialColor);
	$("body").stop().scrollTo(element, 400, function() {
		if (highlight) $(element).animate({ backgroundColor: $.Color('transparent') }, "slow");
	});
	ev.preventDefault();
} 

