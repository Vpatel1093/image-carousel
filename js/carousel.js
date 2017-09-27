$(document).ready(function() {
  photoContainers = $('#carousel').children('div');
  navDots = $('#nav-dots div');
  leftArrow = $('#slide-left');
  rightArrow = $('#slide-right');

  // Inititialize active photo and button
  $('#carousel').find('div').first().addClass('active-photo');
  $('#nav-dots').find('div').first().addClass('active-btn');

  function goTo(newPosition) {
    $('.active-photo').removeClass('active-photo').fadeOut(800);
    photoContainers.eq(newPosition).addClass('active-photo').fadeIn(800);
    $('.active-btn').removeClass('active-btn')
    navDots.eq(newPosition).addClass('active-btn');
  }

  leftArrow.on("click", function() {
    var currentPosition = $('.active-photo').index('#carousel div');
    if (currentPosition === 0) {
      goTo(4);
    } else {
      goTo(currentPosition-1);
    };
  });

  rightArrow.on("click", function() {
    var currentPosition = $('.active-photo').index('#carousel div');
    if (currentPosition === 4) {
      goTo(0);
    } else {
      goTo(currentPosition+1);
    };
  });

});
