const btn = document.querySelector('.target');
const main = document.querySelector('main');
const pop = document.querySelector('.popup');
const cross = document.querySelector('.cross'); 
btn.addEventListener('click',()=>{
    pop.classList.add('active');
    main.style.filter = 'blur(10px)';
})

cross.addEventListener('click',()=>{
    pop.classList.remove('active');
    main.style.filter = 'blur(0px)';
})
