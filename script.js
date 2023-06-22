const menu = document.querySelector('.menu');

menu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'A') {
    event.preventDefault();
  }

  if (target.nextElementSibling && target.nextElementSibling.tagName === 'UL') {
    target.parentElement.classList.toggle('active');
    target.nextElementSibling.classList.toggle('active');
  }
});