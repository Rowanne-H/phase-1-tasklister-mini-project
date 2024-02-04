document.addEventListener("DOMContentLoaded", () => {

  // your code here
 const form = document.querySelector('form');
 form.addEventListener('submit', (e)=>{
  e .preventDefault();

  //append list to ul
  const li = document.createElement('li');
  const text = e.target.querySelector('#new-task-description').value;
  li.innerText = ` ${text}  `;

  //create delete button to delete the list
  const button = document.createElement('button');
  button.innerText = 'x';
  button.addEventListener('click', (e)=>{
    e.target.parentNode.remove();
  })
  li.append(button);
  document.querySelector('#tasks').append(li);

  //set default color
  li.style.color = 'green';
  //create color selections
  const select = document.createElement('select');
  select.style.margin = '5px';
  createOption('green');
  createOption('yellow');
  createOption('red');
  function createOption(color) {
    const option = document.createElement('Option');
    option.value = color;
    option.innerText = color;
    select.append(option);
  };

  select.addEventListener('change', (e)=>{
    const color = e.target.value;
    //select color
    e.target.parentNode.style.color = color;
    //select all lists
    list = e.target.parentNode.parentNode.querySelectorAll('li');
    //sort the list
    let i=0;
    while (i<list.length) {
      if (list[i].style.color === 'red') {
        list[i].parentNode.insertBefore(list[i], list[0]);
      }
      if (list[i].style.color === 'green') {
        list[i].parentNode.insertBefore(list[i], list[list.length-1].nextSibling);
      }
      i++;
    }    
  })
  li.append(select);
  

  //additional input field - user
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'user';
  input.id = 'user'
  li.append(input);

  

  //Ability to edit tasks
  const editBtn = document.createElement('button');
  editBtn.innerText = 'edit';
  li.append(editBtn);
  
  editBtn.addEventListener('click', (e)=>{
    let list = e.target.parentNode;
    let userName = list.querySelector('input').value;
    let listText = list.textContent.split(' ')[1];
    list.innerText = listText + ' - edit by ' + userName + ' ';
    list.append(button);
    list.append(select);  
  })
  
 })

});
