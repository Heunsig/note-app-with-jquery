function createNoteItem(value) {
  const noteItemContent = $("<div/>", {
    class: 'note-item__content',
    text: value
  });

  const noteItem = $("<li/>", {
    class: 'note-item',
  })
  .append(noteItemContent);

  return noteItem;
}

$(document).ready(function() {
  const notes = [];

  const form = $('#form');
  const input = $('#input');
  const noteList = $('#note-list');
  const noteCount = $('#note-count');

  form.submit(e => {
    e.preventDefault();

    const value = input.val();
    if (value === '') {
      return;
    }

    // 신규 Note element 생성
    const newNoteItemElement = createNoteItem(value);

    // DOM 업데이트: 신규 Note element를 NOTE List 에 추가
    noteList.append(newNoteItemElement);

    // 신규 Note 데이터 추가
    notes.push(value);
    
    // DOM 업데이트: 메모 카운트 화면에 반영
    noteCount.text(notes.length);

    input.val('');
    input.focus();
  })
});