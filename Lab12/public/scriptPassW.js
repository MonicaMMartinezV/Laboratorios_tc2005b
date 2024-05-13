function changeHelpText(elementId, newText) {
    document.getElementById(elementId).textContent = newText;
}

document.getElementById('password').addEventListener('mouseover', function() {
    changeHelpText('passwordHelp', 'Ingrese una contraseña segura. Debe contener al menos 8 caracteres.');
});

document.getElementById('password').addEventListener('mouseout', function() {
    changeHelpText('passwordHelp', '');
});

document.getElementById('confirmPassword').addEventListener('mouseover', function() {
    changeHelpText('confirmPasswordHelp', 'Por favor, confirme su contraseña.');
});

document.getElementById('confirmPassword').addEventListener('mouseout', function() {
    changeHelpText('confirmPasswordHelp', '');
});
