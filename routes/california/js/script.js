$(document).ready(function(){

    $(".loader").fadeOut(700, function() {
        $(".content").fadeIn(500); 
        $(".loader").remove();
    });
    // function order_page_height(){
    //     if ($(".order").length) {   
    //         var header_h = $('.order .top_header').outerHeight(true);
    //         var footer_h = $('.order #footer').outerHeight(true);
    //         var calc_block_h = window.innerHeight-header_h-footer_h;
    //         $('.first_order_msg_block').height(calc_block_h);
    //         $('.order_title').css({marginTop:calc_block_h/4});
    //     }
    // }
    // order_page_height();
    // $(window).resize(function() { 
    //     order_page_height();
    // });
    // window.onresize = function(e) {
    //     order_page_height();
    // };
    // $(document).on('scroll', function(){
    //     if ($("#mainNav").offset().top > 70) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else{
    //         $("#mainNav").removeClass("navbar-shrink");
    //         $('.navbar-collapse').collapse('hide');
    //     }
    // });
    
    // $(document).on('click', '.navbar-shrink a#home' ,function(){
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //     return false;
    // });

    $(document).on('mouseenter', '#map path, #map polyline,#map circle,#map polygon', function () {
        let m = $(this);
        if (m.attr('title')) {
            $(m).tooltip('show');
        }
    });
    $.get('https://arthurmelikyan.github.io/ca.min.svg', function(svg){
        $('#map .map_block').html(svg);
    }, 'text');

    $('.tt').tooltip();

    // $('#mainNav').on('show.bs.collapse', function () {
    //     if (!$("#mainNav").hasClass('navbar-shrink') && $("#mainNav").offset().top < 80) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     }
    //   })
});