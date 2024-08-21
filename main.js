// var swiper = new Swiper(".swiper", {
//     effect: "cube",
//     allowTouchMove: false,
//     grabCursor: false,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     mousewheel: true
// });
// swiper.on('slideChange', function () {
//     for (let i of document.querySelectorAll(".links li")) i.classList.remove("activeLink")
//     Array.from(document.querySelectorAll(".links li"))[swiper.activeIndex].classList.add("activeLink")

// });
// function Navigate(indx) {
//     for (let i of document.querySelectorAll(".links li")) i.classList.remove("activeLink")
//     Array.from(document.querySelectorAll(".links li"))[indx].classList.add("activeLink")
//     swiper.slideTo(indx, 1000, true)
// }