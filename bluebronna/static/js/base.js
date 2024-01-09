var ADDRESS = "Box 65, Longview, AB T0L 1H0";
var OFFICE_EMAIL = "office@bluebronna.org";

var CAMP_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2023-summer-camp-registration-blue-bronna";
var JUNIOR_STAFF_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2023-blue-bronna-jr-staff-training-application";
var FAMILY_DAY_WEEKEND_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2023-family-weekend-camps";
var MEN_IN_MINISTRY_REGISTRATION_LINK = "https://bluebronna.wufoo.com/forms/2023-men-in-ministry-camp";

var STAFF_INFORMATION_PACKAGE = "../static/files/2023 BBWC Camp Staff Information.pdf";
var NEW_STAFF_APPLICATION_LINK = "https://bluebronna.wufoo.com/forms/2023-blue-bronna-wilderness-camp-staff-application";
var RETURNING_STAFF_APPLICATION_LINK = "https://bluebronna.wufoo.com/forms/2023-bbwc-returning-staff-application";

var REGISTRATION_LOCKED_UNTIL = new Date(2022, 0, 14, 19, 0, 0, 0);
var TODAY = new Date();

if (TODAY < REGISTRATION_LOCKED_UNTIL) {
    CAMP_REGISTRATION_LINK = "#";
}

var CAMPS = {
    "youth89": {
        "name": "Youth Adventure Camp: Ages 8 to 10",
        "start-dates": ["July 3", "July 17"],
        "end-dates": ["July 8", "July 22"],
        "year": "2022",
        "start-time": "Sunday at 4pm",
        "end-time": "Friday at 2pm",
        "cost": "$400",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "",
        "multi": true
    },
    "youth1012": {
        "name": "Youth Adventure Camp: Ages 10 to 12",
        "start-dates": ["July 10", "August 2"],
        "end-dates": ["July 15", "August 7"],
        "year": "2022",
        "start-time": "4pm",
        "end-time": "2pm",
        "cost": "$400",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": "",
        "multi": true
    },
    "horsecamp": {
        "name": "Girls Horse Camp",
        "start-date": "July 24",
        "end-date": "July 29",
        "year": "2022",
        "start-time": "4pm",
        "end-time": "2pm",
        "cost": "$425",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "boyssurvivorcamp" : {
        "name": "Survivor Camp - Ages 13 to 17",
        "start-date": "July 24",
        "end-date": "July 29",
        "year": "2023",
        "start-time": "4pm",
        "end-time": "2pm",
        "cost": "$490",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "hikingbasecamp": {
        "name": "Hiking Base Camp - Ages 13 to 17",
        "start-date": "August 1",
        "end-date": "August 5",
        "year": "2023",
        "start-time": "4pm",
        "end-time": "2pm",
        "cost": "$490",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
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
        "name": "Teen Photography Camp",
        "start-date": "July 7",
        "end-date": "July 11",
        "year": "2024",
        "start-time": "4pm",
        "end-time": "2pm",
        "cost": "$490 per person",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "winterfamilydays": {
        "name": "Winter Family Days",
        "start-dates": ["February 16", "February 17"],
        "end-dates": ["February 19", "February 20"],
        "start-date": "February 4",
        "end-date": "February 21",
        "year": "2024",
        "start-time": "7:00pm",
        "end-time": "2:00pm on Sunday",
        "cost": "Varied",
        "multi": true,
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
        "start-date": "August 11",
        "end-date": "August 14",
        "year": "2024",
        "start-time": "4:00pm",
        "end-time": "2:00pm",
        "cost": "$200 per day (24 hour period) maximum per family of 5 includes all accommodations, food and activities. $600.00 for the weekend for 5 people.",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "fatherdaughterhorsecamp": {
        "name": "Father/Daughter Horse Camp",
        "start-date": "August 5",
        "end-date": "August 8",
        "year": "2024",
        "start-time": "Noon",
        "end-time": "2:00pm",
        "cost": "$350 each with a max of $800 for a family of three",
        // "additional-conditions": [
        //     "Family Discount for second person in the family coming to the Father Daughter Horse Camp does not apply.",
        //     "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        // ],
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "fathersonadventurecamp": {
        "name": "Father/Son Adventure Camp",
        "start-date": "July 14",
        "end-date": "July 18",
        "year": "2024",
        "start-time": "5:00pm",
        "end-time": "2:00pm",
        "cost": "$350 each with a max of $800 for a family of three",
        // "additional-conditions": [
        //     "Family Discount for second person in the family coming to the Father Son Adventure Camp does not apply.",
        //     "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        // ],
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "fishingcamp": {
        "name": "Fly Fishing Camp",
        "start-date": "July 21",
        "end-date": "July 25",
        "year": "2024",
        "start-time": "July 23rd 12:00 noon",
        "end-time": "July 27th 12:00 noon",
        "cost": "$350 each with a max of $800 for a family of three",
        // "additional-conditions": [
        //     "Family Discount for second person in the family coming to the Fly Fishing Camp does not apply.",
        //     "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply."
        // ],
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
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
        "name": "Men in Ministry Camp",
        "start-date": "June 13",
        "end-date": "June 15",
        "year": "2023",
        "start-time": "Noon",
        "end-time": "2pm",
        "cost": "Free",
        "registration-link": MEN_IN_MINISTRY_REGISTRATION_LINK,
        "status": ""
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
        "name": "Mother/Daughter Horse Camps",
        "start-date": "July 7",
        "end-date": "July 10",
        "year": "2024",
        "start-time": "2:00pm",
        "end-time": "2:00pm",
        "cost": "$350 each with a max of $800 for a family of three",
        // "additional-conditions": [
        //     "Family Discount for second person in the family coming to the Mother Daughter does not apply. It does apply to others in your family who attend a different program that we offer.",
        //     "$75 discount for a person who is invited by you and registers who has never been to Blue Bronna before does apply. This discount applies to them coming to any camp that we run.",
        //     "If this week does not work for you and an adult daughter, check out our Ladies Horse Camp July 16-19."
        // ],
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
    },
    "quadcamp": {
        "name": "Quad Camp",
        "start-date": "August 19",
        "end-date": "August 22",
        "year": "2021",
        "start-time": "Noon",
        "end-time": "Noon",
        "cost": "$250 each with a max of $600 per family",
        "registration-link": CAMP_REGISTRATION_LINK,
        "status": ""
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

if (CAMPS["ladieshorsecamp"].hasOwnProperty("additional-conditions")) {
    CAMPS["ladieshorsecamp"]["additional-conditions"][0] += " " + CAMPS["motherdaughterhorsecamp"]["start-date"] + " - " + CAMPS["motherdaughterhorsecamp"]["end-date"];
}

if (CAMPS["motherdaughterhorsecamp"].hasOwnProperty("additional-conditions")) {
    CAMPS["motherdaughterhorsecamp"]["additional-conditions"][2] += " " + CAMPS["ladieshorsecamp"]["start-date"] + " - " + CAMPS["ladieshorsecamp"]["end-date"];
}

Object.keys(CAMPS).forEach(function(camp) {

    try {
        var data = CAMPS[camp];

        CAMPS[camp]["start-time"] += " " + getEventDay(data["start-date"], data["year"]);
        CAMPS[camp]["end-time"] += " " + getEventDay(data["end-date"], data["year"]);
        CAMPS[camp]['days-till'] = daysTillCampStart(data["start-date"] + ", " + data["year"]);
    } catch (e) {

    }

});

function getEventDay(date, year) {
    var dateString = date + ", " + year;
    return getDayOfWeek(dateString);
}

var STAFF = {
    "juniorstaff": {
        "name": "Junior Staff Training Programs",
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
        '            <li class="nav-item"><a class="nav-link" href=' + ROOT_PATH + '"/summer2024/">Summer 2023</a></li>\n' +
        '            <li class="nav-item"><a class="nav-link" href="' + ROOT_PATH + '/camp-forms/">Camp Forms</a></li>\n' +
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
        '\n' +
        '\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '        <div class="col-md-4 mb-2">\n' +
        '            <h5 class="font-weight-bold">Contact Us</h5>\n' +
        '            <div>\n' +
        '                <p>\n' +
        '                    <i class="fas fa-phone bb-darkblue"></i><a class="contact-text" href="tel:4038791252"> (403)879-1252 </a> \n' +
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
    var full = camp.hasOwnProperty("status") ? camp["status"] === "full" : false;
    var soon = camp.hasOwnProperty("status") ? camp["status"] === "soon" : false;
    var multiDate = camp.hasOwnProperty("multi") ? camp["multi"] === true : false;

    $(".name").text(camp["name"]);
    $(".cost").text(camp["cost"]);

    if (soon || CAMP_REGISTRATION_LINK === "#") {
        $(".registration-link").addClass("disabled");
    }

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
    } else if (full) {
        $(".camp-dates").text("Full");
        $(".start-time").text("Full");
        $(".end-time").text("Full");
        $(".start-time, .end-time").css("color", "red");
        $(".registration-link").addClass("disabled");
    } else if (multiDate) {
        let starts = camp["start-dates"];
        let ends = camp["end-dates"];

        for (let i = 0; i < starts.length; i++) {
            $(".start-date-" + i).text(starts[i]);
            $(".end-date-" + i).text(ends[i]);
        }
        $(".year").text(camp["year"]);
        $(".start-time").text(camp["start-time"]);
        $(".end-time").text(camp["end-time"]);

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
