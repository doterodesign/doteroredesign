var currentPage = location.hash.replace( /^#/, '' );
// var prev = $(".prev").attr("href", currentPage);
// var next = $(".next").attr("href", currentPage);

$(".prev").click(function() {
	var container = $(".container[data-client]");
	for(var i = 0; i < container.length; i++)
		var current = container[i];
		if($(container[i]).attr("id") == currentPage) {
			current.show();
		}
}); 



