/*
Global Variables
*/
var MyFullName = "Curtis Zim Moody";

/*
Variable Setup
*/

/*
Event Listeners
*/
$(document).ready(function(){
    TypeOutName(0);

    $("#MenuOpener").click(function(){
        $(this).toggleClass('active');
        $("#Menu").toggleClass('open');
        $("#TeaserSection").toggle();
        $("#RightNav").toggle();
    });
}); 



/*
Functions
*/
//Types out my name
function TypeOutName(LetterIndex) {
    
    if (LetterIndex < MyFullName.length) {

        $("#FullName").html(MyFullName.substring(0, LetterIndex + 1) + 
        '<span class="type-caret"></span>');

        setTimeout(function(){
            TypeOutName(LetterIndex + 1)
        }, 150);

    } else {

        $("span.type-caret").delay(1500).fadeOut(400, TeaserFadeIn);

    }
}

//Makes job title fade in in time
function TeaserFadeIn() {
    var Time = 800;
    var IncrementTime = 800;

    $("#JobTitle").fadeTo(Time, 1);

    $(".social-icon a").each(function(){

        Time += IncrementTime;

        $(this).delay(400).fadeTo(Time, 1);

    }).after(function(){
        $("#MenuOpener").delay(1000).fadeTo(800, 1);
        $("#RightNav").fadeTo(800, 1);
        $("#BottomNav").fadeTo(800, 1);
    });


}