$(document).ready(function(){
	// $(".LikeButton").click(function(){
 //    	$(".LikeCounter").animate({
	// 		var replaced = $("body").html().replace('-9o0-9909','<b>The new string</b>');
	// 	$("body").html(replaced);

	        // left: '250px',
	        // height: '+=150px',
	        // width: '+=150px'

var Counter1 = 769
var Counter2 = 554
var Counter3 = 324


$("#LikeButton1").click(function(){
	Counter1 = Counter1 +1 
	$(".LikeCounter1").text(Counter1)
    	});

$("#LikeButton2").click(function(){
	Counter2 = Counter2 +1 
	$(".LikeCounter2").text(Counter2)
    	});

$("#LikeButton3").click(function(){
	Counter3 = Counter3 +1 
	$(".LikeCounter3").text(Counter3)
    	});
	
$( "p" ).click(function() {
  $( this ).scroll();
});

	}); 

