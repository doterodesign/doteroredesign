//CHANGE TOP-LEFT-CORNER NAME INTO URL NAME OF CURRENT CONTAINER
function removeHash() {
	var withoutHash = location.hash.replace( /^#/, '' );
	return(withoutHash);
}

var changeClientName = function (hash) {
	var leftMenuTitle = $(hash).data("left-corner"); 
	    $("#clientNameDisplay h2").text(leftMenuTitle);
};
// Make containerToShow to location.hash and show containerToShow 
var container = $('div.container').get();
var containerToShow = "#work";
if (location.hash != "") {
	containerToShow = location.hash;
	changeClientName(containerToShow)
}
$(containerToShow).show();

// newContainer  = location.hash without hash. Show container with id equal to location.hash w/out hash
var hideCurrentContainerAndShow = function(newContainer) {
	for(var i = 0; i < container.length; i++) {
		if($(container[i]).attr('id') ===  newContainer) {
			$(container).hide();
			$(container[i]).show();
		}
	}
}


//remove hash from location.hash, hideCurrentContainerAndShow location.hash, changeClientName(location.hash)
function hashchanged(hashChanged){
		hashChanged = removeHash();
		 hideCurrentContainerAndShow(hashChanged);
		 changeClientName(location.hash);
}
window.addEventListener("hashchange", hashchanged, false);



//TOGGLE BG COLOR OF MOBILE NAVIGATION//
var navbarNav = $('.navbar-nav');
var navToggle = $('.navbar-toggler');
var currentSize = $('div').css('font-size');
 var currentSizeChange = parseFloat(currentSize)*0.8;


console.log(navbarNav);
console.log(navToggle);

// $('.job-description').click( function() {
// 	$('footer').toggleClass("opaque");
// });

$(".job-description").click(function() {
   $('footer').toggleClass("opaque");
   });

	$('.navbar-toggler').click( function() {
		 $(".mobile").toggleClass("opaque");
	});file:///Users/dimitriotero/Desktop/doteroredesign/main-test.html#carouselExampleControls

$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    $(".mobile").removeClass("opaque");
});









