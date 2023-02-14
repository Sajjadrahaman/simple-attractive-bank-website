// Step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Get the email address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: Get Password inside the password field
    /* 
     3.1:: Set id on the html element
     3.2:: Get the element
     3.3:: get the value from the element
    */
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
    // Danger:: Don't verify email && password on the client side also like this
    // Step-4: verify email and password for validation
    if(email === 'baapEr@bank.com' && password === 'AmiTorPichone123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }

    })
