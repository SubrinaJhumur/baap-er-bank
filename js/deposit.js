//step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the deposit amount from the input feild
    const depositFeild = document.getElementById('deposit-field');
    const newdepositAmount = depositFeild.value;
    //step-3: get the current deposit total
    //for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total') 
    const previousdepositTotal = depositTotalElement.innerText;

    const currentDepositTotal = previousdepositTotal + newdepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    ///step-7:clear the deposit value
      depositFeild.value = '';
    
})
