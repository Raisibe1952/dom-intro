// get a reference to the sms or call radio buttons

const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
const callsTotalElement = document.querySelector(".callTotalTwo");
const smsTotalElement = document.querySelector(".smsTotalTwo");
 
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const totalCostElement = document.querySelector(".totalTwo");
var callsTotal = 0;
var smsTotal = 0; 

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


   
    // billItemType will be 'call' or 'sms'
    
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedRadioBtn.value;
    // get the value entered in the billType textfield
  
   
   
    if (checkedRadioBtn){
       
        if (billItemType === "call"){
            callsTotal += 2.75
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
    }
    // update the correct total

    
    //update the totals that is displayed on the screen.
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}

radioBillAddBtn.addEventListener('click', radioBillTotal);