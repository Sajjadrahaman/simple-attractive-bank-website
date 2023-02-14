/* 
Step-1: Add Withdraw button event handler
*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    /*
    Step-2: get new withdraw Amount from input field
    */
    const newWithdrawAmount = getInputFieldValueById('user-withdraw');
    /* 
    Step-3: Get previous Withdraw total by id
    */
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    /* 
    Step-5: Get previous balance total by id
    */
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("you haven't enough balance");
        return;
    }
    /*
    Step-4:Calculate And Set New Withdraw Total
    */
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    /* 
    step-6: Calculate and Set New Balance Total
    */
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})