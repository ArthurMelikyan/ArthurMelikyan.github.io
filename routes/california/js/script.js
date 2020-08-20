// ! svg  4ever



$(document).ready(function(){
    $(document).on('scroll', function(){
        $("#mainNav").offset().top > 100 ? $("#mainNav").addClass("navbar-shrink") : $("#mainNav").removeClass("navbar-shrink")
    });
 
    $("path, polyline, circle, polygon").hover(function(e) {
        // $('#info-box').css('display','block');
        // $('#info-box').html($(this).data('info'));
        console.log($(this).attr('data-title'));
      });
      
 
    
    $.get('../images/la.svg', function(svg){
        console.log( svg );
    }, 'text');
     
        
});