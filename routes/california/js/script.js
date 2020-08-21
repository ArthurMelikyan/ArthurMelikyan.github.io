// ! svg  4ever



$(document).ready(function(){
    $(document).on('scroll', function(){
        $("#mainNav").offset().top > 80 ? $("#mainNav").addClass("navbar-shrink") : $("#mainNav").removeClass("navbar-shrink")
    });
  
    $(document).on('mouseenter', '#map path, #map polyline,#map circle,#map polygon', function () {
        let m = $(this);
        if (m.attr('title')) {
            $(m).tooltip('show');
        }
    });
    $.get('http://127.0.0.1:5500/ca.min.svg', function(svg){
        $('#map .map_block').html(svg);
    }, 'text');
 
});