$(document).ready(function() {
    $('.accordion-title').click(function(){
        $(this).parents('.accordion-item').toggleClass('active-accordion');
        $(this).parents('.accordion-item').siblings().removeClass('active-accordion');
      });
});
$(document).ready(function() {
  $('.burger-lines').click(function(){
    $('.burger-menu').addClass('active-burger-menu');
  });
  $('.close-burger').click(function(){
    $('.burger-menu').removeClass('active-burger-menu');
  });
});
$(document).ready(function() {
  $('.arrow-drop').click(function(){
      $(this).parents('.burger-li').toggleClass('active-burger-li');
      $(this).parents('.burger-li').siblings().removeClass('active-burger-li');
    });
});
