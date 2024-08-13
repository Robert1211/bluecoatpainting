

// add function close hamburger menu after click link
document.addEventListener('click', function (event) {
    if (event.target.matches('.nav-link')) {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        var bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
});
