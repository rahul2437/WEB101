let form = document.querySelector('form');

let submit = document.querySelector('#submit');
let login = document.querySelector('#login');

submit.addEventListener('click',(e)=>{
  e.preventDefault();
  saveData();
});
login.addEventListener('click',(e)=>{
  e.preventDefault();
  loginUser();
});

let userData = JSON.parse(localStorage.getItem('userDataArr')) || [];
// console.log(userData);

function saveData(){
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  if(name == null || name == '') alert('Enter Name');
  else if(email == null || email == '') alert('Enter Email');
  else if(password == null || password == '') alert('Enter Password');
  else{
    let user = {
      name: name,
      email: email,
      password:password
    }
    userData.push(user);
    localStorage.setItem('userDataArr',JSON.stringify(userData));
  }
}

function loginUser(){
  console.log('working');
  let email = document.querySelector('#lemail').value;
  let password = document.querySelector('#lpassword').value;
  if(email == null || email == '') alert('Enter Email');
  else if(password == null || password == '') alert('Enter Password');
  else{
    console.log(email,password);
    for(x in userData){
      console.log(x);
      if(email == x.email && password == x.password) alert('Logged in');
      else alert('Enter correct details');
    }
  }
}