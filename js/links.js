//1-Crear input para nombrar el enlace
//2-Crear input para registrar el enlace.
//3-Crear botón de agregar enlace
//4-Crear botón de eliminar cada enlace.
//5-Crear función para almacenar la info del input y el nombre en el DOM y localStorage.

const linkName = document.getElementById('link-name'),
urlInput = document.getElementById('link'),
addLinkBtn = document.getElementById('linkBtn'),
linksDiv = document.getElementById('resultdiv'),
linksList = document.getElementById('links-list');

//localStorage.clear();
//console.log(localStorage);
let linksArray = JSON.parse(localStorage.getItem("Links")) || [];

//!Función para borrar enlace 
const deleteLink = () => {
    const deleteLinkBtn = document.querySelectorAll('.delete-link-btn'); 
    deleteLinkBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            let linkIndex = e.target.dataset.index;
            console.log(e.target.dataset.index);
            linksArray.splice(linkIndex, 1);
            localStorage.setItem("Links", JSON.stringify(linksArray));
            location.reload();
        })
    })
                
}


//!Obtengo datos de los inputs
addLinkBtn.addEventListener('click', () => {
    let urlName = linkName.value;
    let url = urlInput.value;
   
    //console.log(urlName, url);
    if(!urlName || !url) {
        linksList.innerHTML = '<li>¡Debes agregar un nombre de enlace y una URL!</li>'
    } else if (urlName.length !== 0 && url.length !== 0) {
        linksList.innerHTML += `
        <li>
            <h2>${urlName}</h2>
            <p>${url}</p>
            <button class="delete-link-btn">Eliminar</button>
        </li>
        `   
        addFavoriteLinks(urlName, url);
       
        linkName.value = '';
        urlInput.value = '';

        deleteLink();
    }
      
});


 //!Función para guardar enlaces en el localStorage
 const addFavoriteLinks = (linkName, url) => {

    let favoriteLinks = {
        name: `${linkName}`,
        url
    }

    linksArray.push(favoriteLinks);
    localStorage.setItem("Links", JSON.stringify(linksArray));
} 

//!Obtengo enlaces ya guardados
const getFavoriteLinks = () => {
        
    linksArray.forEach((link, index) => {
        linksList.innerHTML += `
        <li>
            <h2>${link.name}</h2>
            <p>${link.url}</p>
            <button class="delete-link-btn" data-index=${index}>Eliminar</button>
        </li>
        `          
        deleteLink();
    })
}
getFavoriteLinks();

//!Función fondo de pantalla aleatoria
const randomBackground = () => {
    const background = () => {
        const randomNumber = Math.floor(Math.random() * 15) + 1;
        //console.log(randomNumber);
        document.body.style.backgroundImage = `url(./assets/img/${randomNumber}.jpg)`; 
    }
    setInterval(background, 15000);
}


randomBackground();