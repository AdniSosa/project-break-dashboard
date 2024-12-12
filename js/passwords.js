
//1-Crear input para elegir caracteres: entre 12 y 50
//2-Crear botón para generar la contraseña
//3-Crear función que genere contraseña.
    //Usar Math.random();
    //Usar un bucle para recorrer las variables.

const passwordDiv = document.getElementById('password-div');
const input = document.getElementById('character-number');
const button = document.getElementById('passwordBtn');
const resultDiv = document.getElementById('result-div');

//!Función para generar contraseña
const randomPassword = (numeroCaracteres) => {
    resultDiv.innerHTML = '';
    let result = '';

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //Con .split los convierto a array y así hacer loop.
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '0123456789'.split('');
    const symbols = '!@#$%^&*()-_=+'.split('');
    
    for (let i = 0; i <= numeroCaracteres; i++) {

        const randomCharacter = Math.floor(Math.random() * 4); //Número aleatorio para elegir un tipo de caracter aleatorio.
        const randomLetter = Math.floor(Math.random() * uppercaseLetters.length); // Math.random para las letras ya que tienen el mismo length.
        const randomNumber = Math.floor(Math.random() * numbers.length);
        const randomSymbol = Math.floor(Math.random() * symbols.length);

        if(randomCharacter == 1) {
            result += uppercaseLetters[randomLetter];
        } else if(randomCharacter == 2) {
            result += lowercaseLetters[randomLetter];
        } else if(randomCharacter == 3) {
            result += numbers[randomNumber];
        } else {
            result += symbols[randomSymbol];
        }
        
    }

    const password = document.createElement('h2');
    password.textContent = result;

    resultDiv.appendChild(password);
}

//!Obtener número de caracteres de la contraseña a generar
button.addEventListener('click', () => {
    const inputValue = input.value;
    console.log(inputValue);
    randomPassword(inputValue);
})

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        const inputValue = input.value;
        console.log(inputValue);
        randomPassword(inputValue);
    }
})
    