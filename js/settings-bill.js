// get a reference to the sms or call radio buttons
const billItemTypeRadioSettingElement = document.querySelector(".billItemTypeRadio");
const callsTotalSettingElement = document.querySelector(".callTotalSettings");
const smsTotalSettingElement = document.querySelector(".smsTotalSettings");
// get refences to all the settings fields
const billItemTypeWithSettingsElement = document.querySelector(".billItemWithTypeSettings");
const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const warningLevelElement = document.querySelector(".warningLevelSetting");
const criticalLevelElement = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const radioBillSettingAddBtn = document.querySelector(".radioBillSettingAddBtn");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings")
const updateSettingsBtn = document.querySelector(".updateSettingsBtn");
// create a variables that will keep track of all the settings
var callsTotal = 0;
var smsTotal = 0; 
var warningLevelvalue = 0;
var criticalLevelvalue = 0;
var total = 0;
var smsTotalValue = 0;
var callsTotalValue = 0;
// create a variables that will keep track of all three totals.
const totalCostSettingElement = document.querySelector(".totalSettings");


//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
console.log(criticalLevelvalue);
function radioBillSettingsTotal(){
    var checkedRadioSettingsBtn = document.querySelector("input[name='radioBillSettingAddBtn']:checked");
   // var checkedRadioSettingsBtn = document.querySelector(".billItemTypeWithSettings:checked");
   var billItemType = checkedRadioSettingsBtn.value;
    // get the value entered in the billType textfield
  
   
   
    if (checkedRadioSettingsBtn){
       
        if (billItemType === "call"){
            callsTotal += callsTotalValue
        }
        else if (billItemType === "sms"){
            smsTotal += smsTotalValue;
        }
    }
  
    // update the correct total

    
    //update the totals that is displayed on the screen.
    callsTotalSettingElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostSettingElement.innerHTML = totalCost.toFixed(2);


    

    if (totalCost >= criticalLevelvalue){
        // adding the danger class will make the text red
        totalCostSettingElement.classList.remove("warning");
        totalCostSettingElement.classList.add("danger");

    }
    else if (totalCost >= warningLevelvalue){
        totalCostSettingElement.classList.remove("danger");
        totalCostSettingElement.classList.add("warning");
    }
}

radioBillSettingAddBtn.addEventListener('click', radioBillSettingsTotal);

function settings(){
    callsTotalValue = Number(callCostSettingElement.value);
    smsTotalValue = Number(smsCostSettingElement.value);
    warningLevelvalue = Number(warningLevelElement.value);
    criticalLevelvalue = Number(criticalLevelElement.value);

}

updateSettings.addEventListener('click', settings);