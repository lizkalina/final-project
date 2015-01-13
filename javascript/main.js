/* CURRENTLY IN: javascript/main.js */

function returnPocketObject() {
			$.ajax({
				url:"http://fewd.us/lizkalina/api/GET/tag"
				, data: {
				}
				, method: 'POST'
			}).then(function(data){
				pocketObject = JSON.parse(data);
				console.log(pocketObject);
				return pocketObject;
			});
			return pocketObject;
		}

returnPocketObject();

console.log(pocketObject);



function loopThroughPocketObjects() {
	var itemNumArray = Object.keys(pocketObject.list)
	,	itemGivenURL = [];
	for ( var i = 0; i < itemNumArray.length; i++ ) {
		console.log(itemNumArray[0]); //prints each itemID
		var itemID = itemNumArray[i];
		console.log(pocketObject.list[itemID]);
		itemGivenURL.push(pocketObject.list[itemID].given_url);
	};
	return itemGivenURL;
}

loopThroughPocketObjects();


// function addIframe () {
// 	var iframeArray = [];
// 	for (i=0; i<iframeArray.length; i++) {
// 	var newIframe = document.createElement("iframe"); 
//   	var newContent = document.createTextNode("src="http://underscorejs.org/" scrolling: no;"); 
//   	newIframe.appendChild(newContent);
// 	}
// }// generate iframe for loop

$(document).ready(function(){
  $('.bxslider').bxSlider();
});
