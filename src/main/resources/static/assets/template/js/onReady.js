// ============= PRELOADER SCRIPT ===================
window.onload = function(){
	setTimeout(function() {
        $('#preloader').addClass('hid');
    }, 100); 
};
// ============= END PRELOADER SCRIPT ===================


$(function(){
        var top_show = 280; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
        var speed = 500; // Скорость прокрутки
    	var $backButton = $('#up');
    	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
    		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    		if ($(this).scrollTop() > top_show) {
    			$backButton.fadeIn();
    		}
    		else {
    			$backButton.fadeOut();
    		}
    	});
    	$backButton.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    		/* Плавная прокрутка наверх */
    		scrollto(0, speed);
    	});

        // scrollto
    	window.scrollto = function(destination, speed) {
    		if (typeof speed == 'undefined') {
    			speed = 800;
    		}
    		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
    	};
    	$("a.scrollto").click(function () {
    		var elementClick = $(this).attr("href")
    		var destination = $(elementClick).offset().top;
    		scrollto(destination);
    		return false;
    	});
    	// end scrollto 

        // fancybox
        $('.fancybox').fancybox({
            padding: 0,
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxModal').fancybox({
            padding: 0,
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView : false, 
            maxWidth: '100%',
            scrolling : "no",
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        // end fancybox
        
        
        // slick-carousel
            $('.top-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                arrows: false,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                dots: true,
                responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        fade: false,
                        dots: false
                      }
                    }
                  ]       
            });
            
            
            $('.aside-banner').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1000,
                arrows: false
            });
            
            
            $('.services-carousel').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000,
                arrows: true,
                prevArrow: '<a href="#" class="slick-prev"></a>',
                nextArrow: '<a href="#" class="slick-next"></a>',
                responsive: [
                {
                  breakpoint: 1260,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 670,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }
              ]               
            });
            
            
            
            
            $('.partners-carousel').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                arrows: false,
                dots: false,
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: 4
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2
                      }
                    }
                  ]       
            });
            
            
            
            
            
            
        // end slick-carousel
        
        
        // checking for placeholder
        if (Modernizr.input.placeholder) {
          $('.label').hide();
        }
        // end
        
        // mobile menu
        
        $('.menu-btn').click(function(){
            $(this).toggleClass('active');
            $('.mobile-menu').toggleClass('active');
            $('.overlay').toggleClass('active');
            return false;
        });
        
        $('.overlay').click(function(){
            $('.mobile-menu, .menu-btn, .overlay').removeClass('active');
        });
        
        // end
        
        
        var panel=$('.top-menu-wrapper'),pos=panel.offset().top-3;
        $(window).scroll(function(){
        if($(this).scrollTop() > pos && !panel.hasClass('fixed')){
        panel.addClass('fixed');
        $('.top-menu-wrapper-push').addClass('active');
        }else if($(this).scrollTop() < pos && panel.hasClass('fixed')){         
        panel.removeClass('fixed'); 
        $('.top-menu-wrapper-push').removeClass('active');
        }});
        
        
        
        
        //top_menu
        
        $('.top-menu-wrapper .uMenuH > ul > li.active').prev().addClass('mod');
        $('.top-menu-wrapper .uMenuH > ul > li').hover(function(){
            $(this).prev().addClass('mod2');
        },function(){
            $(this).prev().removeClass('mod2');
        });
        
        
        
		$('.top-menu-wrapper .uMenuH > ul > li > ul').addClass('topmenuactivity hidden');
		$('.uMenuH li').has('ul').addClass('down');
        
        $('.mobile-menu .uMenuH > ul > li > ul').before('<span class="dropdown-button"></span>');
        $('.mobile-menu .down .dropdown-button').click(function(){
            $(this).toggleClass('active');
            $(this).siblings('ul').toggle();
        });
        
        
        

        $('.top-menu-wrapper .uMenuH > ul > li').hover(function(){
            
            var $this = $(this),
            dropdown = $this.children('ul');
            dropdown.removeClass('hidden');
            
            if (Modernizr.cssanimations) {
                dropdown.addClass('fadeInDownSmall').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    dropdown.removeClass('fadeInDownSmall hidden');
                });
            }
            
        }, function(){
            var $this = $(this),
            dropdown = $this.children('ul');
            
            if (Modernizr.cssanimations) {
                dropdown.removeClass('fadeInDownSmall hidden').addClass('fadeOutUpSmall').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    dropdown.removeClass('fadeOutUpSmall').addClass('hidden');
                })
            } else {
                dropdown.addClass('hidden');
            }
        });

        //end top menu
        
        
        
        $('.search-btn').click(function(){
            $('.search_box').toggleClass('active');
            $(this).toggleClass('active');
            if($('.search_box').is(':visible')){
                $('.search_box input[type=text]').focus();
            }
        });
        
        $('.search-box-wrapper').click(function(e){
            e.stopPropagation();
        });
        
        $('body').click(function(){
            $('.search_box').removeClass('active');
            $('.search-btn').removeClass('active');
        });
        
        
        // validation
        
        $('.rf').each(function(){
            var item = $(this),
            btn = item.find('.btn');
            function checkInput(){
                item.find('select.required').each(function(){
                    if($(this).val() == '0'){
                        $(this).parents('.form-group').addClass('error');
                        $(this).parents('.form-group').find('.error-message').show();

                    } else {
                        $(this).parents('.form-group').removeClass('error');
                    }
                });
                
                
                item.find('input[type=text].required').each(function(){
                    if($(this).val() != ''){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                
                item.find('textarea.required').each(function(){
                    if($(this).val() != ''){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                        
                    }
                });
                
                item.find('input[type=email]').each(function(){
                    var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
                    var $this = $(this);
                    if($this.hasClass('required')){
                        
                        if (regexp.test($this.val())) {
                            $this.removeClass('error');
                        }else {
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                        }
                    }else{
                        
                        if($this.val() != ''){
                            if (regexp.test($this.val())) {
                                $this.removeClass('error');
                            }else {
                            
                            $this.addClass('error');
                            $(this).parent('.form-group').find('.error-message').show();
                            }
                        }else{
                            $this.removeClass('error');
                        }
                    }
                    
                });
                
                
                item.find('input[type=checkbox].required').each(function(){
                    if($(this).is(':checked')){
                        $(this).removeClass('error');
                    } else {
                        $(this).addClass('error');
                        $(this).parent('.form-group').find('.error-message').show();
                    }
                });
                
            
            }

            btn.click(function(){
                checkInput();
                var sizeEmpty = item.find('.form-group .error:visible').length;
                if(sizeEmpty > 0){
                    return false;
                } else {
                    item.submit();
                    $.fancybox.close();
                }
            });

        });
        
        
        $('.required').change(function(){
            if($(this).val() != ''){
                $(this).removeClass('error');
                $(this).parents('.form-group').find('.error-message').hide();
            }
            
        });
        
        $('select').change(function(){
            if($(this).val() == ''){     
                $(this).parents('.form-group').removeClass('selected');
            } else {
                $(this).parents('.form-group').addClass('selected');
                $(this).parents('.form-group').removeClass('error');
            }
        });
        
        // end validation
        
        
        $('.title2-inner').each(function(){
    		var newText = $(this).text().split(' ').join('</span><span>');
    		newText = '<span>' + newText + '</span>';
     
    		$(this).html(newText);
    	});
        
        
        
        // ASIDE MENU
        
        
        $('.aside-menu li').has('ul').addClass('down');
        
        $('.aside-menu li.down > ul').before('<span class="dropdown-button"></span>');
        $('.aside-menu .down .dropdown-button').click(function(){
            $(this).toggleClass('active');
            $(this).parent().toggleClass('open');
            if($(this).siblings('ul').is(':visible')){
                $(this).siblings('ul').slideUp();
            }else{
                $(this).siblings('ul').slideDown();
            }
            
        });
        
        
        $('.aside-menu-title').click(function(){
            $('.aside-menu').toggleClass('active');
        });
        
        // ASIDE MENU END
        
        
        // accordeon
                var $thisElement, 
                    $thisElementContent,
                    $elements,
                    $elementsContent;
                    
                $('.accordeon .title').click(function(){
                    $thisElement = $(this).parent();
                    $thisElementContent = $thisElement.find('.element-content');
                    $elements = $thisElement.siblings();
                    $elementsContent = $elements.find('.element-content');
                    
                    $elements.removeClass('active');
                    $elementsContent.slideUp();
                    if(!$thisElement.hasClass('active')){
                        $thisElement.addClass('active');
                        $thisElementContent.slideDown();
                    }else{
                        $thisElement.removeClass('active');
                        $thisElementContent.slideUp();
                    }
                    
                });
        // accordeon end 
        
        
        var theme;
        $('[data-theme]').click(function(){
            theme = $(this).data('theme');
            $('.themeinput').val(theme);
            $('.themetitle').text(theme);
        });
        
        $('.tooltip-left-center').tooltipster({
            anchor: 'left-center',
            maxWidth: 220,
            offset: [15, 0],
            plugins: ['follower'],
            theme: 'tooltipster-borderless',
        });
        
        $('.tooltip-right-center').tooltipster({
            anchor: 'right-center',
            maxWidth: 220,
            offset: [-15, 0],
            plugins: ['follower'],
            theme: 'tooltipster-borderless',
        });
        
        

});// end ready





















