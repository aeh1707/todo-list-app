export const tasksList = document.querySelector('ul');
export const addTaskField = document.querySelector('.new-task-field input');
export let tasks = JSON.parse(localStorage.getItem('tasks')); // eslint-disable-line

export class TaskObject {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const removeTask = (index) => {
  const zeroBasedIndex = index - 1;
  // remove task by index
  tasks.splice(zeroBasedIndex, 1);
  // update indexs
  for (let i = zeroBasedIndex; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
};

export const removeAll = () => {
  tasks = [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addTask = (taskDescription) => {
  const newTask = new TaskObject(taskDescription, false, tasks.length + 1);
  tasks.push(newTask);
};
