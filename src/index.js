import {
  tasks, tasksList, addTaskField, removeTask, removeAllCompleted, addTask,
} from './modules/CRUD.js';
import './index.css';

const populateTasks = async () => {
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksList.innerHTML += `<li class="task-item task-item${tasks[i].index}">
        <div class="task-info"><input type="checkbox" name=""><input class="task task${tasks[i].index}" type="text" placeholder="${tasks[i].description}"></div>
        <div class="dots">
          <i class="fa fa-ellipsis-v remove" aria-hidden="true" id="i${tasks[i].index}"></i>
        </div>
      </li>`;
  }

  const inputs = document.querySelectorAll('.task');
  const checks = document.querySelectorAll('[type="checkbox"]');
  const deleteButton = document.querySelectorAll('.remove');
  const clearAll = document.querySelector('.clearAll');

  for (let i = 0; i < tasks.length; i += 1) {
    checks[i].checked = tasks[i].completed;
    if (checks[i].checked) {
      inputs[i].classList.add('strike');
    } else {
      inputs[i].classList.remove('strike');
    }
    checks[i].addEventListener('click', () => {
      // updateStatus(i);
      if (checks[i].checked) {
        tasks[i].completed = true;
        inputs[i].classList.add('strike');
      } else {
        tasks[i].completed = false;
        inputs[i].classList.remove('strike');
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    clearAll.addEventListener('click', () => {
      removeAllCompleted();
      populateTasks();
    });

    inputs[i].addEventListener('focusin', () => {
      deleteButton[i].classList.remove('fa-ellipsis-v');
      deleteButton[i].classList.add('fa-trash');
      deleteButton[i].addEventListener('click', (e) => {
        const indexToDelete = e.target.id[1];
        removeTask(indexToDelete);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        populateTasks();
      });
    });

    inputs[i].addEventListener('input', (e) => {
      e.target.setAttribute('placeholder', e.target.value);
      tasks[i].description = e.target.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    inputs[i].addEventListener('focusout', (e) => {
      e.target.value = '';
      deleteButton[i].classList.add('fa-ellipsis-v');
      deleteButton[i].classList.remove('fa-trash');
    });
  }
};

addTaskField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask(addTaskField.value);
    addTaskField.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateTasks();
  }
});

populateTasks();
