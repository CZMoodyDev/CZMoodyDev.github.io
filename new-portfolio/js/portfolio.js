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
        }, 100);

    } else {

        $("span.type-caret").delay(2100).fadeOut(400, TitleFadeIn);

    }
}

//Makes job title fade in
function TitleFadeIn() {
    $("#JobTitle").fadeTo(1000, 1);
}