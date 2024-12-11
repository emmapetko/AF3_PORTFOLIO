console.log("AF3's Javascript is running!");

if(jQuery) {
    console.log("jQuery made a banger!")
}

else {
    console.log("jQuery fell off.")
}

$('#menu-button').click( function() {
    $('#overlay-menu-container').fadeIn(250);
});

$('#close-menu').click( function(){
    $('#overlay-menu-container').fadeOut(250);
});

$('.comm-dropdown').click( function() {
    $(this).children('p, img, button').slideToggle(500)
    $(this).children('#first-dropdown').toggleClass('closed open')
});

$('.comm-dropdown-secondary').click( function() {
    $(this).children('p').slideToggle(500)
    $(this).children('#second-dropdown').toggleClass('closed open')
});

$('#menu-button').click( function() {
    $('#overlay-menu-container').fadeIn(250);
});

$('.dropdown-trigger').click(function(){
    $(this).toggleClass('closed open')
    $(this).siblings(".dropdown-content").slideToggle(500)
  });