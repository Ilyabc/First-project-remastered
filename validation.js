// const input = document.getElementById('name')

// let valueIn = input.value



const button = document.getElementById('submit').addEventListener('click', ()=> {
	let pass = document.getElementById('name').value;
	pass = pass.trim();
	console.log(validateName(pass));
})



function validateName(str) {
    if (typeof str !== 'string') {
        [false, alert('Error in validating Name')];
    }
    if (str.length < 2) {
        [false, alert('Name must have at least 2 characters')];
    }
	if (str.length > 12) {
        [false, alert('Name must have less than 12 characters')];
    }
	if (str.search(/[0123456789]/) !== -1) {
        [false, alert('Name may not contain numbers')];
    }
    if (str.search(/[A-Z]/) === -1) {
        [false, alert('Name must contain at least one upper case letter')];
    }
	if (str.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) !== -1) {
        [false, alert('Name may not contain symbols')];
    }
    if (str.search(/\s/) !== -1) {
        [false, alert('Name may not contain spaces')];
    }
    return [true];
}
