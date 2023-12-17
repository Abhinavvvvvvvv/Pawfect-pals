function showSignup() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
  }
  
  function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle signup logic here
  });
  
  document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle login logic here
  });
  