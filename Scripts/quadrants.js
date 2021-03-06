

// Sidenav Desktop  Animation
$( "#side-nav-invisible" ).mouseenter(
	function(){
		$("#side-nav")
		.velocity("stop")
		.velocity("transition.slideLeftIn", { duration: 1000 })
	});

$( "#side-nav-invisible-exit" ).mouseleave(
	function(){
		console.log("the mouse has left the building")
		$("#side-nav")
		.velocity("stop")
		.velocity("transition.slideLeftOut", { duration: 1000 })
	});

$( "#filter-btn" ).click(function() {
	$("#filter-modal")
	.velocity("stop")
	.velocity("fadeIn", {duration: 800 })
});

$( "#filter-close-btn" ).click(function() {
	$("#filter-modal")
	.velocity("stop")
	.velocity("fadeOut", {duration: 800 })
});

// Sidenav Mobile Animation
$('#myElement').on('tap', function(e) {
 console.log("the button has been tapped!")
	$("#filter-modal")
	.velocity("stop")
	.velocity("fadeIn", {duration: 800 })
});




$('#filter-btn').bind('tap', function(e) { 
	console.log("the button has been tapped!")
	$("#filter-modal")
	.velocity("stop")
	.velocity("fadeIn", {duration: 800 })
 });

$('#filter-close-btn').bind('tap', function(e) { 
	$("#filter-modal")
	.velocity("stop")
	.velocity("fadeOut", {duration: 800 })
 });


// Task Hover Animation

$( ".task" ).hover(
	function(){
		//put this tasks data into some object
		$(".details-modal")
		.velocity("stop")
		.velocity("fadeIn", { duration: 800 })
	},
	function(){
		$(".details-modal")
		.velocity("stop")
		.velocity("fadeOut", { duration: 800 })
	}
	);

var nav_visible = false;
// $(".menu-btn").tap(function(){
// 	if (nav_visible){
// 		nav_visible = true;
// 		$("#side-nav-mobile").velocity("transition.slideLeftIn", { duration: 1000 })
// 	} 
// 	else {
// 		nav_visible = false;
// 		$("side-nav-mobile").velocity("transition.slideLeftOut", { duration: 1000 })
// }
// });