const signInButton = document.getElementById("signIn");
        const signUpButton = document.getElementById("signUp");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {
            container.classList.add("active");
        });

        signInButton.addEventListener("click", () => {
            container.classList.remove("active");
        });

        function checkPasswordStrength() {
            const password = document.getElementById('password').value;
            const strengthBar = document.getElementById('passwordStrengthBar');
            const strengthText = document.getElementById('passwordStrengthText');
            const strength = calculatePasswordStrength(password);

            if (strength === 'weak') {
                strengthBar.style.width = '33%';
                strengthBar.style.backgroundColor = 'red';
                strengthText.textContent = 'Baja';
            } else if (strength === 'medium') {
                strengthBar.style.width = '66%';
                strengthBar.style.backgroundColor = 'yellow';
                strengthText.textContent = 'Media';
            } else if (strength === 'strong') {
                strengthBar.style.width = '100%';
                strengthBar.style.backgroundColor = 'green';
                strengthText.textContent = 'Alta';
            } else {
                strengthBar.style.width = '0';
                strengthText.textContent = '';
            }
        }

        function calculatePasswordStrength(password) {
            let strength = 0;
            if (password.length >= 8) strength++;
            if (password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[!@#\$%\^&\*\(\)_\+]/)) strength++;
            
            if (strength <= 1) return 'weak';
            if (strength === 2) return 'medium';
            return 'strong';
        }

        function validateLogin(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('passwordLogin').value;
            const errorMessage = document.getElementById('errorMessage');

            if ((email === 'Luis' || email === 'Luis@gmail.com') && password === '12345') {
                errorMessage.style.display = 'none';
                window.location.href = "Practica.html";
            } else {
                errorMessage.style.display = 'block';
            }
        }

        function validateRegister(event) {
            event.preventDefault();
            const registerSuccess = document.getElementById('registerSuccess');

            registerSuccess.style.display = 'block';
            setTimeout(() => {
                registerSuccess.style.display = 'none';
            }, 3000);
        }