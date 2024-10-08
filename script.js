document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle login logic here
    alert('Logged in successfully!');
    window.location.href = 'dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle signup logic here
    alert('Account created successfully!');
    window.location.href = 'index.html';
});
