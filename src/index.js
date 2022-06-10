import './index.css';

const tasksList = document.querySelector('ul');

const tasks = [
  {
    description: 'Run 30 min',
    completed: false,
    index: 0,
  },
  {
    description: 'Finish coding project',
    completed: false,
    index: 1,
  },
  {
    description: 'Study math',
    completed: false,
    index: 2,
  },
];

const populateTasks = () => {
  tasksList.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    tasksList.innerHTML += `
      <li class="task-item">
        <div class="task-info">
          <input type="checkbox" name="" id="">
          <p>${tasks[i].description}</p>
        </div>
        <div class="dots">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </li>
  `;
  }
};

populateTasks();