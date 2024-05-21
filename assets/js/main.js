$(document).ready(function() {
    $('.accordion-title').click(function(){
        $(this).parents('.accordion-item').toggleClass('active-accordion');
        $(this).parents('.accordion-item').siblings().removeClass('active-accordion');
      });
});