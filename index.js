var form = document.getElementById('add-todo');
var textInput = document.querySelector('input[type="text"]');
var list = document.getElementById('todo-list');

form.onsubmit = function(e) {
  e.preventDefault()
  var listItem = textInput.value.trim()
  
  if(!listItem) return
  textInput.value = ""
  
  var li = document.createElement('li')
  var button = document.createElement('button')
  li.appendChild(button)
  button.textContent = listItem
  button.onclick = handleClick
  list.appendChild(li)
}

function handleClick(e) {
  if(getComputedStyle(e.target).textDecoration.includes('line-through')){
    e.target.parentElement.remove()
  } else {
    e.target.style.textDecoration = "line-through"
  }
}
