var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


$(document).ready(function(){
    $('.burger_menu').click(function(){  
        $(this).toggleClass('burger_menu_active');
        $('.line1').toggleClass('line1_active');
        $('.line2').toggleClass('line2_active');
        $('.line3').toggleClass('line3_active');
        $('.sidenav').toggleClass('sidenav_active');        
    });


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 180) {
            $(".header").addClass("header_active");
            $(".b_line").addClass('b_line_active');
            $(".logo_box").addClass('logo_box_hidden');
            $(".logo_box").addClass('logo_box_active1');
            $(".logo_box_active1").addClass('logo_box_active2');
        } else {
           $(".header").removeClass("header_active");
           $(".b_line").removeClass('b_line_active');
           $(".logo_box").removeClass('logo_box_hidden');
           $(".logo_box").removeClass('logo_box_active1');
           $(".logo_box_active1").removeClass('logo_box_active2');
        }
    });

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('.about_us').offset().top ){
        $('.aboutus_info').addClass('aboutus_info_active');
    }

    if(wScroll > $('.chose_us').offset().top - 500){
        $('.card_parent').each(function(i){
            setTimeout(function(){
                $('.card_parent').eq(i).addClass('card_parent_active');
                $('.card_icon').eq(i).addClass('card_iconv2');
            }, 150 * (i + 1));
        });
    }

    if(wScroll > $('.chose_us').offset().top - 500){
        $('.choseus_title').addClass('choseus_title_active');
    }

    if(wScroll > $('.portfolio').offset().top - 500 ){
        $('.portfolio_title').addClass('portfolio_title_active');
    }
        
});