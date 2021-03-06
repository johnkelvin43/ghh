import {TextInput, contentView} from 'tabris';

new TextInput({
  top: 25, left: '20%', right: '20%',
  message: 'default'
}).appendTo(contentView);

['ascii', 'decimal', 'number', 'numbersAndPunctuation', 'phone', 'email', 'url'].forEach((mode) => {
  new TextInput({
    top: 'prev() 10', left: '20%', right: '20%',
    keyboard: mode,
    message: mode
  }).appendTo(contentView);
});
