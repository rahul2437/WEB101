let form = document.querySelector('form');

let queArr = JSON.parse(localStorage.getItem('queArr')) || [];
addData(queArr);

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let queObj = {
    title: document.getElementById('title').value,
    link: document.getElementById('link').value,
    diff: document.getElementById('difficulty').value
  };
  console.log(queObj);
  queArr.push(queObj);
  localStorage.setItem('queArr' , JSON.stringify(queArr));
  addData(JSON.parse(localStorage.getItem('queArr')));
});



function addData(queArr){

  let tbody = document.querySelector('tbody');
  queArr.forEach((e,i) => {
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let del = document.createElement('button');
    td1.innerText = e.title;
    td2.innerHTML = `<a href="${e.link}">GoTo Problem</a>`;
    td3.innerText = e.diff;
    if(e.diff == 'Easy') td4.innerText = 'No';
    else td4.innerText = 'Yes'
    del.setAttribute('onclick','deleteRow(this)');
    del.setAttribute('class','delbtn');
    del.innerText = 'Delete'
    td5.append(del);
    row.append(td1,td2,td3,td4,td5);
    tbody.append(row);
  });
}

function deleteRow(btn,i) {
  console.log(btn);
  // queArr.splice(0, 1);
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}