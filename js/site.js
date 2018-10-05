$( document ).ready(function() {
	$(function(){
	    $("#claim-text").typed({
	    	strings: ["Tasty tech events in ^300 Trento."],
	        typeSpeed: 0
	    });
	});

	// Set the date we're counting down to
	var countDownDate = new Date("Oct 12, 2018 17:00:00").getTime();

	function countDown () {
		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));

		// Display the result in the element with id="demo"
		$("#days").text(days);

		// If the count down is finished, write some text
		if (distance < 0) {
			$("#retreat").hide();
		}
	}

	// Update the count down every 1 second
	var timedCountDown = setInterval(function() {

		countDown();

		}, 60000);

	countDown();
});