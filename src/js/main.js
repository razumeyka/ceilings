@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/wpcf7.js')
@@include('./lib/jquery.spincrement.min.js')
@@include('./lib/slick.js')
@@include('./lib/slider.js')

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
	
	 $('.menu li.sub-menu-item-has-children>a').click(function(e){
		if(window.innerWidth>1279)return ;
        e.preventDefault();
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).slideUp('300');	
		$(this).closest('li').find('ul:first').slideToggle('300');
    }); 
    
    $('.menu li.small-sub-menu-item-has-children>a').click(function(e){
		if(window.innerWidth>1279)return ;
        e.preventDefault();
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).not($(this).closest('li').closest('ul')).slideUp('300');	
		$(this).closest('li').find('ul:first').slideToggle('300');
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
		parcalc.find('.calculator__price-amount').html(rez);
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
	
//seotext open
	
	$(window).resize(function(){
		$('.more-info').removeClass('open'); 
		var h1=$('.types-screen__content').find('p').height(); 
		var h2=$('.exclusive-screen__text .caption').height();
		var h3=$('.exclusive-screen__text').find('p').height(); 
		$('.exclusive-screen__text').css('height', (h2 + h3 + 27) + 'px');
		$('.types-screen__content').css('height', h1 + 'px'); 
	});
	
	$('.types-screen .more-info').click(function(){
		if(window.innerWidth > 1279) {
			$(this).addClass('open');
			$(this).parent().parent().addClass('open');
		} else {
			$(this).addClass('open');
			$(this).parent().parent().css('height', 'auto');
		}
	});
	
	$('.exclusive-screen .more-info').click(function(){
		$(this).parent().parent().css('height', 'auto');
		$(this).addClass('open');
	});

	
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
	
	$('.img-slider').slick({
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
	
	$('.examples').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
			  }
			},
		]
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
				arrows: false,
			  }
			},
			{
			  breakpoint: 640,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]
	});
	
// plates height
	
	$(window).resize(function(){
		$('.partners__partner').css('height', $('.partners__partner').width() + 'px');
	});
	
	
	
	$(window).resize();
	setTimeout(function(){
		ww=0;
		$(window).resize();
	},400)

//stock timer
 
var deadline = '2019-12-16 20:20';
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

function updateClock(){
  var t = getTimeRemaining(deadline);
  $('.timer__number_days').html(t.days);
  $('.timer__number_hours').html(('0' + t.hours).slice(-2));
  $('.timer__number_minutes').html(('0' + t.minutes).slice(-2));
  $('.timer__number_seconds').html(('0' + t.seconds).slice(-2));
  if(t.total<=0){
   clearInterval(timeinterval);
  }
}

updateClock(); // запустите функцию один раз, чтобы избежать задержки
var timeinterval = setInterval(updateClock,1000);

	
	
}); 