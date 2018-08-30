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

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('.about_us').offset().top){
        console.log(wScroll);
        $('.aboutus_info').addClass('aboutus_info_active');
    }

    if(wScroll > $('.chose_us').offset().top){
        $('.card_parent').each(function(i){
            setTimeout(function(){
                $('.card_parent').eq(i).addClass('card_parent_active');
            }, 150 * (i + 1));
        });
    }
        
});