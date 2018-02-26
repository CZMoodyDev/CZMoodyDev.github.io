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

$(document).ready(function(){

    var ShowPageAlert = JSON.parse(localStorage.getItem("ScenarioAlerts"));

    if (ShowPageAlert["Season"] == "" && GetPage() == "Season") {
        $("#AlertModal").modal("show");
    }

});