function login() {
    // Obtener los datos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales contra OneDrive (simulado en este ejemplo)
    if (username === 'usuario' && password === 'contraseña') {
        // Redirigir a Visual Studio Code
        window.location.href = 'https://code.visualstudio.com/';
    } else {
        alert('Credenciales incorrectas');
    }
}