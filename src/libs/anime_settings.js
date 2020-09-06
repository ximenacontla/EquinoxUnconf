import anime from 'animejs/lib/anime.es.js';
console.log("sucess");
var lineDrawing = anime({
    targets: 'path, rect, circle',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 3000,
    begin: function (anim) {
        document.querySelector('path').setAttribute("stroke", "black");


    },
    complete: function (anim) {

    },
    autoplay: true
});