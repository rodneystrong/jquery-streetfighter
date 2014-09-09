$(document).ready(function(){
	//when the user hovers over ryu
	$('.ryu').on('mouseenter', function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.on('mouseleave', function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	//when the user clicks on ryu
	.on('mousedown', function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
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
	//the keyboard 'x' function for ryu-cool
	$("body").on('keydown', function(e) {
		if(e.which==88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	//when the user lets go of the 'x' key
	.on('keyup', function() {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}