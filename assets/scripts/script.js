function createTodoItem(label) {
  const todoItemCheckbox = $("<input/>", {
    type: 'checkbox',
    class: 'todo-item__checkbox form-check-input'
  })
  const todoItemLabel = $("<label/>", {
    class: 'todo-item__label form-check-label',
    text: label
  })
  const todoItemDeleteBtn = $("<button/>", {
    type: 'button',
    class: 'todo-item__delete-btn btn btn-danger btn-sm',
    text: 'Delete'
  })

  const todoItem = $("<li/>", {
    class: 'todo-item',
  }).append(todoItemCheckbox, todoItemLabel, todoItemDeleteBtn);

  return todoItem;
}

$(document).ready(function() {
  const todos = [];

  const todoList = $('[data-todo-list]')
  const input = $('[data-input]');
  const empty = $('[data-empty]');

  $('[data-form]').submit(e => {
    e.preventDefault();

    const value = input.val();
    if (value === '') return;

    todos.push(value);
    todoList.append(createTodoItem(value));

    if (todos.length > 0) {
      empty.hide();
    } else {
      empty.show();
    }

    input.val('');
    input.focus();
  })
});