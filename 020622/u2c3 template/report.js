// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
let form = document.getElementsByTagName('form')[0];
let body = document.getElementsByTagName('tbody')[0];
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let data = {
    img: document.getElementById('image').value,
    name: document.getElementById('name').value,
    batch: document.getElementById('batch').value,
    dsa: document.getElementById('dsa').value,
    cs: document.getElementById('cs').value,
    coding: document.getElementById('coding').value,
  }
  let tr = document.createElement('tr');
  let img = document.createElement('img');
  let name = document.createElement('td');
  let batch = document.createElement('td');
  let dsa = document.createElement('td');
  let sk = document.createElement('td');
  let cod = document.createElement('td');
  let per = document.createElement('td');
  let sta = document.createElement('td');
  img.src = data.img;
  name.innerText = data.name;
  batch.innerText = data.batch;
  dsa.innerText = data.dsa;
  sk.innerText = data.cs;
  cod.innerText = data.coding;
  let sum = eval(parseInt(data.dsa)+parseInt(data.cs)+parseInt(data.coding));
  sum = (((sum)/30)*100).toFixed(2);
  per.innerText = sum;
  if(sum>50) {
    sta.innerText = 'Regular';
    sta.style.backgroundColor = '#7ef482'
  }
  else {
    sta.innerText = 'Async';
    sta.style.backgroundColor = '#f11e1e'
  }

  let del = document.createElement('td');
  del.innerText = 'Delete';
  del.setAttribute('onclick','deleteRow(this)');
  del.setAttribute('class','delbtn');

  tr.append(img,name,batch,dsa,sk,cod,per,sta,del);
  body.appendChild(tr);
});

function deleteRow(btn) {
  console.log('wokring');
  var row = btn.parentNode;
  row.parentNode.removeChild(row);
}
