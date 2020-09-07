const inputPass = document.querySelector('#password');
      confirmPass = document.querySelector('#confirmPassword');


function checkPass() {
    if (confirmPass.value === inputPass.value) {
        alert('Passwords are the same!');
    } else {
        alert('Passwords are not the same!');
    }
}

confirmPass.addEventListener('keyup', )
