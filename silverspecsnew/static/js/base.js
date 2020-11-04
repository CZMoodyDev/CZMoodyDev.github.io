$(document).ready(function(){
    createNavBar();
    setActiveNavLink();
    createFooter();
});

/**
 * Add the navigation element to the page
 */
function createNavBar() {

    var nav_html =
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '    <span class="navbar-toggler-icon"></span>\n' +
        '</button>\n' +
        '<div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
        '    <ul class="navbar-nav mr-auto mx-auto">\n' +
        '        <li id="nav-home" class="nav-item">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '">Home</a>\n' +
        '        </li>\n' +
        '        <li id="nav-book-online" class="nav-item">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/book-online/">Book Online</a>\n' +
        '        </li>\n' +
        '        <li id="nav-staff" class="nav-item">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/staff/">The Staff</a>\n' +
        '        </li>\n' +
        '        <li id="nav-about" class="nav-item dropdown">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/about/" id="aboutClinicDropdown" role="button" aria-haspopup="true" aria-expanded="false">\n' +
        '                About the Clinic\n' +
        '            </a>\n' +
        '            <div class="dropdown-menu" aria-labelledby="aboutClinicDropdown">\n' +
        '                <a id="nav-faq" class="dropdown-item" href="' + ROOT_PATH + '/about/faq/">Frequently Asked Questions</a>\n' +
        '                <a id="nav-eye-care-services" class="dropdown-item" href="' + ROOT_PATH + '/about/eye-care-services/">Eye Care Services</a>\n' +
        '            </div>\n' +
        '        </li>\n' +
        '        <li id="nav-about-optical" class="nav-item dropdown">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/about-optical/" id="aboutOpticalDropdown" role="button" aria-haspopup="true" aria-expanded="false">\n' +
        '                About the Optical\n' +
        '            </a>\n' +
        '            <div id="nav-about-optical-services" class="dropdown-menu" aria-labelledby="aboutOpticalDropdown">\n' +
        '                <a class="dropdown-item" href="' + ROOT_PATH + '/about-optical/services/">Optical Services</a>\n' +
        '            </div>\n' +
        '        </li>\n' +
        '        <li id="nav-office-policies" class="nav-item">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/office-policies/">Office Policies</a>\n' +
        '        </li>\n' +
        '        <li id="nav-patient-resources" class="nav-item dropdown">\n' +
        '            <a class="nav-link" href="' + ROOT_PATH + '/patient-resources/" id="patientDropdown" role="button" aria-haspopup="true" aria-expanded="false">\n' +
        '                Patient Resources\n' +
        '            </a>\n' +
        '            <div class="dropdown-menu" aria-labelledby="patientDropdown">\n' +
        '                <a id="nav-contact-lens-fit-guide" class="dropdown-item" href="' + ROOT_PATH + '/patient-resources/contact-lens-fit-guide/">Contact Lens Fit Guide</a>\n' +
        '            </div>\n' +
        '        </li>\n' +
        '    </ul>\n' +
        '</div>';

    $("#navigation").before('<div class="container">\n' +
        '        <div class="text-center site-divider">\n' +
        '            <img class="logo" src="' + ROOT_PATH + '/static/img/logo.png" />\n' +
        '        </div>\n' +
        '    </div>');

    $("#navigation").html(nav_html);

}

/**
 * Add the footer element to the page
 */
function createFooter() {

    var footer_html = '<div class="text-center pb-2">©2020 by Silver Specs Eye Care + Optical.</div>';

    $("#footer").html(footer_html);
}

/**
 * Set the active navigation link
 */
function setActiveNavLink() {

    if ($("#nav-" + THIS_NAV).length) {
        $("#nav-" + THIS_NAV).addClass("active");
    }

}

$('.multi-item-carousel .carousel-item ').each(function(){
    var next = $(this).next();
    if (!next.length) next = $(this).siblings(':first');
    next.children(':first-child').clone().appendTo($(this));
});
$('.multi-item-carousel .carousel-item ').each(function(){
    var prev = $(this).prev();
    if (!prev.length) prev = $(this).siblings(':last');
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
});