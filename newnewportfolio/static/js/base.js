$(".card-flip").toggleClass("flip");

$( ".card-flip" ).click(function(e) {
    if (e.target.className.indexOf('fa-') === -1 || e.target.className.indexOf('fa-sync') !== -1) {
        if (  $( this ).css( "transform" ) == 'none' ){
            $(this).css("transform","rotateY(180deg)");
        } else {
            $(this).css("transform","" );
        }
    }
});

$("#portfolio .fa-external-link-alt, #portfolio .fa-steam, #portfolio .fa-youtube").hover(function() {
    $(this).prev().css("color", "#80556f");
}, function(){
    $(this).prev().css("color", "#ad7a99");
});

$('.hiddenMail').on('click',function(event)
{
    event.preventDefault();
    $(this).off("click");
    var email = $(this).attr("data-email").replace(/AT/,'@').replace(/DOT/,'.');
    $(this).removeClass("hiddenMail");
    $(this).html(email);
    $(this).attr("href","mailto:"+email);
});
