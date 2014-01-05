jQuery('.grid').masonry({
    itemSelector: '.box',
    columnWidth: 150,
    gutterWidth: 10,
    isFitWidth: true,
    isAnimated: false, //use css3 transitions,
    // isAnimated: !Modernizr.csstransitions
});

jQuery.getJSON("http://blog.vanutsteen.nl/latest.json",
    function(items){
        var ul = jQuery('<ul>');

        for (var i=0; i < items.length; i++) {
            item = items[i];

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
);
