const params = new URLSearchParams(window.location.search);
const jobId = params.get('id');

fetch('./data.json')
  .then(res => res.json())
  .then(jobs => {
    const job = jobs.find(j => j.id == jobId);

    if (!job) return;

    // aquí rellenamos el HTML

    const breadcrumb = document.querySelector('.breadcrumb a:nth-of-type(2)');
    breadcrumb.textContent = job.titulo;

    const title = document.querySelector('.job-detail-header h2');
    title.textContent = job.titulo;
    
    const address = document.querySelector('.job-detail-header address');
    address.textContent = `${job.empresa} | ${job.ubicacion}`;
    
    const description = document.querySelector('.job-detail section p');
    description.textContent = job.descripcion;
  });

