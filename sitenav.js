const filterBox = document.querySelectorAll('.projects__item');
const div = document.querySelectorAll('.kolya')

document.querySelector('nav').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];


    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass!== 'all'){
            elem.classList.add('hide');
			// div.style.display='none'
        } else {
            return elem
        }
  

    });
    
});

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  