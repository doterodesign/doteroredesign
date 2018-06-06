var a = Array.prototype.slice.call(document.querySelectorAll('.navigate[href^="#"'));
var pages = Array.prototype.slice.call(document.querySelectorAll('.container'));
var hrefArray;
var i;


function page() {
	for(j = 0; j < pages.length; j++) {
		currentPage = "#" + pages[j].getAttribute("id");
		return currentPage
	};
};



function anchor () {
	for(i = 0; i < a.length; i++) {
		hrefArray = a[i];
	 	if(hrefArray === currentPage) {
	 	}
		return hrefArray;
	};
};



// // MAKE VARIABLE i BECOME var a ARRAY OBJECTS
// 		var hrefArray;
// 		var j;

// 		function href(a, length) {
// 			for(j = 0; j < this.length; j++) {

// 			}
// 		}

// 		for(j = 0; j < a.length.value; j++) {
// 			hrefArray= a[j];
// 			console.log(hrefArray);
// 		}
// 	//GRABS ID OF ALL CONTAINERS AND PUTS THEM INTO AN ARRAY
// 	var containerId;
// 	for(var k = 0; k < pages.length; k++) {
// 		containerId = "#" + pages[k].getAttribute("id");
// 		console.log(containerId);
// 		console.log(k);
// 	}

// 	// GRABS HREF OF ALL ANCHORS AND PUTS THEM INTO AN ARRAY
// 	//     i REFERS TO ALL LINKS
// 		a.forEach(function(i) {
// 			i.addEventListener('click', function() { 
// 				if (hrefArray === containerId) {
// 					containerId.style.display = "block";
// 				}
// 				console.log(containerId[k]);
// 				console.log(hrefArray[j]); 
// 			});
// 	});

// 		//LOGIC: IF hrefArray == containerId DISPLAY WITH BLOCK PAGE WITH SAME ID