function createTodoItem(value) {
  const noteItemContent = $("<div/>", {
    class: 'note-item__content',
    text: value
  })

  const noteItem = $("<li/>", {
    class: 'note-item',
  })
  .attr('data-note', '')
  .append(noteItemContent);

  return noteItem;
}

$(document).ready(function() {
  const notes = [];

  const form = $('[data-form]');
  const input = $('[data-input]');
  const noteList = $('[data-note-list]')
  const noteCount = $('[data-note-count]');

  form.submit(e => {
    e.preventDefault();

    const value = input.val();
    if (value === '') {
      return;
    }

    notes.push(value);
    noteList.append(createTodoItem(value));
    noteCount.text(notes.length);

    input.val('');
    input.focus();
  })
});