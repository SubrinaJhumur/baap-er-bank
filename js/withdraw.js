//1.add event handler with the withdraw button
//2. get the withdraw amount from the withdraw input feild
//2.5. also make sure to convert the input into a number by using parseFloat
//3. get previous withdraw total
//step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2:
    const withdrawFeild = document.getElementById('withdraw-feild');
    const newwithdrawAmountString = withdrawFeild.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);
    
    
    //step-3:
})