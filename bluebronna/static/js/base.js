var ADDRESS = "Box 65, Longview, AB T0L 1H0";
var OFFICE_EMAIL = "office@bluebronna.org";

var CAMP_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2020-summer-camp-registration";
var JUNIOR_STAFF_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/blue-bronna-wilderness-camp-jr-staff-application";
var FAMILY_DAY_WEEKEND_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2020-family-day-weekend-family-camp";
var MEN_IN_MINISTRY_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2020-men-in-ministry-camp";

var STAFF_INFORMATION_PACKAGE = "../static/files/2020%20BBWC%20Camp%20Staff%20Information.pdf";
var NEW_STAFF_APPLICATION_LINK = "https://bluebronna.wufoo.com/forms/2021-blue-bronna-wilderness-camp-staff-application/";
var RETURNING_STAFF_APPLICATION_LINK = "https://bluebronna.wufoo.com/forms/bbwc-returning-staff-application";

var CAMPS = {
    "youth89": {
        "name": "Youth Adventure Camp: Ages 8 to 10",
        "start-date": "July 6",
        "end-date": "July 9",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$225 - with $25 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "youth1012": {
        "name": "Youth Adventure Camp: Ages 10 to 12",
        "start-date": "August 18",
        "end-date": "August 22",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$400 - with $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "horsecamp": {
        "name": "Horse Camp",
        "start-date": "August 4",
        "end-date": "August 8",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$400 - with $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "teenbasecamp": {
        "name": "Teen Base Camp",
        "start-date": "June 23",
        "end-date": "June 27",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$400 - with $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "teenpacktrip": {
        "name": "Teen Pack Trip",
        "start-date": "August 4",
        "end-date": "August 9",
        "year": "2020",
        "start-time": "10am",
        "end-time": "2pm",
        "cost": "$450 - with $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "photographycamp": {
        "name": "Photography Camp",
        "start-date": "July 2",
        "end-date": "July 5",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$300 per person",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "winterfamilydays": {
        "name": "Winter Family Days",
        "start-date": "February 14",
        "end-date": "February 17",
        "year": "2020",
        "start-time": "7pm",
        "end-time": "11am",
        "cost": "",
        "registration-link": FAMILY_DAY_WEEKEND_REGISTRATION_LINK
    },
    "familycamp": {
        "name": "Family Camp",
        "start-date": "July 31",
        "end-date": "August 3",
        "year": "2020",
        "start-time": "7pm",
        "end-time": "Noon",
        "cost": "$130 per adult, $80 for youth ages 11-17, $50 for kids ages 6-10, 5 and under free, Family max of $500.",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "specialneedsfamilycamp": {
        "name": "Special-Needs Family Camp",
        "start-date": "August 6",
        "end-date": "August 9",
        "year": "2020",
        "start-time": "7pm",
        "end-time": "Noon",
        "cost": "$130 per adult, $80 for youth ages 11-17, $50 for kids ages 6-10, 5 and under free, Family max of $500",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "fatherdaughterhorsecamp": {
        "name": "Father/Daughter Horse Camp",
        "start-date": "July 15",
        "end-date": "July 18",
        "year": "2021",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$250 for the adult, $200 for each daughter, Family max is $600.",
        "additional-conditions": [
            "Family Discount for second person in the family coming to the Father Daughter Horse Camp does not apply.",
            "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        ],
        "registration-link": CAMP_REGISTRATION_LINK
    },
    "fathersonadventurecamp": {
        "name": "Father/Son Adventure Camp",
        "start-date": "August 5",
        "end-date": "August 8",
        "year": "2021",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$250 for the adult, $200 for each son, Family max is $600",
        "additional-conditions": [
            "Family Discount for second person in the family coming to the Father Son Adventure Camp does not apply.",
            "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        ],
        "registration-link": CAMP_REGISTRATION_LINK
    },
    "fishingcamp": {
        "name": "Fly Fishing Camp",
        "start-date": "July 28",
        "end-date": "July 31",
        "year": "2021",
        "start-time": "July 28th @2pm (you are welcome to come earlier to start fishing and bring your own lunch)",
        "end-time": "August 1st @12pm",
        "cost": "$250 per adult, $150 per youth that attends with an adult, family max of $600.",
        "additional-conditions": [
            "Family Discount for second person in the family coming to the Fly Fishing Camp does not apply.",
            "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        ],
        "registration-link": CAMP_REGISTRATION_LINK
    },
    "ladieshorsecamp": {
        "name": "Ladies Horse Camp",
        "start-date": "July 16",
        "end-date": "July 19",
        "year": "2020",
        "start-time": "7:00pm",
        "end-time": "2:00pm",
        "cost": "$300.00",
        "additional-conditions": [
            "Family Discount for second person in the family coming to the Ladies Horse Camp does apply. If this week does not work for you and an adult daughter, check out our Mother/Daughter Horse Camp",
            "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply. This discount applies to them coming to any camp that we run."
        ],
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "meninministry": {
        "name": "Men in Ministry Retreat",
        "start-date": "June 16",
        "end-date": "June 18",
        "year": "2020",
        "start-time": "Noon",
        "end-time": "2pm",
        "cost": "",
        "registration-link": MEN_IN_MINISTRY_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "menspacktrip": {
        "name": "Men's Pack Trip",
        "start-date": "August 21",
        "end-date": "August 24",
        "year": "2020",
        "start-time": "10am",
        "end-time": "2pm",
        "cost": "$450 - $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    },
    "motherdaughterhorsecamp": {
        "name": "Mother/Daughter Horse Camp",
        "start-date": "July 8",
        "end-date": "July 11",
        "year": "2021",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$250 for the adult, $200 for each daughter, Family max is $600.",
        "additional-conditions": [
            "Family Discount for second person in the family coming to the Mother Daughter does not apply. It does apply to others in your family who attend a different program that we offer.",
            "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply. This discount applies to them coming to any camp that we run.",
            "If this week does not work for you and an adult daughter, check out our Ladies Horse Camp July 16-19."
        ],
        "registration-link": CAMP_REGISTRATION_LINK
    },
    "quadcamp": {
        "name": "Quad Camp",
        "start-date": "August 19",
        "end-date": "August 22",
        "year": "2021",
        "start-time": "Noon",
        "end-time": "Noon",
        "cost": "$275 per adult, $140 for youth attending with adult.",
        "registration-link": CAMP_REGISTRATION_LINK
    },
    "boysadventurecamp": {
        "name": "Boy's Adventure Camp",
        "start-date": "July 28",
        "end-date": "August 1",
        "year": "2020",
        "start-time": "2pm",
        "end-time": "2pm",
        "cost": "$400 - with $75 off if you bring a first time friend",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "cancelled"
    }
};

CAMPS["ladieshorsecamp"]["additional-conditions"][0] += " " + CAMPS["motherdaughterhorsecamp"]["start-date"] + " - " + CAMPS["motherdaughterhorsecamp"]["end-date"];
CAMPS["motherdaughterhorsecamp"]["additional-conditions"][2] += " " + CAMPS["ladieshorsecamp"]["start-date"] + " - " + CAMPS["ladieshorsecamp"]["end-date"];

Object.keys(CAMPS).forEach(function(camp) {
   var data = CAMPS[camp];

   CAMPS[camp]["start-time"] += " " + getEventDay(data["start-date"], data["year"]);
   CAMPS[camp]["end-time"] += " " + getEventDay(data["end-date"], data["year"]);
   CAMPS[camp]['days-till'] = daysTillCampStart(data["start-date"] + ", " + data["year"]);
});

function getEventDay(date, year) {
    var dateString = date + ", " + year;
    return getDayOfWeek(dateString);
}

var STAFF = {
    "juniorstaff": {
        "name": "Junior Staff",
        "arrival": "2pm Tuesday Jun 30th",
        "departure": "Open depending on availability",
        "year": "2020",
        "required-dates": [
            "June 30th to July 4th",
            "One of July 8th to 11th Or July 14th to 18th",
            "July 20th to July 23rd"
        ],
        "optional-dates": [
            "July 23rd to August 24th"
        ],
        "cost": "$0.00",
        "registration-link": JUNIOR_STAFF_REGISTRATION_LINK
    }
};


$(document).ready(function(){
    createNavBar();
    setActiveNavLink();
    createFooter();
    replaceUpcomingYear();
    replaceYearReferences();
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
        '                    <a id="nav-staff" class="dropdown-item" href="' + ROOT_PATH + '/about/executive-board.html">Executive Board</a>\n' +
        '                    <a id="nav-faq" class="dropdown-item" href="' + ROOT_PATH + '/about/faq.html">Frequently Asked Questions</a>\n' +
        '                    <a id="nav-contact-us" class="dropdown-item" href="' + ROOT_PATH + '/about/contact-us.html">Contact Us</a>\n' +
        '                </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item"><a id="nav-volunteer" class="nav-link" href="' + ROOT_PATH + '/staff/">Staff Opportunities</a></li>\n' +
        '            <li class="nav-item"><a id="nav-adopt" class="nav-link" href="' + ROOT_PATH + '/adopt-a-horse/">Adopt A Horse</a></li>\n' +
        '            <li class="nav-item"><a id="nav-needs" class="nav-link" href="' + ROOT_PATH + '/needs/">Needs</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/donate/">Donate</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/register/">Register</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/summer2021/">Summer 2021</a></li>\n' +
        '        </ul>\n' +
        '    </div>\n' +
        '</nav>';

    //nav_html += '<div class="alert alert-info alert-dismissible fade show m-nav text-center" role="alert">\n' +
    //    '  <strong>COVID-19 Update </strong> Summer camps for 2020 are cancelled. We will be opening up Willow Creek on June 19th and Coat Creek being on June 26th for Family Rentals. Both will be available until August 30th. For details and registration, click below. \n';

    //var register = '  <div class="col-md-12 text-center"><a href="http://bluebronna.org/register" class="btn btn-info mt-2 mr-2">Details</a><a href="https://bluebronna.wufoo.com/forms/2020-family-rentals" class="btn btn-primary mt-2">Register</a></div>';

   // var close = '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
    //    '    <span aria-hidden="true">&times;</span>\n' +
    //    '  </button>\n' +
    //    '</div>';

    //nav_html += THIS_NAV !== undefined && THIS_NAV !== "events" ? register : "";
    //nav_html += close;
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
        '                <li><a class="contact-text" href=' + ROOT_PATH + '"/staff/index.html" target="_self"><i class="fas fa-caret-right"></i> Staff Opportunities</a></li>\n' +
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

/**
 * Set any upcoming year dates in text
 */
function replaceUpcomingYear() {

    $(".upcoming-year").text(getUpcomingYear());

}

function replaceYearReferences() {
    $(".year-ref").text(getFullYear());
}

function getCampDetails(campKey) {

    var camp = CAMPS[campKey];

    //Validate that the date is not after the end date of the camp in question
    var campEndDate = camp["end-date"] + ", " + camp["year"];
    var finished = isFinished(campEndDate);
    var cancelled = camp.hasOwnProperty("status") ? camp["status"] === "cancelled" : false;

    $(".name").text(camp["name"]);
    $(".cost").text(camp["cost"]);

    if (finished) {
        $(".camp-dates").text("TBA " + getUpcomingYear(camp["year"]));
        $(".start-time").text("TBA");
        $(".end-time").text("TBA");
        $(".registration-link").addClass("disabled");
    } else if (cancelled) {
        $(".camp-dates").text("Cancelled for " + camp["year"]);
        $(".start-time").text("Cancelled for " + camp["year"]);
        $(".end-time").text("Cancelled for " + camp["year"]);
        $(".start-time, .end-time").css("color", "red");
        $(".registration-link").addClass("disabled");
    } else {
        $(".start-date").text(camp["start-date"]);
        $(".end-date").text(camp["end-date"]);
        $(".year").text(camp["year"]);
        $(".start-time").text(camp["start-time"]);
        $(".end-time").text(camp["end-time"]);

    }

    closeRegistrationIfEmptyOrFinished(camp["registration-link"], finished);

    if (camp.hasOwnProperty('additional-conditions')) {
        camp['additional-conditions'].forEach(function(elem){
            $('.additional-conditions').append('<p class="font-weight-bold">' + elem  + '</p>');
        });
    }

}

function closeRegistrationIfEmptyOrFinished(link, finished) {

    if (finished || link === "") {
        $(".registration-link").text("Registration Closed");
    } else {
        $(".registration-link").attr("href", link);
    }
}

function getJuniorStaffDetails() {
    var staff = STAFF["juniorstaff"];

    $(".name").text(staff["name"]);
    $(".cost").text(staff["cost"]);
    $(".arrival").text(staff["arrival"]);
    $(".departure").text(staff["departure"]);
    $(".registration-link").attr("href", staff["registration-link"]);

    staff["required-dates"].forEach(function(elem){
        $(".required-dates").append("<li>" + elem + "</li>");
    });

    staff["optional-dates"].forEach(function(elem){
        $(".optional-dates").append("<li>" + elem + "</li>");
    });

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

/**
 * Check if camp is finished
 */
function isFinished(date) {
    return new Date() > new Date(date);
}

function getUpcomingYear(campYear) {

    if (campYear) {
        return parseInt(campYear) + 1;
    }

    //If the date is September to December, use next year
    var dt = new Date();

    var year = dt.getFullYear();
    if (dt.getMonth() > 8) {
        year += 1;
    }

    return year;
}

function getDayOfWeek(dateString) {
    var dt = new Date(dateString);

    return new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(dt)
}

function daysTillCampStart(date) {

    if (isFinished(date)) {
        return "";
    } else {
        return dateDiffInDays(new Date(), new Date(date));
    }

}

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

//Date dateDiffInDays used with MIT License
//Author: Shyam Habarakada - https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
// a and b are javascript Date objects
function dateDiffInDays(a, b) {

    var _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
