$('.navbar-nav>li>a').on('click', function(){
    if (!$(this).hasClass('dropdown-toggle')) {
        $('.navbar-collapse').collapse('hide');
    }
});

function turnOnLethbridge() {
    $("#lethbridgeMap").show();
    $("#lethbridgeControl").addClass("active-control");
    $("#medicineHatMap").hide();
    $("#medicineHatControl").removeClass("active-control");
}

function turnOnMedicineHat() {
    $("#medicineHatMap").show();
    $("#medicineHatControl").addClass("active-control");
    $("#lethbridgeMap").hide();
    $("#lethbridgeControl").removeClass("active-control");
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

/* Fixed position with footer by Lionel Paulus https://codepen.io/lionelpaulus/pen/YGXwxr */
var socialFloat = document.querySelector('#scheduleMobileBlock');
var footer = document.querySelector('#footer');

function checkOffset() {
    if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
        socialFloat.style.position = 'absolute';
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
        socialFloat.style.position = 'fixed'; // restore when you scroll up
}

function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
}

document.addEventListener("scroll", function(){
    checkOffset();
});

$(document).ready(checkOffset);