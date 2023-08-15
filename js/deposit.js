 document.getElementById('deposit-btn').addEventListener('click',function(){
//step-2
    const depositField = document.getElementById('deposit-field');
     
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount=parseFloat(NewDepositAmountString);
    
//step-3
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
const currentDepositTotal = previousDepositTotal+NewDepositAmount;

depositTotalElement.innerText=currentDepositTotal;
// setp-7
depositField.value ='';

})
