//!Función fondo de pantalla aleatoria

const randomBackground = () => {
    const background = () => {
        const randomNumber = Math.floor(Math.random() * 15) + 1;
        console.log(randomNumber);
        document.body.style.backgroundImage = `url(./assets/img/${randomNumber}.jpg)`; 
    }
    setInterval(background, 15000);
}

randomBackground();