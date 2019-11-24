@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/wpcf7.js')
@@include('./lib/jquery.spincrement.min.js')
@@include('./lib/slick.js')

$(document).ready(function(){
	
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .navbar').slideToggle(300); 
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	var ww=window.innerWidth;
	$(window).resize(function(){
		//функция вызывается всегда, при изменении размера окна. Для того, чтобы она вызывалась только при изменении ширины окна - этот пункт
		if(ww==window.innerWidth) return;//
		if(window.innerWidth > 1279) {
			$('header .navbar').show(); 
		} else {
			$('header .navbar').hide();
			$('.burger').removeClass('burger_active'); 
		}
	});
	
	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.burger').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});
	
	
// 	calculator
	
	$('.calculator__input_lights, .calculator__input_area').on('input change reset', function (){
		var parcalc=$(this).closest('.calculator');
		var countPrice = 0;
		var roofArea = parseInt(parcalc.find('.calculator__input_area').val(), 10)*440	
		var lightsCount = parseInt(parcalc.find('.calculator__input_lights').val(),10)*400;
		countPrice = roofArea + lightsCount;
		var rez = (countPrice+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); // adding a space between thousands
		if(rez == "NaN"){
			rez = "";
		}
		parcalc.find('.calculator__price').html(rez);
	});
	$('form').on('reset',function(){
		var f=this;
		setTimeout(function(){  
			$(f).find('input').change();
		}, 50);  
	});
	
// plates height
	
	$(window).resize(function(){
		$('.plates-line__inner').css('height', $('.plates-line__inner').width() + 'px');
	});
	$(window).resize();
	
// figures
	
 	var show = true;
    var countbox = ".figures";
    $(window).on("scroll load resize", function () {
		if($(countbox).length==0)return;
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.figures__quantity').css('opacity', '1');
            $('.figures__quantity').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });
	
// 	slick-slider	
	
	$('.main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 2000,
	});
	
	$('.exclusive').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: true,
	});
	
	$('.reviews').slick({
		infinite: true,
		slidesToShow: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]
	});
	
	
	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},400)
}); 