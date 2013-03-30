$(function() {

	// attach IP address information
	var ip_info;
	$.ajax({
		type: 'GET',
		url: 'http://api.hostip.info/get_json.php'
	}).done(function(response){
		ip_info = response;
		// TODO: send the info to the server asynchronously
		// TODO: store a cookie with a unique identifier for this user
	});

	$('.product-link').click(function() {
		// TODO: send this action to the server asynchronously
		// 		use the unique identifier we stored earlier
	});
})