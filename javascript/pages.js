
var iteration = 0
	, pagination = 10;

for (var i = iteration; i < pagination; i++) {
	page = Math.floor(iteration/pagination);
	i++
}

var pageNumber = '.pg-'+page;



$('.filterbutton').on('click', function( e ) {
			e.preventDefault();
			var filter = $( this ).attr('data-tag');
			if ( typeof filter === "undefined" ) return;
			var pageFilter = $(this).attr(pageNumber);

			container.isotope({ filter: filter + "." + pageFilter});
		});

 