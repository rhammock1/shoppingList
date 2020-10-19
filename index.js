//enter items by entering text and hitting enter or button
//check and uncheck items on the list when check button is clicked
// remove items from the list


function main() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    
    let listItem = $('#shopping-list-entry').val();
    console.log(listItem);
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
  });
}

function markOffOn() {
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    //event.stopPropagation();
    console.log('the button was clicked');
    //$(this).parent().siblings().toggleClass('shopping-item__checked');
    $(this.closest('li').children[0]).toggleClass('shopping-item__checked');
    
  });
}

function deleteItem() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    //event.stopPropagation();
    console.log('the DELETE button was clicked');
    $(this).closest('li').remove();
    
  });
}

$(main);
$(markOffOn);
$(deleteItem);
