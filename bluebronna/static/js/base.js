var ADDRESS = "Box 65, Longview, AB T0L 1H0";
var OFFICE_EMAIL = "office@bluebronna.org";

$(document).ready(function(){
    createNavBar();
    setActiveNavLink();
    createFooter();
});


/**
 * Add the navigation element to the page
 */
function createNavBar() {

    var nav_html = '<nav class="navbar fixed-top navbar-default navbar-expand-lg navbar-custom navbar-dark noselect">\n' +
        '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>\n' +
        '    <a class="navbar-brand" href="' + ROOT_PATH + '/index.html">\n' +
        '        <img src="' + STATIC_PATH + 'img/bbwc_logo.png" width="120" height="42" class="align-top" alt="">\n' +
        '    </a>\n' +
        '    <div class="collapse navbar-collapse" id="navbarNav">\n' +
        '        <ul class="navbar-nav">\n' +
        '            <li class="nav-item dropdown">\n' +
        '                <a class="nav-link dropdown-toggle nav-dropdown" id="adventureDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                    Upcoming Adventures\n' +
        '                </a>\n' +
        '                <div class="dropdown-menu" aria-labelledby="aboutUsDropdown">\n' +
        '                    <a id="nav-schedule" class="dropdown-item" href="' + ROOT_PATH + '/upcoming-adventures/schedule.html">Schedule</a>\n' +
        '                    <a id="nav-events" class="dropdown-item" href="' + ROOT_PATH + '/events/">Events</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown">\n' +
        '                <a class="nav-link dropdown-toggle nav-dropdown" id="aboutUsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                    About Us\n' +
        '                </a>\n' +
        '                <div class="dropdown-menu" aria-labelledby="aboutUsDropdown">\n' +
        '                    <a id="nav-history" class="dropdown-item" href="' + ROOT_PATH + '/about/history.html">History</a>\n' +
        '                    <a id="nav-locations" class="dropdown-item" href="' + ROOT_PATH + '/about/locations.html">Locations</a>\n' +
        '                    <a id="nav-bio" class="dropdown-item" href="' + ROOT_PATH + '/about/bio.html">About the Director</a>\n' +
        '                    <a id="nav-faq" class="dropdown-item" href="' + ROOT_PATH + '/about/faq.html">Frequently Asked Questions</a>\n' +
        '                    <a id="nav-contact-us" class="dropdown-item" href="' + ROOT_PATH + '/about/contact-us.html">Contact Us</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item"><a id="nav-volunteer" class="nav-link" href="' + ROOT_PATH + '/volunteer/">Staff Opportunities</a></li>\n' +
        '            <li class="nav-item"><a id="nav-needs" class="nav-link" href="' + ROOT_PATH + '/needs/">Needs</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/donate/">Donate</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/register/">Register</a></li>\n' +
        '        </ul>\n' +
        '    </div>\n' +
        '</nav>';

    $("#navigation").html(nav_html);

}

/**
 * Set the active navigation link
 */
function setActiveNavLink() {

    if ($("#nav-" + THIS_NAV).length) {
        $("#nav-" + THIS_NAV).addClass("active");
    }

}

/**
 * Create the footer
 */
function createFooter() {

    var footer_html = '    <div class="row col-md-12">\n' +
        '        <div class="col-md-4 mb-2">\n' +
        '            <h3 class="font-weight-bold">About Us</h3>\n' +
        '            <p>At Blue Bronna Wilderness Camp, we are passionate about providing campers the opportunity to get to know God by experiencing nature through wilderness adventures in the Alberta Rockies.&nbsp;<a class="anchor-darkblue-white" href="' + ROOT_PATH + '/about/history.html" target="_blank">Learn more...</a></p>\n' +
        '            <p><a class="font-weight-bold anchor-darkblue-white" href="https://atbcares.benevity.org/community/cause/124-100549989RR0001">Donate Today <i class="fas fa-arrow-right"></i></a></p>\n' +
        '            <p><img src="' + STATIC_PATH + 'img/member_logo.png"/></p>\n' +
        '        </div>\n' +
        '        <div class="col-md-4 mx-auto mb-3">\n' +
        '            <h3 class="font-weight-bold">Other Links</h3>\n' +
        '            <ul>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/index.html" target="_self"><i class="fas fa-caret-right"></i> Home</a></li>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/needs/" target="_self"><i class="fas fa-caret-right"></i> Needs</a></li>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/volunteer/index.html" target="_self"><i class="fas fa-caret-right"></i> Staff Opportunities</a></li>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/about/contact-us.html" target="_self"><i class="fas fa-caret-right"></i> Contact Us</a></li>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/privacy-policy/index.html" target="_self"><i class="fas fa-caret-right"></i> Privacy Policy</a></li>\n' +
        '                <li><a class="contact-text" href="' + ROOT_PATH + '/register/"><i class="fas fa-caret-right"></i> Register</a></li>\n' +
        '\n' +
        '\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '        <div class="col-md-4 mb-2">\n' +
        '            <h5 class="font-weight-bold">Contact Us</h5>\n' +
        '            <div>\n' +
        '                <p>\n' +
        '                    <i class="fas fa-phone bb-darkblue"></i><a class="contact-text" href="tel:403-803-4776"> (403)803-4776 </a> <i>(Office Admin - offsite - all donations, donation receipts and summer camp registration questions)</i>\n' +
        '                </p>\n' +
        '                <p>\n' +
        '                    <i class="fas fa-phone bb-darkblue"></i><a class="contact-text" href="tel:403-601-9350"> (403)601-9350</a> <i>(Director - rentals, staff recruitment, anything else camp related as well as to get a hold of on-site summer staff)</i>\n' +
        '                </p>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <p>\n' +
        '                    <i class="fas fa-envelope bb-darkblue"></i><a class="contact-text" href="mailto:Office@BlueBronna.org" target="_blank"> ' + OFFICE_EMAIL + '</a>\n' +
        '                </p>\n' +
        '            </div>\n' +
        '            <div class="mb-2">\n' +
        '                <p><i class="fas fa-home bb-darkblue"></i> ' + ADDRESS + '</p>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <a class="bb-darkblue media-icon" href="https://www.facebook.com/bluebronna" target="_blank">\n' +
        '                    <i class="fab fa-facebook-square fa-2x"></i>\n' +
        '                </a>\n' +
        '                <a class="bb-darkblue media-icon" href="https://www.instagram.com/bluebronnawildernesscamp/" target="_blank">\n' +
        '                    <i class="fab fa-instagram fa-2x"></i>\n' +
        '                </a>\n' +
        '                <a class="bb-darkblue media-icon" href="https://twitter.com/BlueBronna" target="_blank">\n' +
        '                    <i class="fab fa-twitter-square fa-2x"></i>\n' +
        '                </a>\n' +
        '                <a class="bb-darkblue media-icon" href="https://www.linkedin.com/company/blue-bronna-wilderness-camp" target="_blank">\n' +
        '                    <i class="fab fa-linkedin fa-2x"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="footer-copyright text-center py-3 small">\n' +
        '        Copyright ' + getFullYear() + ' Created by <a target="_blank" href="http://www.czmoody.com">CZMoody</a>.\n' +
        '    </div>';

    $("#footer").html(footer_html);
}

/** ============================
 *   UTILITIES
 */

/**
 * Get Year
 */
function getFullYear() {
    var dt = new Date();
    return dt.getFullYear();
}

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
