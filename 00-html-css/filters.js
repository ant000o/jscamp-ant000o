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



// el filter de abajo es basado en DOM (querySelectorAll + toggle), 
// debido a que el de busqueda es basado en datos, los filter de select tendrán que actualizarse. 

// const filter = document.querySelector('#filter-location')

// filter.addEventListener('change', () => {
//     const jobs = document.querySelectorAll('.job-listing-card');
//     const selectedValue = filter.value;
    
    
//     jobs.forEach(job => {
//         const modalidad = job.dataset.modalidad;
//         // si se usa job.getAttribute('data-modalidad'), obtiene todos los atributos que tiene ese elemento (como class por ejemplo)
        
//         // Manera más sencilla de hacerlo
//         const isShown = selectedValue === '' || selectedValue === modalidad;
//         job.classList.toggle('is-hidden', isShown === false);


//         // Segunda manera de hacerlo
//         // if (selectedValue === '' || selectedValue === location) {
//         //     job.classList.remove('is-hidden');
//         // } else {
//         //     job.classList.add('is-hidden');
//         // }
//     })
// })





// // FILTRO POR UBICACION
// const filter = document.querySelector('#filter-location')
// filter.addEventListener('change', () => {
//     const selectedValue = filter.value;
    
//     const filtered = window.allJobs.filter(job => {
//         const modalidad = job.data.modalidad;
//         return selectedValue === '' || selectedValue === modalidad;
//     })
//     renderJobs(filtered);
// })





// // FILTRO POR EXPERIENCIA
// const filterExpLevel = document.querySelector('#filter-experience-level')
// filterExpLevel.addEventListener('change', () => {
//     const selectedValue = filterExpLevel.value;
    
//     const filtered = window.allJobs.filter(job => {
//         const nivel = job.data.nivel;
//         return selectedValue === '' || selectedValue === nivel;
//     })
//     renderJobs(filtered);
// })








// filtro por tecnologia simple
// const filterTechnology = document.querySelector('#filter-technology')
// filterTechnology.addEventListener('change', () => {
//     const selectedValue = filterTechnology.value;

//     const filtered = window.allJobs.filter(job => {
//         return job.data.technology.includes(selectedValue);
//     })
//     renderJobs(filtered);
// })



// filtro de tecnología *complejo*, usando en el html select multiple, mostramos los trabajos que tengan las tecnologías seleccionadas
// const filterTechnology = document.querySelector('#filter-technology')

// filterTechnology.addEventListener('change', () => {
//     const selectedValue = Array.from(filterTechnology.selectedOptions)
//         .map(option => option.value)
//         .filter(value => value !== '');


//     console.log(selectedValue);

//     const filtered = window.allJobs.filter(job => {

//         let jobTechnologies = job.data.technology

//         if (!Array.isArray(jobTechnologies)) {
//             jobTechnologies = [jobTechnologies]
//         }

//         if (selectedValue.length === 0) {
//             return true
//         }

//         return selectedValue.some(tech =>
//             jobTechnologies.includes(tech)
//         )
//     })

//     renderJobs(filtered);
// })

// Mismo filter de tecnologia, pero usando sintaxis normal de funciones, no arrow functions
// filterTechnology.addEventListener('change', function () {

//     const selectedValue = Array.from(filterTechnology.selectedOptions)
//         .map(function (option) {
//             return option.value;
//         })
//         .filter(function (value) {
//             return value !== '';
//         });

//     console.log(selectedValue);

//     const filtered = window.allJobs.filter(function (job) {

//         let jobTechnologies = job.data.technology;

//         if (!Array.isArray(jobTechnologies)) {
//             jobTechnologies = [jobTechnologies];
//         }

//         if (selectedValue.length === 0) {
//             return true;
//         }

//         return selectedValue.some(function (tech) {
//             return jobTechnologies.includes(tech);
//         });

//     });

//     renderJobs(filtered);
// });



const filtersState = {
    location: '',
    experienceLvl: '',
    technologies: []
}

// ubicacion value
const locationValue = document.querySelector('#filter-location')
locationValue.addEventListener('change', () => {
    filtersState.location = locationValue.value
    applyFilters();
})

// experiencia value
const levelValue = document.querySelector('#filter-experience-level')
levelValue.addEventListener('change', () => {
    filtersState.experienceLvl = levelValue.value
    applyFilters();
})


// tecnologia value
const technologyValue = document.querySelector('#filter-technology')
technologyValue.addEventListener('change', () => {
    filtersState.technologies = Array.from(technologyValue.selectedOptions)
        .map(option => option.value)
        .filter(value => value !== '');

    applyFilters();
})


function applyFilters(){
    const filtered = window.allJobs.filter(job => {
        let modalidad = job.data.modalidad;
        let nivel = job.data.nivel;
        let tecnologias = job.data.technology;

        if (!Array.isArray(tecnologias)) {
            tecnologias = [tecnologias]
        }

        const matchesLocation = filtersState.location === '' || filtersState.location === modalidad;
        const matchesLevel = filtersState.experienceLvl === '' || filtersState.experienceLvl === nivel; 
        const matchesTech = filtersState.technologies.length === 0 || filtersState.technologies.some(tech => tecnologias.includes(tech));

        return matchesLocation && matchesLevel && matchesTech
    })

    renderJobs(filtered);
};








// este filter es basado en datos (filter() + renderJobs)
// filter por input de busqueda titulo
const filterSearch = document.querySelector('#empleos-search-input')

filterSearch.addEventListener('input', () => {
    const busqueda = filterSearch.value.toLowerCase();

    const filtered = window.allJobs.filter(job => {
        return job.titulo.toLowerCase().includes(busqueda);
    })
    renderJobs(filtered);
})
