
$(document).ready(function(){



    /*--------------------------------------------------------for sticky nav*/
$('.js--section-feature').waypoint( function (direction) {
if (direction == "down") {
$('nav').addClass('sticky');

} else {

    $('nav').removeClass('sticky');}
 },
    {
        offset: '60px;'
});
/*----------------------for scroll on buttons*****************/
$('.js--scroll-to-plans').click(function(){
    $('html , body').animate({scrollTop: $('.js--section-plans').offset().top }, 1000)


});

$('.js--scroll-to-start').click(function(){
    $('html , body').animate({scrollTop: $('.js--section-feature').offset().top }, 1000)


});
$('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__rotateInDownLeft');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );

});
 /* ------------------------------------------mobile nav----------------------- */
     $('.js--nav--icon').click(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      nav.slideToggle(200);
      if(icon.hasClass('.menu-outline')){
      icon.addClass('.close-outline');
      icon.removeClass('.menu-outline');
      }else{
        icon.addClass('.menu-outline');
        icon.removeClass('.close-outline')   ;

      }
 })

    /* var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      }) /** */
      /* mobile nav */