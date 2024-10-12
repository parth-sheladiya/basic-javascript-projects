
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', function(){
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    
    const li = document.createElement('li');
    li.className = 'todo-item';
    todoList.appendChild(li);

    
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todoText;
    li.appendChild(span);

    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);
    todoInput.value = '';
});

todoList.addEventListener('click', function(e){
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        todoList.removeChild(li);
    }
});


