$(document).ready(function(){
	$('.ryu').on('mouseenter', function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.on('mouseleave', function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.on('mousedown', function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show()
			.animate({
				'left': '300px'
			},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
			);
	})
	.on('mouseup', function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.hadouken').hide();	
	});
});

