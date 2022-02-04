$('#hamburguer-menu').click(() => {
    $('.menu-displayed').slideDown();
    $('body').css('overflow-y', 'hidden');
})

$('.menu-displayed .cross').click(() => {
    $('.menu-displayed').slideToggle();
    $('body').css('overflow-y', 'auto');
})