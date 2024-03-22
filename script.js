document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('user.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            
            // Find the user in the data array
            const user = userData.find(user => user.username === username && user.password === password);
            if (user) {
                document.getElementById('message').innerHTML = 'Login successful!';
                window.location.href = 'main.html';
            } else {
                document.getElementById('message').innerHTML = 'Login failed: Incorrect username or password.';
            }
        })
        .catch(error => {
            console.error('Error loading user data:', error);
            document.getElementById('message').innerHTML = 'Error loading user data. Please try again later.';
        });
});
