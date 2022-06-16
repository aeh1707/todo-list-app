export let tasks = JSON.parse(localStorage.getItem('tasks'));
export const tasksList = document.querySelector('ul');
export const addTaskField = document.querySelector('.new-task-field input');


export const removeTask = (index) => {
	let zeroBasedIndex = index - 1;
	// remove task by index
	tasks.splice(zeroBasedIndex, 1)
	// update indexs
	for (let i=zeroBasedIndex; i<tasks.length; i++) {
		tasks[i].index -= 1;
	}
}

export const removeAll = () => {
	tasks = [];
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const addTask = (taskDescription) => {
	let newTask = new taskObject(taskDescription, false, tasks.length+1);
	tasks.push(newTask);
}

export class taskObject {
	constructor(description, completed, index) {
		this.description = description;
		this.completed = completed;
		this.index = index;
	}
}
