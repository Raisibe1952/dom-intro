// get a reference to the sms or call radio buttons
const billItemTypeRadioSettingElement = document.querySelector(".billItemTypeRadio");
const callsTotalSettingElement = document.querySelector(".callTotalTwo");
const smsTotalSettingElement = document.querySelector(".smsTotalTwo");
// get refences to all the settings fields
const billItemTypeWithSettingsElement = document.querySelector(".billItemWithTypeSettings");
const callCostSettingElement = document.querySelector(".callTotalSettings");
const smsCostSettingElement = document.querySelector(".smsTotalSettings");
const warningLevelElement = document.querySelector(".warningLevel");
const criticalLevelElement = document.querySelector(".criticalLevel");

//get a reference to the add button
const radioBillSettingAddBtn = document.querySelector(".radioBillSettingAddBtn");

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettingsBtn");
// create a variables that will keep track of all the settings
var smsCost = 0;
var callCost = 0;
var WarningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
const totalCostSettingElement = document.querySelector(".totalSettings");
var callsTotal = 0;
var smsTotal = 0; 
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function radioBillSettingsTotal(){
    var checkedRadioSettingsBtn = document.querySelector("input[name='radioBillSettingAddBtn']:checked");
   // var checkedRadioSettingsBtn = document.querySelector(".billItemTypeWithSettings:checked");
   var billItemType = checkedRadioSettingsBtn.value;
    // get the value entered in the billType textfield
  
   
    console.log(billItemType);
    if (checkedRadioSettingsBtn){
       
        if (billItemType === "call"){
            callsTotal += 2.75
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
    }
    // update the correct total

    
    //update the totals that is displayed on the screen.
    callsTotalSettingElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostSettingElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostSettingElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostSettingElement.classList.add("warning");
    }
}

radioBillSettingAddBtn.addEventListener('click', radioBillSettingsTotal);
