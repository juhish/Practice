# PracticeCode
Contains Practice reusable code for HTML JS and CSS3 only

#Ajax

1. Using JQuery methods
  $.ajax();
  $.get();
  $.post();
  
  Using promise implementation
  $.get()
  .done(function(data){})
  .fail(funciton(err){}).
  .always(function(){});
  
  $.post().done().fail.always();
  
  
  // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( "example.php", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second finished" );
});
  You can also use sucess handlers.
  
  $.post( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
});

$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
