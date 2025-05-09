const menuBurger = document.querySelector('.menu-btn');
menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('active');
    let headerMeny = document.querySelector('.header-menu');
    headerMeny.classList.toggle('open');
})





const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const valid = document.querySelector('.validators');
    let newElem = document.createElement('p');
    const mail = document.querySelector('#emails').value;
    let isValidMail = pattern.test(mail);
    if(!isValidMail){
        newElem.textContent = 'Неверный email';
    }
    if(mail.trim() === ''){
        newElem.textContent = 'Поле не может быть пустым';
    }
    newElem.classList.add('validator');
    valid.appendChild(newElem);
})