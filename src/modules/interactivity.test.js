/**
 * @jest-environment jsdom
 */

const { updateStatus, editDescription } = require('./interactivity.js');

describe('updateStatus function testing', () => {
document.body.innerHTML = `<input type="checkbox" name="">
                           <input class="task task1" type="text" placeholder="task1">`;
const check = document.querySelector('[type="checkbox"]');
const input = document.querySelector('.task.task1');
const task = {
  description: 'task1',
  completed: false,
  index: 1,
}

check.checked = true;

test('test 1', () => {
  expect(updateStatus(check.innerHTML, task, input.innerHTML))
  .toEqual('<input class="task task1 strike" type="text" placeholder="task1">');
});
});