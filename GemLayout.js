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

    var scr = false;

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


        if(wScroll > $('.p_title2').offset().top - 300 ){
            $('.box').each(function(i){
                setTimeout(function(){
                    $('.box').eq(i).addClass('box_active');
                }, 150 * (i + 1));
            });

            
        }

        if(wScroll > $('.chose_us').offset().top - 500){
            $('.choseus_title').addClass('choseus_title_active');
        }

        if(wScroll > $('.portfolio').offset().top - 500 ){
            $('.portfolio_title').addClass('portfolio_title_active');
        }


        $('.load_more_btn').click(function(){
            $(this).addClass('load_more_btn_active');
                $('.loading_animation').fadeIn(100).delay(2000).fadeOut(30).hide();
                    $('.hidden_parent').delay(3000).fadeIn(300);
    
        });


        if(wScroll > $('.org_parent').offset().top - 200){
            $('.team_card_small').each(function(i){
                setTimeout(function(){
                    $('.team_card_small').eq(i).addClass('team_card_small_active');
                    $('.member_icon_small').eq(i).addClass('member_icon_smallv2');
                }, 300 * (i + 1));
            });

            
        }

        if(wScroll > $('.stats_title').offset().top - 300 ){
            $('.progress-bar').addClass('progres-bar-active');
            $('.progress_bar2').addClass('progress_bar2_active');
            $('.progress_bar3').addClass('progress_bar3_active');
            $('.progress_bar4').addClass('progress_bar4_active');
        }



        if(wScroll > $('.achievments').offset().top - 300 ){
             if(scr == false){
                $('.counter_number').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                        }, {
                            duration: 1000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                });
            }

            scr = true;
        
        }

        
        if(wScroll > $('.stats_bars').offset().top - 300 ){
            if(scr == false){
                $('.number').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                        }, {
                            duration: 1000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                });
                scr = true;
            }
        
    }
    
    });


        






            
    
});