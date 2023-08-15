 document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('input-email');
  const email = emailField.value;
     const passwordField = document.getElementById('input-password');
    const password = passwordField.value;
      if(email === 'monira@gmail.com' && password ==='moneAche@15'){
          window.location.href = 'bank.html';
      }else{
          alert('error password')
      }
   
 })
