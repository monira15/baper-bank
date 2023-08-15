document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);
    // step-7
withdrawFiled.value ="";
    if(isNaN(newWithdrawAmount)){
        alert('please provaid a number')
        return;
    }

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString =withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

//    step-5

const BalanceTotalElement =document.getElementById('balance-total');
const previousBalanceTotalElementString =BalanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)


if(newWithdrawAmount>previousBalanceTotal){
    alert('baper bank a ato taka nai')
    return;
}
//    step-4
const currentWithdrawTotal = previouswithdrawTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;
// step-6
const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
BalanceTotalElement.innerText = newBalanceTotal;


})
