const container = document.querySelector('.jobs-listings')

fetch('./data.json') // obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json()
  })
  .then((jobs) => {
    // recorremos los datos y los mostramos en el DOM
    jobs.forEach((job) => {



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



      // *** ESTA MANERA DE ABAJO ES SIN INNER HTML, MÁS SEGURA DE USAR ***

      const article = document.createElement('article')
      article.className = 'job-listing-card'

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
      // ESTOS PELIGROS YA LOS MANEJA REACT, POR LO QUE AL MOMENTO DE PASAR A ESO, YA NO HAY DE QUÉ PREOCUPARSE
    })
  })