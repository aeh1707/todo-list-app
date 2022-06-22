export class TaskObject {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const addTask = (taskDescription, tasksObject) => {
  const newTask = new TaskObject(taskDescription, false, tasksObject.length + 1);
  tasksObject.push(newTask);
  return tasksObject;
};

export const removeTask = (indexToRemove, tasksObject) => {
  const zeroBasedIndex = indexToRemove - 1;
  // remove task by index
  tasksObject.splice(zeroBasedIndex, 1);
  // update indexs
  for (let i = zeroBasedIndex; i < tasksObject.length; i += 1) {
    tasksObject[i].index -= 1;
  }
};

export const removeAllCompleted = (tasksObject) => {
  tasksObject = tasksObject.filter((task) => task.completed === false);
  return tasksObject;
};
