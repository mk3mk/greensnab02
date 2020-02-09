   
$(document).ready(function () {    
    
// draggable
$(function() {
        $('.mydraggable').draggable();
});  

setInterval(function(){     
    $('#dimView').text('ширина окна браузера - ' + document.body.clientWidth + ' px');    
    $('#dimScreen').text('ширина экрана - ' + screen.width + ' px');    
  //  $('#dimCol1').text('ширина col1 - ' + $('.col1').width() + ' px');    
  //  $('#dimCol2').text('ширина col2 - ' + $('.col2').width() + ' px');    
  //  $('#dimCol3').text('ширина col3 - ' + $('.col3').width() + ' px');    
  //  $('#dimCol4').text('ширина col4 - ' + $('.col4').width() + ' px');    
  //  $('#dimCol6').text('ширина col6 - ' + $('.col6').width() + ' px');  
    
    var w = document.body.clientWidth; // ширина окна браузера 
    $('#dimW').text('ширина W - ' + w + ' px');    
}, 100);
    
 


$('#button_dopoln').click(function(){
   $('#slider1').toggle();
   $('#dim').toggle();
});

    
// при выборе checkbox showBorders Показать - скрыть границы
    $('#showBorders').click(function(){
    if ($(this).prop('checked')) {
      console.log('cheked');
        $('*').addClass('ShowBorders');
    } else {
        $('*').removeClass('ShowBorders');
        console.log('uncheked');
    };
});

// при выборе checkbox hideMaket Показать - скрыть макет
    $('#hideMaket').click(function(){
    if ($(this).prop('checked')) {
      console.log('cheked');
        $('#maket').addClass('displayNone');
    } else {
        $('#maket').removeClass('displayNone');
        console.log('uncheked');
    };
});    
    
    
 //  выводим название текущего элемента
$(document).on('mouseenter', '*', function (e) {
     // console.log($(this).text()); //только тект
     // console.log($(this).html()); //html-код содержания
        var className = $(this).attr("class");
        console.log('class= ' + className);
        $('#currentElement').text('class= ' + className);
        $(this).addClass('ShowBorders');
    });
    
    $(document).on('mouseleave', '*', function (e) {
        var className = $(this).attr("class");
        $(this).removeClass('ShowBorders');
    });  
    
    
    // кнопки Go to 
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
    
    



});    