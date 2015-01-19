(function(){

	var __MARQUEEAPI__ = "http://fewd.us/lizkalina/api/"
		, __GET__ = "GET/"
		, __TAG__ = "tag/";

	function getPocketObject( method, tags ) {
		var url, data = {};

		if ( method === "gettags" ) {
			url = __MARQUEEAPI__ + __GET__ + __TAG__;
		}

		if ( typeof tags !== "undefined" ) {
			$.extend( data, tags );
		}

		return $.ajax({
			url: url
			, data: data
			, method: 'POST'
		});
	} // getPocketObject



	function randomColor(){
		var colors = ['yellow', 'blue', 'green']
			, random = Math.floor(Math.random() * colors.length);
		
		// console.log(colors[random]);
		return colors[random] + '-bg';
	}

	getPocketObject( 'gettags', { tag: '' }).then(function(data){
		data = JSON.parse(data);
		console.log(data);
		var templateHTML = $('.iframe--template').html();
		var tmp = _.template( templateHTML )
				, grid = $('.data-container');
		// var totalItems = 0;
		
		// for (var i in data){
		// 	totalItems++
		// }

		// var interval = 10;
		// var amtOfPages = totalItems/interval;
		// var start 	= 1;		
		// var page = 1;

		// for ( var i = page; i <= amtOfPages; i++){
		// 	// for (var x = ){
		// 		obj.page = page;

		// 		start += interval;
		// 		interval += interval;
		// 		page++;
		// }
		var i = 0;
		for ( var item in data.list ) {

			var curr = data.list[ item ]
				, obj = {};

			obj.given_title = curr.given_title;
			obj.randomColor = randomColor();

			if ( curr.has_image === "1" ) {
				obj.has_image =  1;
				obj.image_src = curr.image.src;
			} // if image exists
			else {
				obj.image_src = "";
				obj.has_image = 0;
			} // otherwise update appr

			obj.excerpt = curr.excerpt;
			var allTags = [];
			for ( var tags in curr.tags ) {
				var currentTag = curr.tags[ tags ];
				allTags.push( currentTag.tag );
			}
			var pagination = Math.floor( i/ 10 )+1;
			allTags.push( 'pg-'+pagination );
			i++;
			obj.tagClass = allTags.join(' ');
			grid.append( tmp( obj ) );

		} // for each item in list

		var container = $('.data-container');
		// init
		container.isotope({
		  // options
		  itemSelector: '.rowitem',
		  layoutMode: 'masonry'
		});

		console.log( pagination, i );
		for ( var j = 1; j <= pagination; j++ ) {
			var div = $('<div/>');
			div.addClass('filterbutton');
			div.attr('data-tag', '.pg-'+j);
			div.text( 'PAGE '+j );
			$('.tags__bar').append(div);
		}


		$('.filterbutton').on('click', function( e ) {
			e.preventDefault();
			var filter = $( this ).attr('data-tag');
			if ( typeof filter === "undefined" ) return;

			container.isotope({ filter: filter });
		});
	}); // get tags

})();