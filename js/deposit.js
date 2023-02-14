/*----------------Main Code are Utilities file------------------*/

document.getElementById('btn-deposit').addEventListener('click', function() {
    /* step-1:::
        1.get the element by id
        2.get the value from the element
        3.convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /*
    Step-2:get previous deposit total by id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');
    /*
    Step-3:Calculate and Set new Deposit total
    */
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    /* 
    Step-4: Get previous balance total by id
    */
   const previousBalanceTotal = getTextElementValueById('balance-total');
   /* 
   step-5: Calculate and Set New Balance Total
   */
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById('balance-total', newBalanceTotal);
})