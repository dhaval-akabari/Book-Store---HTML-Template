$(document).ready(function () {
  $('.hamburger-menu').click(function() {
    $('.navigation').toggleClass('change');  
  });

  // animate gallery on scroll
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 280) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });

  $('.writers-accordion').click(function(event) {
    if(event.target.id.split('-')[0] === 'button') {
      $('#book-1').attr('src', './assets/images/writers/' + event.target.id.split('-')[1] + '-book1.jpg')
      $('#book-2').attr('src', './assets/images/writers/' + event.target.id.split('-')[1] + '-book2.jpg')
    }
  });

});
