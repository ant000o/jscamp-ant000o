window.allJobs = [];

const container = document.querySelector('.jobs-listings')
const resultsIndicator = document.querySelector('#visual-results')

let currentPage = 1
const RESULTS_PER_PAGE = 3


window.renderJobs = function(jobsArray){
  
  container.innerHTML = ''; // limpiar antes de pintar

  const totalPages = Math.ceil(jobsArray.length / RESULTS_PER_PAGE)
  // Si tienes 20 ofertas y 3 por página: Math.ceil(20/3) = 7 páginas

  
  
  if (totalPages === 0) {
    currentPage = 1;
  }
  
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE
  const endIndex = startIndex + RESULTS_PER_PAGE
  
  
  const paginationContainer = document.querySelector('.pagination')
  
  if (jobsArray.length === 0) {
    resultsIndicator.textContent = 'No se encontraron resultados';
    paginationContainer.innerHTML = '';
    return;
  }
  // Limpiar la paginación existente
  paginationContainer.innerHTML = ''

  const chevronLeft = document.createElement('a')
  chevronLeft.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline 
  icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" />
  </svg>
  `;
  
  chevronLeft.classList.add('page-button')

  
  paginationContainer.appendChild(chevronLeft)
  
  if(currentPage === 1){
    chevronLeft.classList.remove('page-button')
    chevronLeft.classList.add('is-hidden')
  }

  chevronLeft.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderJobs(jobsArray);
  }
});



  // Crear un botón por cada página
  for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button')
  button.textContent = i
  button.className = 'page-button'

  button.addEventListener('click', () => {
    currentPage = i
    renderJobs(jobsArray)
  })

  // Si es la página actual, añadir clase activa
  if (i === currentPage) {
    button.classList.add('is-active')
  }

  paginationContainer.appendChild(button)

}

  const chevronRight = document.createElement('a')
  chevronRight.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline 
  icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" />
  </svg>
  `;
  
  chevronRight.classList.add('page-button')

  
  paginationContainer.appendChild(chevronRight)
  
  if(currentPage === totalPages){
    chevronRight.classList.remove('page-button')
    chevronRight.classList.add('is-hidden')
  }
  
  chevronRight.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderJobs(jobsArray);
  }
});


  const jobsToRender = jobsArray.slice(startIndex, endIndex)
  // Página 1: slice(0, 3) → ofertas 0, 1, 2
  // Página 2: slice(3, 6) → ofertas 3, 4, 5

  resultsIndicator.textContent = `Mostrando ${jobsToRender.length} de ${jobsArray.length} empleos`

  
  jobsToRender.forEach((job) => {
    // *** ESTA MANERA DE ABAJO ES SIN INNER HTML, MÁS SEGURA DE USAR ***
    const article = document.createElement('article')
    article.className = 'job-listing-card'
    
    article.dataset.id = job.id;
    article.dataset.modalidad = job.data.modalidad
    article.dataset.nivel = job.data.nivel
    article.dataset.technology = job.data.technology
    
    const wrapper = document.createElement('div')
    
    const title = document.createElement('h3')
    title.className = 'job-listing-card-title'
    title.textContent = `${job.titulo}`
    
    const meta = document.createElement('small')
    meta.textContent = `${job.empresa} | ${job.ubicacion}`
    
    const description = document.createElement('p')
    description.textContent = `${job.descripcion}`
    
    const button = document.createElement('button')
    button.className = 'button-apply-job'
    button.textContent = 'Aplicar'
    
    wrapper.append(title, meta, description)
    article.append(wrapper, button)
    container.appendChild(article)
  })

}


fetch('./data.json') // obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json()
  })
  .then((jobs) => {
    // guardamos los datos originales
    window.allJobs = jobs;

    // pintamos todo por primera vez
    renderJobs(window.allJobs);
  })



  // *** ESTA MANERA DE ABAJO ES CON INNER HTML, NO ES SEGURA DE USAR, PELIGRO DE CSS INJECTION ***

  // // creamos un elemento HTML <article> para cada trabajo
  // const article = document.createElement('article')
  // // añadimos la clase job-listing-card al elemento
  // article.className = 'job-listing-card'
  // // añadimos los datos al elemento
  // article.dataset.modalidad = job.data.modalidad
  // article.dataset.nivel = job.data.nivel
  // article.dataset.technology = job.data.technology

  // // añadimos el contenido HTML al elemento
  // article.innerHTML = `<div>
  //     <h3>${job.titulo}</h3>
  //     <small>${job.empresa} | ${job.ubicacion}</small>
  //     <p>${job.descripcion}</p>
  //   </div>
  //   <button class="button-apply-job">Aplicar</button>`

  // // añadimos el elemento al contenedor
  // container.appendChild(article)



  // ESTOS PELIGROS YA LOS MANEJA REACT, POR LO QUE AL MOMENTO DE PASAR A ESO, YA NO HAY DE QUÉ PREOCUPARSE