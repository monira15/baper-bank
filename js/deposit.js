 document.getElementById('deposit-btn').addEventListener('click',function(){
//step-2
    const depositField = document.getElementById('deposit-field');
     
    const depositAmount = depositField.value;
//step-3
const depositTotalElement = document.getElementById('deposit-total');
const depositTotal = depositTotalElement.innerText;
depositTotalElement.innerText=depositAmount;

})
