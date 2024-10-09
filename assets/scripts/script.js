function createTodoItem(id, value) {
  const todoItemCheckbox = $("<input/>", {
    type: 'checkbox',
    class: 'todo-item__checkbox form-check-input',
    checked: false
  })
  .attr('data-checkbox', '');

  const todoItemLabel = $("<label/>", {
    class: 'todo-item__label form-check-label',
    text: value
  })
  const todoItemDeleteBtn = $("<button/>", {
    type: 'button',
    class: 'todo-item__delete-btn btn btn-danger btn-sm',
    text: 'Delete'
  })
  .attr('data-delete-btn','');

  const todoItem = $("<li/>", {
    class: 'todo-item',
  })
  .attr('data-todo', '')
  .attr('data-todo-id', id)
  .append(todoItemCheckbox, todoItemLabel, todoItemDeleteBtn);

  return todoItem;
}

function generateRandomString(length) {
  return Math.random().toString(36).substr(2, length);
}

$(document).ready(function() {
  const todos = [];

  const todoList = $('[data-todo-list]')
  const input = $('[data-input]');
  const empty = $('[data-empty]');
  const form = $('[data-form]');

  form.submit(e => {
    e.preventDefault();

    const value = input.val();
    if (value === '') return;

    const newTodo = {
      id: generateRandomString(10),
      value: value,
      isCompleted: false
    }

    todos.push(newTodo);
    todoList.append(createTodoItem(newTodo.id, newTodo.value));

    if (todos.length > 0) {
      empty.hide();
    } else {
      empty.show();
    }

    input.val('');
    input.focus();
  })

  todoList.on('click', '[data-delete-btn]', function(){
    const todoId = $(this).parent().data('todo-id');
    todos.splice(todos.findIndex(todo => todo.id === todoId), 1);
    $(`[data-todo][data-todo-id="${todoId}"]`).remove();

    if (todos.length > 0) {
      empty.hide();
    } else {
      empty.show();
    }
  })

  todoList.on('change', '[data-checkbox]', function(){
    const todoId = $(this).parent().data('todo-id');
    const todo = todos.find(todo => todo.id === todoId);
    todo.isCompleted = !todo.isCompleted;

    if (todo.isCompleted) {
      $(`[data-todo][data-todo-id="${todoId}"]`).addClass('completed');
    } else {
      $(`[data-todo][data-todo-id="${todoId}"]`).removeClass('completed');
    }
  })
});