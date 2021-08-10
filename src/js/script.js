console.log('Hello');


$(document).on('click', '.menu-button', function() {
    $('.menu-items').toggleClass('opened');
    $('.middle').toggleClass('pad');
    $('.bottom').toggleClass('pad');


});