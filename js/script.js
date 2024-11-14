const previous = document.getElementById("prev-page");
const next = document.getElementById("next-page");
const listaPersonajes = document.getElementById('character-list');
const totalPaginas = 42;
let page1 = 1;
let url = `https://rickandmortyapi.com/api/character/?page=${page1}`;


function proximaPagina() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page1}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La Solicitud Falló");
      }
      return response.json();
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
}

next.addEventListener("click", () => {
  if (page1 < totalPaginas) {
    page1 = page1 + 1; 
    proximaPagina(); 
  }
});

previous.addEventListener("click", () => {
  if (page1 > 1) {
    page1 = page1 - 1; 
    proximaPagina(); 
  }
});
proximaPagina();

