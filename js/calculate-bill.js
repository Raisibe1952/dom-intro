//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");


//get a reference to the billString
const billStringElement = document.querySelector(".billString");

const billTotalSpanElement = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function styleTotalColor (roundedBillTotal) {
    const currentTotal = Number (roundedBillTotal);

    
   

    if (currentTotal >= 30) {
        //make the total red
        billTotalSpanElement.classList.remove("warning");

        billTotalSpanElement.classList.add("danger");
    } else if (currentTotal >= 20 && currentTotal  < 30) {
        //make the total orange
        billTotalSpanElement.classList.remove("danger");
        billTotalSpanElement.classList.add("warning");
    } else {
        billTotalSpanElement.classList.remove("warning");
        billTotalSpanElement.classList.remove("danger");
    }

}


function calculateBtnClicked(){
   
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);

    billTotalElement.innerHTML = roundedBillTotal;
    styleTotalColor(roundedBillTotal);
}


calculateBtn.addEventListener('click', calculateBtnClicked); 

//link the function to a click event on the calculate button
