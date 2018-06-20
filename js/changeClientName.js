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
};
//PREVIOUS AND NEXT BUTTON FUNCTIONALITY
var clients = $("[data-client='']");
function changeCarousel(location) {
	for(var k = 0; k < clients.length; k++) {
		var clientID = $(clients[k]).attr("id");
		if(k < clients.length && location == clientID) {
				$(".prev").prop("href", "#" + $(clients[k-=1]).prop("id"));
				$(".next").prop("href", "#" + $(clients[k+=2]).prop("id"));
				$(".prev[href='#undefined']").attr("href", "#" + $(clients[6]).attr("id"));
				$(".next[href='#undefined']").attr("href", "#" + $(clients[0]).attr("id"));
		} 
	}
}
changeCarousel(removeHash());

//HEADER ANIMATIONS ON HOVER AND ON HASHCHANGE
function header() {
	$("header").toggleClass("bounceDownOut")
	.toggleClass("bounceDownIn")
	.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		$("header").removeClass("bounceDownIn")
		.addClass("bounceDownOut");
	});
};
header();


//remove hash from location.hash, hideCurrentContainerAndShow location.hash, changeClientName(location.hash)
function hashchanged(hashChanged) {
		hashChanged = removeHash();
		 hideCurrentContainerAndShow(hashChanged);
		 changeClientName(location.hash);
		 changeCarousel(hashChanged);
		 header($("header"));
}
$("header").hover(header, false);
window.addEventListener("hashchange", hashchanged, false);





//TOGGLE BG COLOR OF MOBILE NAVIGATION && JOB-DESCRIPTION FOOTER//
var navbarNav = $('.navbar-nav');
var navToggle = $('.navbar-toggler');
var currentSize = $('div').css('font-size');
 var currentSizeChange = parseFloat(currentSize)*0.8;


$(".job-description").click(function() {
   $('footer').toggleClass("opaque");
   });

	$('.navbar-toggler').click( function() {
		 $(".mobile").toggleClass("opaque");
		 $(".navbar-nav").toggleClass("mobile-menu-center");
	});
$('.navbar-nav>a').on('click', function() {
    $('.navbar-collapse').toggleClass('hide');
    $(".mobile").removeClass("opaque");
});









