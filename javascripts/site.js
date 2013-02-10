jQuery('.grid').masonry({
    itemSelector: '.box',
    columnWidth: 150,
    gutterWidth: 10,
    isFitWidth: true,
    isAnimated: false, //use css3 transitions,
    // isAnimated: !Modernizr.csstransitions
});

// jQuery(function() {
//     var apiKey = '3d11728f76c24d29fdc401b26b877bdb';
//     var format = 'json';
//     var group_id = '40961104@N00'; //wallpaper group
//     var group_id = '659436@N24'; //HD wallpapers
//     var tag = '<COMMA SEPERATED LIST OF TAGS>';
//     var method = 'flickr.groups.pools.getPhotos';
//     var perPage = '1';
//     var showOnPage = '1';

//     jQuery.getJSON('http://api.flickr.com/services/rest/?format=' + format + '&method=' +
//         method + '&api_key=' + apiKey + '&per_page=' + perPage +
//         '&group_id=' + group_id + '&jsoncallback=?',
//     function(data){
//     	var photo = data.photos.photo[0];

//     	var basePhotoURL = 'http://farm' + photo.farm + '.static.flickr.com/'
//             + photo.server + '/' + photo.id + '_' + photo.secret;
//         var largeImage = basePhotoURL + '_b.jpg';
//         console.log(largeImage);
//     });
// });

jQuery.getFeed({
	url: 'http://blog.vanutsteen.nl/atom.xml',
	success: function(feed) {
		var ul = jQuery('<ul>');

		for (var i=0; i < feed.items.length; i++) {
			item = feed.items[i];

			var li = jQuery('<li>');
			var a = jQuery('<a>');
			a.html(item.title);
			a.attr('href', item.link);
			a.attr('target', '_blank');

			li.append(a);
			ul.append(li);

			if (i > 3) {
				break;
			}
		};

		ul.insertAfter('.box.blog a');
	}
});
