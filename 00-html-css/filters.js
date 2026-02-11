// filtro de ubicacion
// const filterLocation = document.getElementById('filter-location')
// const filterExpLevel = document.getElementById('filter-experience-level')
// const filterTechnology = document.getElementById('filter-technology')
// const jobs = document.querySelectorAll('.job-listing-card');

// filterLocation.addEventListener('change', () => {
//     const selectedLocation = filterLocation.value;
//     jobs.forEach(card => {
//         const location = card.dataset.location;    
//         if(selectedLocation === '' || selectedLocation === location) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     })
// })


const filter = document.querySelector('#filter-location')

filter.addEventListener('change', () => {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = filter.value;
    
    
    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad;
        // si se usa job.getAttribute('data-modalidad'), obtiene todos los atributos que tiene ese elemento (como class por ejemplo)
        
        // Manera más sencilla de hacerlo
        const isShown = selectedValue === '' || selectedValue === modalidad;
        job.classList.toggle('is-hidden', isShown === false);


        // Segunda manera de hacerlo
        // if (selectedValue === '' || selectedValue === location) {
        //     job.classList.remove('is-hidden');
        // } else {
        //     job.classList.add('is-hidden');
        // }
    })
})



// filter por input de busqueda titulo
const filterSearch = document.querySelector('#empleos-search-input')

let allJobs = [];


filterSearch.addEventListener('input', () => {
    const busqueda = filterSearch.value.toLowerCase();
    
    const jobs = document.querySelectorAll('.job-listing-card');
    
    jobs.forEach(job => {
        allJobs = jobs

        function renderJobs() {
            
        }


        const title = job.querySelector('.job-listing-card-title').textContent.toLowerCase();
    })
})














































const filterExpLevel = document.querySelector('#filter-experience-level')

filterExpLevel.addEventListener('change', () => {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = filterExpLevel.value;
    
    
    jobs.forEach(job => {
        const nivel = job.dataset.nivel;
        
        const isShown = selectedValue === '' || selectedValue === nivel;
        job.classList.toggle('is-hidden', isShown === false);
    })
})