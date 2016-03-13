$('#container').isotope({
    layoutMode: 'masonryHorizontal',
    masonryHorizontal: {
        rowHeight: 160
    }
});

var offset = $(':target').offset();
var scrollto = offset.top - 108; // minus fixed header height
$('html, body').animate({scrollTop:scrollto}, 0);
