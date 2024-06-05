document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

            try {
                const response = await fetch('http://localhost:8080/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const message = await response.text();
                alert(message);
                if (response.ok) {
                    signupForm.querySelectorAll('input[type="email"], input[type="password"]').forEach(input => input.value = '');
                    document.getElementById('signup-message').textContent = '';
                    window.location.href = 'login.html';
                } else {
                    document.getElementById('signup-message').textContent = message;
                    document.getElementById('signup-message').style.color = 'red';
                }
            } catch (error) {
                console.error('Error during signup:', error);
                alert('Signup failed');
            }
        });
    }
    if(loginForm){
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

            try {
                const response = await fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    alert('Login successful!');
                    document.getElementById('login-message').textContent = 'Login successful!';
                    document.getElementById('login-message').style.color = 'green';
                    loginForm.querySelectorAll('input[type="email"], input[type="password"]').forEach(input => input.value = '');
                    window.location.href = 'home.html';
                } else {
                    const message = await response.text();
                    alert('Login failed');
                    document.getElementById('login-message').textContent = 'Login failed!';
                    document.getElementById('login-message').style.color = 'red';
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed');
                document.getElementById('login-message').textContent = 'Login failed!';
                document.getElementById('login-message').style.color = 'red';
            }
        });
    }
});
