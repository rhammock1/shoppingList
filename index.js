function addItemToList() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    
    let listItem = $('#shopping-list-entry').val();
    //console.log(listItem);
    let template = `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
    $('.shopping-list').append(template);
    this.reset();
    //console.log(this);
  });
}

function markOffOn() {
    //event delegation
  // parent element                   child selector
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    
    //console.log('the button was clicked');

    //both below work, but children[0] is most specific. script could
    //break though if children[0] changes/moves

    //$(this).parent().siblings().toggleClass('shopping-item__checked');
    $(this.closest('li').children[0]).toggleClass('shopping-item__checked');
    
  });
}

function deleteItem() {
  //event delegation
  // parent element                   child selector
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    //console.log('the DELETE button was clicked');
    $(this).closest('li').remove();
    
  });
}

function startUp() {
  $(addItemToList);
  $(markOffOn);
  $(deleteItem);
}

$(startUp);
