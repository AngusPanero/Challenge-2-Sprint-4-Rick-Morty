let listaPersonajes = document.getElementById('character-list');
let url = `'https://rickandmortyapi.com/api/character/?page=1'`
const previous = document.getElementById("prev-page");
const next = document.getElementById("next-page");
let totalPaginas = 42;
let page1 = 1 ;


fetch ("https://rickandmortyapi.com/api/character/?page=1")
  .then ((response) => {
        if(!response.ok){
        throw new Error ("La Solicitud Falló")
    }
    return response.json()
  })
  .then(data => {
    listaPersonajes.innerHTML = "";
    data.results.forEach(character => {
      listaPersonajes.innerHTML += 
      `<li>
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
          <p>${character.species}</p>
        </li>`;
    });
  })
  .catch((error) => {
    listaPersonajes.innerHTML = "<p>Hubo un error al cargar los personajes</p>";
  });