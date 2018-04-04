MaintainStorageIntegrity();

function SetBuilderValue(page, value) {

    $(".selected").removeClass("selected");

    if (IsAlreadySelected(page, value)) {
        ClearScenarioValue(page);
        DisableNextButton();
    } else {
        $("#" + value.toLowerCase() + "-card").addClass("selected");
        SetScenarioValue(page, value);
        EnableNextButton();
    }
}

function Resize(){    
    
    var Page = GetPage();

    var MaxColumns = 12;
    var LargeCardColumns = Page == "Season" ? 2 : 3;
    var SmallCardColumns = Page == "Season" ? 1 : 1;
    var Cards = Page == "Season" ? 4 : 2;
    var CardHolderForSmallCards = (MaxColumns - (SmallCardColumns * Cards)) / 2;
    var CardHolderForLargeCards = (MaxColumns - (LargeCardColumns * Cards)) / 2;

    if (window.innerWidth < 1000) {
        
        $('.card').each(function(){
            $(this).removeClass("col-xs-" + SmallCardColumns);
            $(this).addClass("col-xs-" + LargeCardColumns);
        });
        
        $('.card-holder').removeClass("col-xs-" + CardHolderForSmallCards);
        $('.card-holder').addClass("col-xs-" + CardHolderForLargeCards);
    }

    if (window.innerWidth >= 1000) {
        $('.card').each(function(){
            $(this).removeClass("col-xs-" + LargeCardColumns);
            $(this).addClass("col-xs-" + SmallCardColumns);
        });

        $('.card-holder').removeClass("col-xs-" + CardHolderForLargeCards);
        $('.card-holder').addClass("col-xs-" + CardHolderForSmallCards);
    }
}

$(document).ready(function(){

    var ShowPageAlert = JSON.parse(localStorage.getItem("ScenarioAlerts"));

    if (ShowPageAlert["Season"] == "" && GetPage() == "Season") {
        $("#AlertModal").modal("show");
    }

    $(window).on("resize", function(){                      
        Resize();
    });

    Resize();

});