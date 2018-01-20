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
    if (!$(".next-btn").attr("disabled")) {

        var ThisPage = GetPreviousPage(page);
        SetScenarioNavClass(ThisPage, "unlocked");
        SetScenarioNavClass(page, "current");

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

function SetNavigationBar() {
    $('#ScenarioNav').load("./snippets/scenario-nav.html", function(){        
        for (var i = 0; i < PageOrder.length; i++) {
            var NavID = PageOrder[i]+"Nav";
    
            $("#"+NavID).removeClass();
            $("#"+NavID).addClass(ScenarioValues[PageOrder[i]].Class);
            $("#"+NavID).on("click", function(){
                SendBackTo(this.id.replace("Nav", "").toLowerCase() + ".html", this.id.replace("Nav", "").toLowerCase());
            });
        }
     }); //Load Navigation Bar
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

//DEBUG BELOW. TO BE DELETED
$(document).ready(function(){
    console.log(ScenarioValues);
    console.log(GetPage());
});


