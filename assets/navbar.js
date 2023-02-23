// navbar-scroll-bg

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbar-scroll-bg");
    }else{
        $(".navbar").addClass("navbar-scroll-bg");
    }
});

$('#navbar-toggler').on('click',function(){
    if(screen.width <= 992){
        $(".navbar").addClass("navbar-scroll-bg");
    }else{
        $(".navbar").removeClass("navbar-scroll-bg");
    }
});


