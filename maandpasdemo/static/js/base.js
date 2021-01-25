var schedule = {
    "0": {
       "day": "Sunday",
        "items": {},
        "hours": "Closed"
    },
    "1": {
        "day": "Monday",
        "items": {
            "Soup: Creamy Corn Chowder": "$3.00 - $5.00",
            "Sandwich: Ham & Cheese": "$6.50"
        },
        "hours": "6am to 5pm"
    },
    "2": {
        "day": "Tuesday",
        "items": {
            "Soup: Chicken Taco": "$3.00 - $5.00",
            "Sandwich: BLT": "$6.50"
        },
        "hours": "6am to 5pm"
    },
    "3": {
        "day": "Wednesday",
        "items": {
            "Soup: Roasted Tomato and Basil": "$3.00 - $5.00",
            "Sandwich: Grilled Cheese": "$6.50"
        },
        "hours": "6am to 5pm"
    },
    "4": {
        "day": "Thursday",
        "items": {
            "Soup: Chicken Noodle Soup": "$3.00 - $5.00",
            "Sandwich: Chicken Salad": "$6.50"
        },
        "hours": "6am to 5pm"
    },
    "5": {
        "day": "Friday",
        "items": {
            "Soup: Loaded Baked Potato": "$3.00 - $5.00",
            "Sandwich: BBQ Beef on a Bun": "$7.50"
        },
        "hours": "6am to 5pm"
    },
    "6": {
        "day": "Saturday",
        "items": {
            "Soup: Cream of Broccoli": "$3.00 - $5.00",
            "Sandwich: Roast Beef": "$6.50"
        },
        "hours": "9am to 3pm"
    }
};

var bakery = {
    "Breads" : {
        "White Bread": {
            "price": "$4.00"
        },
        "White Buns": {
            "price": "$3.00"
        },
        "12 Grain Bread": {
            "price": "$5.00"
        },
        "12 Grain Buns": {
            "price": "$4.00"
        },
        "French Bread": {
            "price": "$4.00"
        },
        "Cheese Bread": {
            "price": "$6.00"
        },
        "Cinnamon Bread": {
            "price": "$5.00"
        },
        "Cinnamon Raisin Bread": {
            "price": "$5.00"
        },
        "1/2 Loaf Banana Bread": {
            "price": "$5.00"
        }
    },
    "Cookies" : {
        "Chocolate Chip": {
            "price": "$1.50"
        },
        "Rainbow": {
            "price": "$1.50"
        },
        "Ginger Snap": {
            "price": "$1.50"
        },
        "Sugar Cookies": {
            "price": "$1.50"
        },
        "1 Dozen Cookies": {
            "price": "$15.00"
        }
    },
    "Squares" : {
        "Reese": {
            "price": "$2.00"
        },
        "Confetti": {
            "price": "$2.00"
        },
        "Chocolate Marshmallow": {
            "price": "$2.00"
        },
        "Rice Krispy": {
            "price": "$1.50"
        },
    },
    "Sweets and Treats" : {
        "Cinnamon Buns": {
            "price": "$2.50"
        },
        "Pizza Twists": {
            "price": "$2.00"
        },
        "Banana Bread": {
            "price": "$1.50"
        }
    },
    "Pastries": {
        "Turnovers (Cherry/Blueberry)": {
            "price": "$2.50"
        },
        "Cinnamon Twists": {
            "price": "$1.00"
        },
        "1/2 Dozen Cinnamon Twists": {
            "price": "$5.00"
        },
        "Tarts (Plain, Raisin, Pecan)": {
            "price": "$1.25"
        },
        "1/2 Dozen Tarts": {
            "price": "$6.00"
        },
        "Pie (Apple, Pumpkin)": {
            "price": "$15.00",
            "notes": "(Other flavours available upon request)"
        }
    }

};

function fillStoreHours() {

    Object.keys(schedule).forEach(function(day){
        var weekday = schedule[day]["day"];
        var hours = schedule[day]["hours"];

        $("#" + weekday).text(hours);
    });


}

function fillDates() {
    var date = new Date();
    $("span.year").text(date.getFullYear());
}