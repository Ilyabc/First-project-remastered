let father = document.querySelector('.employees')
let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')
let name3 = document.getElementById('name3')
let name4 = document.getElementById('name4')

let test
async function data (){
        const response = await fetch("https://fakestoreapi.com/users?limit=10")
        test = await response.json()
        userName1 = test[0].name.firstname
        lastName1 = test[0].name.lastname
        userName2 = test[9].name.firstname
        lastName2 = test[9].name.lastname
        userName3 = test[1].name.firstname
        lastName3 = test[1].name.lastname
        userName4 = test[2].name.firstname
        lastName4 = test[2].name.lastname
        father.classList.add('nameh1');
        
        name1.insertAdjacentHTML('afterend', `${userName1} ${lastName1}`  )
        name2.insertAdjacentHTML('afterend', `${userName2} ${lastName2}`  )
        name3.insertAdjacentHTML('afterend', `${userName3} ${lastName3}`  )
        name4.insertAdjacentHTML('afterend', `${userName4} ${lastName4}`  )        
    }
  data()
  



