const ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href').slice(1);
  // const element = document.getElementById(id);
  const element = document.querySelector('#' + id);
  const position = element.offsetTop;
  console.log(position);

  window.scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth',
  })
});

/*
Uwagi:

1. href to pełna ścieżka do pliku: href: "http://127.0.0.1:5500/index.html#header" czyli: <a href="#header">Header</a>
2. slice(1) czyli #header -> header - od idx wynij wszystko i zapisz jako id;

*/