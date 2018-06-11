 //DOES NOT CURRENTLY WORK//



 
//ALL CONTAINERS WITH DATA-CLIENT ATTRIBUTE
  var containers = $('[data-client=""]');
  var current =	location.hash.replace( /^#/, '' );
var prev;
var next;


var test = function client() {
	for(var i = 0; i < containers.length; i++) {
		currentContainerId = $(containers[i]).attr("id") 
	if(	currentContainerId === current) {
		var prev = $(containers[i]).prev().attr("id");
				prev = "#" + prev;
		var next = $(containers[i]).next().attr("id");
			next = "#" + next;
	}
}
};

console.log(test())

//CURRENT LOCATION WITHOUT HASH

  //FINDING PREVIOUS AND NEXT CLIENT
  //  for (var i = 0;  i < containers.length;  i++) {
		// var clients = $(containers[i]);
		// console.log(clients);
		// var prev = $(clients).prev().attr("id");
		// prev = "#" + prev;
		// var next = $(clients).next().attr("id");
		// next = "#" + next;

  // }

//ASSIGNING PREV AND NEXT CLIENT TO .PREV AND .NEXT CLASSES

//CLICK EVENT FOR .PREV ANCHOR
$(".prev").click(function() {
	$(".prev").attr("href", prev);

});

// //CLICK EVENT FOR .NEXT ANCHOR
$(".next").click(function() {
	containers.hide();
	$(".next").attr("href", next);
});



