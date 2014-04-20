$(window).resize(function() {
	if(this.resizeTO) clearTimeout(this.resizeTO);
	this.resizeTO = setTimeout(function() {
		$(this).trigger('resizeEnd');
	}, 500);
});

$(window).bind('resizeEnd', function() {

	var win_wi;
	var nb;
	var i;

	win_wi = $(document).width();
	$("#pluie").empty();
	nb = win_wi / 16;
	i = 1;
	while (i < nb) {
		$("#pluie").prepend('<div class="goutte' + i + '"></div>');
		i++;
	}
});

$(window).ready( function() {
	var win_wi;
	var nb;
	var i;

	win_wi = $(document).width();
	nb = win_wi / 16;
	i = 1;
	while (i < nb) {
		$("#pluie").prepend('<div class="goutte' + i + '"></div>');
		i++;
	}
});
