//scroll init

AOS.init();


//navbar init
let menu = document.querySelector('#menu');

let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {

        menu.classList.toggle('menu-toggle');
        this.classList.toggle('is-active');

})

//carousel init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

var options = {
    indicator: true,
    numVisible: 5,
    padding: 15
}