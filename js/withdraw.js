document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString =withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);
//    step-4
const currentWithdrawTotal = previouswithdrawTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;
//    step-5

const BalanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalElementString =BalanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)
// step-6
const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
BalanceTotalElement.innerText = newBalanceTotal;

// step-7
withdrawFiled.value ="";
})
