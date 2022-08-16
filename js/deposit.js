//step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the deposit amount from the input feild
    const depositFeild = document.getElementById('deposit-field');
    const newdepositAmountString = depositFeild.value;
    const newdepositAmount = parseFloat(newdepositAmountString);
    
    //step-3: get the current deposit total
    //for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total') 
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    //step-5: get ballance current total 
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalancsTotalString = ballanceTotalElement.innerText;
    const previousBalancsTotal = parseFloat(previousBalancsTotalString);
    //step-6:Calculate current total balance
    const currentBalanceTotal = previousBalancsTotal + newdepositAmount;
    //set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal;


    ///step-7:clear the deposit value
      depositFeild.value = '';
    
})
