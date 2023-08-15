 document.getElementById('deposit-btn').addEventListener('click',function(){
//step-2
    const depositField = document.getElementById('deposit-field');
     
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount=parseFloat(NewDepositAmountString);
    
//step-3
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-4:
const currentDepositTotal = previousDepositTotal + NewDepositAmount;

depositTotalElement.innerText=currentDepositTotal;

// step-5:get balance 
const BalanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalElementString =BalanceTotalElement.innerText;
const previousBalanceTotal= parseFloat(previousBalanceTotalElementString);

// step-6
const currentBalanceTotal=previousBalanceTotal + NewDepositAmount;
// set the balance total
BalanceTotalElement.innerText =currentBalanceTotal;
// setp-7
depositField.value ='';

})
