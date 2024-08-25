console.log("Robert")

// add function close hamburger menu after click link
document.addEventListener('click', function (event) {
    if (event.target.matches('.nav-link')) {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        var bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});


//function for when scrolling background nav change color
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background", "rgba(192, 192, 192, .2)");
            $(".navbar").css("transition", "1.5s");
            $(".navbar").css("padding-left", "269px");
            $(".navbar").css("padding-right", "269px");




        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("padding-left", "269px");
            $(".navbar").css("padding-right", "269px");


        }
    });
});

// different way for function color background 
// window.onscroll = function () {
//     var navbar = document.getElementById("navbar");
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// };