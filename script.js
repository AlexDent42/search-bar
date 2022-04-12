const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');

icon.addEventListener('click', function(){
    search.classList.toggle('active');
})

clear.addEventListener('click', function(){
    search.classList.toggle('active');
})