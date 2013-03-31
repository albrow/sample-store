$(function() {

	// attach IP address information
	var ip_info;
	$.ajax({
		type: 'GET',
		url: 'http://api.hostip.info/get_json.php'
	}).done(function(ip_response){
		ip_info = ip_response;
		console.log(ip_info)
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/visitors/fetch', 
			data: {visitor: ip_info}
		}).done(function(visitor_response) {
			console.log(visitor_response);
		});
	});

	$('.product-link').click(function() {
		// TODO: send this action to the server asynchronously
		// 		use the unique identifier we stored earlier
	});
})