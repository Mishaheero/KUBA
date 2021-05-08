$(function(){
   $('.photo__slaider').slick({
       prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
       nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>'
   });

   $('.menu__btn').on('click', function(){
       $('.menu__list').slideToggle(); 
   });
});


