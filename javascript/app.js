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
		var colors = ['yellow', 'blue', 'green','purple']
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


		var i = 0;
		for ( var item in data.list ) {

			var curr = data.list[ item ]
				, obj = {};

			obj.given_title = curr.given_title;
			obj.given_url = curr.given_url;
			obj.resolved_title = curr.resolved_title;
			obj.randomColor = randomColor();
			
			
		function parseURL(url) {
   			 var parser = document.createElement('a'),
    		    searchObject = {},
    		    queries, split, i;
    		// Let the browser do the work
    		parser.href = url;
    		// Convert query string to object
    		queries = parser.search.replace(/^\?/, '').split('&');
    		for( i = 0; i < queries.length; i++ ) {
    		    split = queries[i].split('=');
    		    searchObject[split[0]] = split[1];
    		}
    		return {
    		    protocol: parser.protocol,
    		    host: parser.host,
    		    hostname: parser.hostname,
    		    port: parser.port,
    		    pathname: parser.pathname,
    		    search: parser.search,
    		    searchObject: searchObject,
    		    hash: parser.hash
    		};
		}

		obj.parsedURL = parseURL(obj.given_url);
		obj.hostname_url = obj.parsedURL.hostname;



			
			var timeAdded = new Date(curr.time_added * 1000);
			obj.time_added = (timeAdded.toLocaleDateString());
			

			if ( curr.has_image === "1" ) {
				obj.has_image =  1;
				obj.image_src = curr.image.src;
			} // if image exists
			else {
				obj.image_src = "";
				obj.has_image = 0;
			} // otherwise update appr


			if ( curr.resolved_title === "" ) {
				obj.has_extra_title =  0;
				obj.best_title = curr.given_title;
			} // if image exists
			else {
				obj.has_extra_title = 1;
				obj.best_title = obj.resolved_title;
				
			} // otherwise update appr



			if ( curr.excerpt === "" ) {
				obj.has_details =  0;
			} // if image exists
			else {
				obj.has_details = 1;
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
			grid.prepend( tmp( obj ) );

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
			// div.attr('data-tag', '.pg-'+j);
			// div.text( 'PAGE '+j );
			// $('.tags__bar').append(div);
		}

		
		


		$('.filterbutton').on('click', function( e ) {
			e.preventDefault();
			var filter = $( this ).attr('data-tag');
			if ( typeof filter === "undefined" ) return;

			container.isotope({ filter: filter });
		});
	}); // get tags

})();