(function($) {
	$( document ).ready(function() {
	$profile = $('#profile');
	$name = $('#name');
	$email = $('#email');
	$birthday = $('#birthday');
	$address = $('#address');
	$phone = $('#phone');
	$password = $('#password');
	  $.ajax({
	    url: 'https://randomuser.me/api/',
	    dataType: 'json',
	    success: function(data) {
	      console.log(data.results[0]);
	      $profile.html("<img class='rounded-circle' src='"+ data.results[0].picture.large +"'>");
	      $name.text(data.results[0].name.first +" "+ data.results[0].name.last);
	      $email.text("Email: " +data.results[0].email);
	      $birthday.text("Birthday: " +data.results[0].dob.date);
	      $address.text("Address: " +data.results[0].location.street.number +" "+ data.results[0].location.street.name);
	      $phone.text("Phone: " +data.results[0].phone);
	      $password.text("User: " +data.results[0].login.username +" Password: "+data.results[0].login.password);
	    }
	  });
	});

	$('#user-btn').click(function() {
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data) {
		    console.log(data);
		    $profile.html("<img class='rounded-circle' src='"+ data.results[0].picture.large +"'>");
		    $name.text(data.results[0].name.first +" "+ data.results[0].name.last);
		    $email.text("Email: " +data.results[0].email);
		    $birthday.text("Birthday: " +data.results[0].dob.date);
		    $address.text("Address: " +data.results[0].location.street.number +" "+ data.results[0].location.street.name);
		    $phone.text("Phone: " +data.results[0].phone);
		    $password.text("User: " +data.results[0].login.username +" Password: "+data.results[0].login.password);
		  }
		});
	});

})(jQuery);