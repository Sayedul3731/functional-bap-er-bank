document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if(newWithdrawAmount < 0 || isNaN(newWithdrawAmount)){
        alert('please provide a positive number');
        return;
    }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    // setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Sorry!! I have no enough money.');
        return;
    }
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})