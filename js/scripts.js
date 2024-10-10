document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let valid = true;
            let errorMsg = '';

            if (name === '') {
                valid = false;
                errorMsg += 'Name is required.\n';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                valid = false;
                errorMsg += 'Please enter a valid email address.\n';
            }

            if (message.length < 10) {
                valid = false;
                errorMsg += 'Message should be at least 10 characters long.\n';
            }

            if (!valid) {
                alert(errorMsg);
                event.preventDefault();
            }
        });
    }
});
