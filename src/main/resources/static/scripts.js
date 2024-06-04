document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const message = await response.text();
        alert(message);
        signupForm.querySelectorAll('input[type="email"], input[type="password"]').forEach(input => input.value = '');
        document.getElementById('signup-message').textContent = '';
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

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
        } else {
            alert('Login failed')
            document.getElementById('login-message').textContent = 'Login failed!';
        }
    });
});
