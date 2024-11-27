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