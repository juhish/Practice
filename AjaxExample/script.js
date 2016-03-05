//alert("hello");
$(function(){

var url = "https://api.github.com/users/knitesh";

// $.get(url,function(data){
// 	//console.log(data);
// 	//JSON.stringify(data)
// 	//json.Parse();
// 	for(var info in data){
// 		$("#userInformation").append("<li class='blueclass'>"+info +" : " +data[info]+"</li>")
// 		// window.document.writeln(info +":" +data[info]+"<br/>");
// 	}
// });

//Using Promises
$.get(url)
.done(function(data){
	for(var info in data){
		$("#userInformation").append("<li class='blueclass'>"+info +" : " +data[info]+"</li>")
		// window.document.writeln(info +":" +data[info]+"<br/>");
	}
})
.fail(function(err){
	alert("An error occured");
})
.always(function(){
	console.info("finished");
});

//Code to change color at run time
	$('#chnagecolor').click(function(){
	console.log("Clicked");

$("#userInformation > li").removeClass("blueclass").addClass("redclass");

});

});


