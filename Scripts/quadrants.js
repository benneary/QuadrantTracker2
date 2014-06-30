$( "#side-nav-invisible" ).hover(
	function(){
		$("#side-nav")
		.velocity("stop")
		.velocity("transition.slideLeftIn", { duration: 1000 })
	},
	function(){
		$("#side-nav")
		.velocity("stop")
		.velocity("transition.slideLeftOut", { duration: 1000 })
	}
	);



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
$(".menu-btn").tap(function(){
	if (nav_visible){
		nav_visible = true;
		$("#side-nav-mobile").velocity("transition.slideLeftIn", { duration: 1000 })
	} 
	else {
		nav_visible = false;
		$("side-nav-mobile").velocity("transition.slideLeftOut", { duration: 1000 })
}
});