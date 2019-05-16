$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

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