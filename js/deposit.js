document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if(newDepositAmount < 0 || isNaN(newDepositAmount)){
        alert('please provide a positive number');
        return;
    }
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})