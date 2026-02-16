// otras formas de añadir eventos click a un elemento

// // Recuperamos el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job'); 
// // null si no lo encuentra
// console.log(boton); 

// // Recuperamos todos los botones
// const botones = document.querySelectorAll('.button-apply-job');  
// // Devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno


// botones.forEach(boton => {
//     boton.addEventListener('click', () => {
//         boton.textContent = '¡Aplicado!';
//         boton.classList.add('is-applied');
//         boton.disabled = true;
//     })
// })

const jobsListingSection = document.querySelector('.jobs-listings');

// jobsListingSection.addEventListener('click', (event) => {
//     const element = event.target;
//     if (element.classList.contains('button-apply-job')) {
//         // console.log('es el boton')
//         // element.textContent = '¡Aplicado!';
//         // element.classList.add('is-applied');
//         // element.disabled = true;
//         window.location.href = './detalle-empleo.html';
//     }
// })


jobsListingSection.addEventListener('click', (event) => {
  const button = event.target.closest('.button-apply-job');
  
  if (!button) return;

  const article = button.closest('.job-listing-card');
  const jobId = article.dataset.id;

  window.location.href = `./detalle-empleo.html?id=${jobId}`;
});



// ejemplos de eventos

// // input evento
// const searchInput = document.querySelector('#empleos-search-input');
// searchInput.addEventListener('input', () => {
//     console.log(searchInput.value);
//     // se dispara cuando el campo cambia
// })
// // blur
// searchInput.addEventListener('blur', () => {
//     console.log('se dispara cuando el campo pierde el foco');
// })


// // form submit
// const searchForm = document.querySelector('#empleos-search-form');

// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // que no haga el comportamiento por defecto
//     // haz todo lo que yo ponga aqui
//     console.log('submit');
// })



// document.addEventListener('keydown', (event) => {
//     console.log('tecla presionada: ',event.key);
//     console.log('esta presionada la tecla shift: ',event.shiftKey);
// })