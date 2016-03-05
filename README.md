# PracticeCode
Contains beginner reusable code for HTML JS and CSS3, that can be used to teach new learner how to use awesome web technologies.


#HTML
#CSS
#Ajax

1. Using JQuery methods
```
  $.ajax();
  $.get();
  $.post();
 ``` 
  Using promise implementation
```
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
```
Practice APi to Use:

https://api.github.com/users

https://api.github.com/users/knitesh
