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

function TurnOffRulesAlert() {
    var Alerts = JSON.parse(localStorage.getItem("ScenarioAlerts"));
    Alerts["Season"] = "off";
    localStorage.setItem("ScenarioAlerts", JSON.stringify(Alerts));

}

$(document).ready(function(){

    var ShowPageAlert = JSON.parse(localStorage.getItem("ScenarioAlerts"));

    if (ShowPageAlert["Season"] == "") {
        $("#AlertModal").modal("show");
    }
});