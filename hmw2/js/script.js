let menuBurger = document.getElementsByClassName('nav-block-link-burger')[0];
let menuCrocc = document.getElementsByClassName('nav-block-link-cross')[0];
let mobileMenu = document.getElementById('navbar-menu-block');

menuBurger.addEventListener('click', function (e) {
    let target = e.target;
    menuBurger.setAttribute('style', 'display: none');
    mobileMenu.setAttribute('style', 'display: block');
    menuCrocc.setAttribute('style', 'display: block')
});

menuCrocc.addEventListener("click", function (e) {
    let target = e.target;
    menuBurger.setAttribute("style", `display: block`);
    mobileMenu.setAttribute("style", `display: none`);
    menuCross.setAttribute("style", `display: none`);

});



/*$(document).ready(function(){
    $('.navbar-title').click(function() {
        $('.nav-menu').slideToggle(500);
    });
    $(window).resize(function() {
        if($(window).width()>500) {
            $('.nav-menu').removeAttr('style');
        }
    });
    
})*/
