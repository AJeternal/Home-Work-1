function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' && password === '') {
      alert('Username and Password should be filled!');
    } else if (username !== 'username' && password !== 'password') {
      alert('Username and Password are not correct, Please try again!');
    } else {
      alert('Login Successful');
    }
  }
  