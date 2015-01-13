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



// function loopThroughPocketObjects() {
// 	var pocketObjectID = Object.keys(pocketObject.list);
// 	for ( var i = 0; i < pocketObjectID.length; i++ ) {
// 					var itemID = pocketObjectID[i];
// 					console.log(pocketObject.list[itemID]);
// 					console.log(pocketObject.list[itemID].given_url);
// 					return pocketObject.list[itemID];
// 				}//grab all Pocket item objects & URLs
// 		}

// loopThroughPocketObjects();

function loopThroughPocketObjects() {
	var itemNumArray = Object.keys(pocketObject.list)
	,	itemGivenURL = [];
	for ( var i = 0; i < itemNumArray.length; i++ ) {
		console.log(itemNumArray[0]); //prints each itemID
		var itemID = itemNumArray[i];
		console.log(pocketObject.list[itemID]);
		itemGivenURL.push(pocketObject.list[itemID].given_url);
	}
	return itemGivenURL[];
}

// function returnPocketObject() {
//      $.ajax({
// 		url: "http://fewd.us/lizkalina/api/GET/tag"
// 				, data : {}
// 				, method: 'POST'
// 			}).then(function(data){
// 				var pocketObject = JSON.parse(data);
// 				console.log(pocketObject);
// 				return pocketObject;

// 				// console.log(pocketObject);
// 				// console.log(pocketObject.list);
// 				// console.log(pocketObject.list[6996]);
// 				// var itemNum = Object.keys(pocketObject.list);
// 				// console.log(itemNum[0]);
				
				
// 			
				

// 			}
// );
// 			return pocketObject;
// }





// function addIframe () {
// 	var iframeArray = [];
// 	for (i=0; i<iframeArray.length; i++) {
// 	var newIframe = document.createElement("iframe"); 
//   	var newContent = document.createTextNode("src="http://underscorejs.org/" scrolling: no;"); 
//   	newIframe.appendChild(newContent);
// 	}
// }// generate iframe for loop


