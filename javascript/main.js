/* CURRENTLY IN: javascript/main.js */

(function(){ // protect the lemmings! 


$("img").dimmer({
  on: 'hover'
});

function returnPocketObject() {
			$.ajax({
				url:"http://fewd.us/lizkalina/api/GET/tag/"
				, data: {
				}
				, method: 'POST'
			}).then(function(data){
				pocketObject = JSON.parse(data);
				// console.log(pocketObject);
	


		var itemObjectsArray = [];

		function getItemObjects() {
			for ( var item in pocketObject.list ) {
					var itemObjects = pocketObject.list[item];
					itemObjectsArray.push(itemObjects);
				}
		}
		
		getItemObjects();

		console.log(itemObjectsArray); // array with all Pocket objects!


		
		// var itemTagsArray = [];

		// function getItemTags() {
		// 	for ( var position in pocketObject.list ) {
		// 		var selectedTag = itemObjectsArray[position].tags.project.tag;
		// 		if ( selectedTag != undefined ){
		// 			itemTagsArray.push(selectedTag);	
		// 		}
		// 		else {return;}
					
		// 	}
		// }
		
		// getItemTags();

		// console.log(itemTagsArray); // array with all Pocket objects!








		var iframeSrc = $([]);

		function getIframeSrc() {
			for ( var position in itemObjectsArray ) {
				
				var selectedItem = itemObjectsArray[position];
				if (selectedItem.has_image == 1 ) {
					var itemPhoto = selectedItem.image.src;
					// console.log(itemPhoto);
					iframeSrc.push(itemPhoto); 
				}

				else {
					var itemGivenURL = selectedItem.given_url;
					// console.log(itemGivenURL);
					iframeSrc.push(itemGivenURL);
					}
				}
			}

		getIframeSrc();

		console.log (iframeSrc);


// 	function addNewIframes () {
// 		console.log( $( '.iframe--template' ).html() );
// 		var nytimes = "http://www.nytimes.com/" ;
// 		var iframeTemplate = _.template( $( '.iframe--template' ).html() );
// 		var newIframe = iframeTemplate({testHref: nytimes});

// 		$('.first--column').prepend(newIframe);
// 	}	

// addNewIframes();


			});
		}

returnPocketObject();

})();













// function loopThroughPocketObjects() {
// 	var itemNumArray = Object.keys(pocketObject.list)
// 	,	itemGivenURL = [];
// 	for ( var i = 0; i < itemNumArray.length; i++ ) {
// 		console.log(itemNumArray[0]); //prints each itemID
// 		var itemID = itemNumArray[i];
// 		console.log(pocketObject.list[itemID]);
// 		itemGivenURL.push(pocketObject.list[itemID].given_url);
// 	};
// 	return itemGivenURL;
// }

// loopThroughPocketObjects();


// function addIframe () {
// 	var iframeArray = [];
// 	for (i=0; i<iframeArray.length; i++) {
// 	var newIframe = document.createElement("iframe"); 
//   	var newContent = document.createTextNode("src="http://underscorejs.org/" scrolling: no;"); 
//   	newIframe.appendChild(newContent);
// 	}
// }// generate iframe for loop