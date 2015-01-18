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

	getPocketObject( 'gettags', { tag: '' }).then(function(data){
		data = JSON.parse(data);

		var templateHTML = $('.iframe--template').html();
		var tmp = _.template( templateHTML )
				, grid = $('.data-container');

		for ( var item in data.list ) {
			var curr = data.list[ item ]
				, obj = {};

			obj.given_title = curr.given_title;

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

		$('.filterbutton').on('click', function( e ) {
			e.preventDefault();
			var filter = $( this ).attr('data-tag');
			if ( typeof filter === "undefined" ) return;

			container.isotope({ filter: filter });
		});
	}); // get tags

})();