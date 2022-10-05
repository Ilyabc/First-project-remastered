const closePop = document.querySelector('.popup__close');
const btnPop = document.querySelector('.hero__buttonorder')
const btnClose = document.querySelector('.button')
const burger = document.querySelector('.burger')
const burgerDiv = document.querySelector('.burgerDiv') 
const burgerClose = document.querySelector('.burger__close')
const text = document.querySelector('.checkbox__text')
btnPop.addEventListener('click', function() {
    popup.style.display = 'block';
})
closePop.addEventListener('click', function() {
    popup.style.display = 'none';
})
btnClose.addEventListener('click', function() {
    if (rules.checked) {
        alert("Запрос успешно отправлен")
        popup.style.display = 'none';
        document.getElementById('comment').value=''
        document.getElementById('mail').value=''
        document.getElementById('tel').value=''
        document.getElementById('name').value=''
    } else { 
        // alert("Cогласись с правилами конфедициальности")
        text.style.color='red'
        text.style.transition='500ms cubic-bezier(0.4, 0, 0.2, 1)';

    }
})
burger.addEventListener('click', function() {
    burgerDiv.style.display = 'block';
})
burgerClose.addEventListener('click', function() {
    burgerDiv.style.display = 'none';
})
// burger1.addEventListener('click', function() {
//     burgerDiv.style.display = 'block';
// })
// burgerClose.addEventListener('click', function() {
//     burgerDiv.style.display = 'none';
// })
// console.log(contacts)
