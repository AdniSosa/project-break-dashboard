//1- Crear función para obtener hora y fecha actual.
    //Usar setInterval para que la hora se actualice cada segundo.
    //Incluir 0 delante de hora de 1 dígito --> 1 - 9
    // Personalizar mensaje dependiendo del tramo de hora con condicionales:
//     - Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
//     - Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
//     - Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
//     - Desde las 14:01 hasta las 16:00 Espero que hayas comido
//     - Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
//     - Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
//     - Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar   
//2- Crear función para mostrar imágenes random de fondo.
    //Usar Math.random() para la aleatoriedad.
    //URL https://unsplash.com/es
    //Mínimo 10 imágenes y cambiar cada 15s con setInterval.
    //document.body.style.backgroundImage = "url('mi-imagen.jpg')"`

const clockDiv = document.getElementById('clock-div');

//!Función para obtener la fecha
const getDate = () => {
    const date = document.createElement('h2');

    let today = new Date();
    
    const [month, day, year] = [
        today.getMonth(),
        today.getDate(),
        today.getFullYear(),
    ];

      /* console.log(month);
      console.log(day);
      console.log(year); */

    date.innerHTML = `
      ${day}/${month + 1}/${year}
      `
    clockDiv.appendChild(date);

}

//!Función para obtener la hora
const getTime = () => {
    const time = document.createElement('h1');
    clockDiv.appendChild(time);

    const phrase = document.createElement('h3');
    clockDiv.appendChild(phrase);
    
    const actualHour = () => {
        const now = new Date();
        let [hour, minutes, seconds] = [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds(),
        ];

        /* console.log(hour);
        console.log(minutes);
        console.log(seconds); */


        //!Formateo de hora para que salga siempre con dígitos
        
        str_segundo = new String (seconds)
        if (str_segundo.length == 1)
            seconds = "0" + seconds

        str_minuto = new String (minutes)
        if (str_minuto.length == 1)
            minutes = "0" + minutes

        str_hora = new String (hour)
        if (str_hora.length == 1)
            hour = "0" + hour

        time.innerHTML = `${hour}:${minutes}:${seconds}`
      
        //!Frase dependiendo de la hora del día
        if(hour >=  22 && minutes >= 1) {
            phrase.textContent = 'Buenas noches, es hora de pensar en parar y descansar';
        } else if(hour >= 18 && minutes >= 1) {
            phrase.textContent = 'Esto ya son horas extras, ... piensa en parar pronto';
        } else if(hour >= 16 && minutes >= 1) {
            phrase.textContent = 'Buenas tardes, el último empujón';
        } else if(hour >= 14 && minutes >= 1) {
            phrase.textContent = 'Espero que hayas comido';
        } else if(hour >= 12 && minutes >= 1) {
            phrase.textContent = 'Echa un rato más pero no olvides comer';
        } else if(hour >= 7 && minutes >= 1) {
            phrase.textContent = 'Buenos días, desayuna fuerte y a darle al código';
        } else {
            phrase.textContent = 'Es hora de descansar. Apaga y sigue mañana';
        }
    }
    
    actualHour();
    setInterval(actualHour, 1000);
    
}

//!Función fondo de pantalla aleatoria

const randomBackground = () => {
    const background = () => {
        const randomNumber = Math.floor(Math.random() * 15) + 1;
        console.log(randomNumber);
        document.body.style.backgroundImage = `url(./assets/img/${randomNumber}.jpg)`; 
    }
    setInterval(background, 15000);
}

getTime();
getDate();
randomBackground();