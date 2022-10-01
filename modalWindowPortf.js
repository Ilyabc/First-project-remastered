const burger = document.querySelector('.burger')
const burgerDiv = document.querySelector('.burgerDiv') 
const burgerClose = document.querySelector(".burger__close")
const projects = document.querySelector('.projects')
const email = document.querySelector('.footer-emailarea')

burger.addEventListener('click', function() {
    burgerDiv.style.display = 'block';
	projects.style.display='none';
	email.style.display='none';
})
burgerClose.addEventListener('click', function() {
    burgerDiv.style.display = 'none';
	projects.style.display='block';
	email.style.display='block';
})