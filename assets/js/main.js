console.log("Robert")

// add function close hamburger menu after click link
document.addEventListener('click', function (event) {
    if (event.target.matches('.nav-link')) {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        var bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});

// window.onscroll = function () {
//     var navbar = document.getElementById("navbar");
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// };

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background", "lightgrey");
        } else {
            $(".navbar").css("background", "transparent");
        }
    });
});