/**
 * Functions that are used across all pages including initial setup
 */
//Set reset building blocks
var PageOrder = ["Season", "Formality", "Marital", "Material", "Obi", "Pattern"];
var ImageValuesStart = 3;
var BasicValue = {
    Value: "",
    Class: "locked",
    Image: ""
}

var ImageValue = Object.assign({}, BasicValue);
ImageValue["Image"] = "";

var ScenarioValues = { //Tracks the nav-style and value selected
    Season: {
      Value: "", //Selected value, "" if no selected value
      Class: "current" //Used to determine how the navigation styles the link
    },
    Formality: Object.assign({}, BasicValue),
    Marital:  Object.assign({}, BasicValue), 
    Material: Object.assign({}, ImageValue),
    Obi: Object.assign({}, ImageValue),
    Pattern: Object.assign({}, ImageValue)
};

var BaseScenarioValues = ScenarioValues;

//Check localStorage for ScenarioValues
function IsStorageSet() {
    return localStorage.getItem("ScenarioValues") !== null;
}

//Take ScenarioValues and store
function SetStorage(ScenarioValues) {
    localStorage.setItem("ScenarioValues", JSON.stringify(ScenarioValues));
}

//Get ScenarioValues from storage
function GetStorage() {
    return JSON.parse(localStorage.getItem("ScenarioValues"));
}

function GetPage() {
    var IsSeason = $("#season-container").length > 0;
    var IsFormality = $("#formality-container").length > 0;
    var IsMarital = $("#marital-container").length > 0;
    var IsMaterial = $("#material-container").length > 0;
    var IsObi = $("#obi-container").length > 0;
    var IsPattern = $("#pattern-container").length > 0;

    return IsSeason ? "Season" : 
    IsFormality ? "Formality" : 
    IsMarital ? "Marital" : 
    IsMaterial ? "Material" : 
    IsObi ? "Obi" : 
    IsPattern ? "Pattern" : "Final";
}

//Set a particular value
function SetScenarioValue(page, value) {
    ScenarioValues[page].Value = value;
}

function ClearScenarioValue(page) {
    ScenarioValues[page].Value = "";
}

function ClearScenarioImage(page) {
    ScenarioValues[page].Image = "";
}

function SetScenarioImage(page, value) {
    ScenarioValues[page].Image = value;
}

function SetScenarioNavClass(page, value) {
    ScenarioValues[page].Class = value;
}

function IsAlreadySelected(page, value) {
    return ScenarioValues[page].Value == value;
}

function SendBackTo(pageURL, page) {
    localStorage.setItem("Back", "true");
    localStorage.setItem("BackTo", page);
    window.location.href = pageURL;
}

//Goes to next page
function ForwardTo(pageURL, page) {
    if (!$(".next-btn").attr("disabled") && page != "Final") {

        var ThisPage = GetPreviousPage(page);
        SetScenarioNavClass(ThisPage, "unlocked");
        SetScenarioNavClass(page, "current");

        SetStorage(ScenarioValues);
        window.location.href = pageURL;
        
    } else if (!$(".next-btn").attr("disabled")) {
        SetStorage(ScenarioValues);
        window.location.href = pageURL;
    }
}

//Gets name of last page
function GetPreviousPage(page) {
    return PageOrder[PageOrder.indexOf(page) - 1];
}

function ResetOrdered() {
    return localStorage.getItem("Back") !== null;
}

function ResetScenarioValues() {
    localStorage.removeItem("Back");
    var page = localStorage.getItem("BackTo");
    localStorage.removeItem("BackTo");
    
    var StartIndex = PageOrder.indexOf(page);

    for (var i = StartIndex; i < PageOrder.length; i++) {
        ScenarioValues[PageOrder[i]] = i >= ImageValuesStart ? Object.assign({}, ImageValue) : Object.assign({}, BasicValue);
    }

    SetStorage(ScenarioValues);
}

function MaintainStorageIntegrity() {
    if (!IsStorageSet()) {
        SetStorage(ScenarioValues);
    } else {
        ScenarioValues = GetStorage();
    }

    if (ResetOrdered()) {
        ResetScenarioValues();
    }
}

function DisableNextButton() {
    $(".next-btn").each(function(){
        $(this).attr("disabled", true);
    });
}

function EnableNextButton() {
    $(".next-btn").each(function(){
        $(this).attr("disabled", false);
    });
}

function TurnOffRulesAlert(Page) {
    var Alerts = JSON.parse(localStorage.getItem("ScenarioAlerts"));
    Alerts[Page] = "off";
    localStorage.setItem("ScenarioAlerts", JSON.stringify(Alerts));

}

function AddClassIfNotThere(Selector, ClassName) {
    if (!$(Selector).hasClass(ClassName)) {
        $(Selector).addClass(ClassName);
    }
}

$(document).ready(function(){

    if (localStorage.getItem("ScenarioAlerts") == null) {

        var Alerts = {
            "Season": "",
            "Material": "",
            "Obi": "",
            "Pattern": ""
        };

        localStorage.setItem("ScenarioAlerts", JSON.stringify(Alerts)); 
    }

});


