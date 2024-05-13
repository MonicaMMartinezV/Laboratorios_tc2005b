const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordStrengthDiv = document.getElementById('passwordStrength');
const strengthIndicator = document.getElementById('strengthIndicator');
const submitButton = document.getElementById('submitButton');

function checkPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        passwordStrengthDiv.textContent = "Las contraseñas no coinciden!";
        submitButton.disabled = true;
        return;
    }

    const strength = calculatePasswordStrength(password);
    displayPasswordStrength(strength);
    if (strength !== 'Débil') {
        passwordStrengthDiv.textContent = "Strength: " + strength;
        passwordStrengthDiv.style.color = 'green';
        submitButton.disabled = false;
    } else {
        passwordStrengthDiv.textContent = '';
        submitButton.disabled = true;
    }
}

function calculatePasswordStrength(password) {
    if (password.length < 8) {
        return 'Débil';
    } else if (password.length < 12) {
        return 'Moderada';
    } else {
        return 'Fuerte';
    }
}

function displayPasswordStrength(strength) {
    if (strength === 'Débil') {
        strengthIndicator.innerHTML = '<div style="background-color: red; width: 33%;"></div>';
    } else if (strength === 'Moderada') {
        strengthIndicator.innerHTML = '<div style="background-color: orange; width: 66%;"></div>';
    } else {
        strengthIndicator.innerHTML = '<div style="background-color: green; width: 100%;"></div>';
    }
}

passwordInput.addEventListener('input', checkPassword);
confirmPasswordInput.addEventListener('input', checkPassword);
