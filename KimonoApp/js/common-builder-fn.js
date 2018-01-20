MaintainStorageIntegrity();

function SetBuilderValue(page, value) {

    $(".selected").removeClass("selected");

    if (IsAlreadySelected(page, value)) {
        ClearScenarioValue(page);
        //TODO Turn off border highlighting
        $(".next-btn").attr("disabled", true);
    } else {
        $("#" + value.toLowerCase() + "-card").addClass("selected");
        SetScenarioValue(page, value);
        $(".next-btn").attr("disabled", false);
    }
}

$(document).ready(function(){
    SetNavigationBar();
});