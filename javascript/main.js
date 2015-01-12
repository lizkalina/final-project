/* CURRENTLY IN: javascript/main.js */
function returnPocketObject() {
return $.ajax({
		url: "http://fewd.us/lizkalina/api/GET/tag"
				, data : {}
				, method: 'POST'
			}).then(function(data){
				var pocketObject = JSON.parse(data);
				console.log(pocketObject);
				console.log(pocketObject.list);
				console.log(pocketObject.list[6996]);
				var itemNum = Object.keys(pocketObject.list);
				console.log(itemNum[0]);
				
				
				for ( var i = 0; i < itemNum.length; i++ ) {
					console.log(itemNum[i]);
					var itemID = itemNum[i];
					console.log(pocketObject.list[itemID]);
					console.log(pocketObject.list[itemID].given_url);
				}//grab all Pocket item objects & URLs
				

			}
);
}

returnPocketObject();




function addIframe () {
	var iframeArray = [];
	for (i=0; i<iframeArray.length; i++) {
	var newIframe = document.createElement("iframe"); 
  	var newContent = document.createTextNode("src="http://underscorejs.org/" scrolling: no;"); 
  	newIframe.appendChild(newContent);
	}
}// generate iframe for loop


