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
    
    const button = document.getElementById('submit').addEventListener('click', validateName())
	
    function validateName() {

        let pass = document.getElementById('name').value;
        
    if (typeof pass !== 'string') {
        alert('Error in validating Name')
        return false
    }
    if (pass.length < 2) {
        alert('Name must have at least 2 characters') 
        return false
    }
    if (pass.length > 12) {
        alert('Name must have less than 12 characters')
        return false
    }
    if (pass.search(/[0123456789]/) !== -1) {
        alert('Name may not contain numbers')
        return false
    }
    if (pass.search(/[A-Z]/) === -1) {
        alert('Name must contain at least one upper case letter')
        return false
    }
    if (pass.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) !== -1) {
        alert('Name may not contain symbols')
        return false
    }
    if (pass.search(/\s/) !== -1) {
        alert('Name may not contain spaces')
        return false
    } 
        
}

    if (rules.checked) {
        alert("Запрос успешно отправлен")
        popup.style.display = 'none';
        document.getElementById('comment').value=''
        document.getElementById('mail').value=''
        document.getElementById('tel').value=''
        document.getElementById('name').value=''
        text.style.color='#757575'
        text.style.transition='none';
        rules.checked = false
        // typeof(validateName)
    } else { 
        text.style.color='red'
        text.style.transition='500ms cubic-bezier(0.4, 0, 0.2, 1)';

    }})

burger.addEventListener('click', function() {
    burgerDiv.style.display = 'block';
})
burgerClose.addEventListener('click', function() {
    burgerDiv.style.display = 'none';
})
