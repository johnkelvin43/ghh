import {ImageView, TextView, contentView} from 'tabris';

let touched = 0;
new ImageView({
  centerX: 0, centerY: 0,
  image: 'resources/target_200.png',
  highlightOnTouch: true
}).on('tap', () => {
  touched++;
  touchedLabel.text = 'touched ' + touched + ' times';
}).appendTo(contentView);
const touchedLabel = new TextView({
  top: 'prev() 10', centerX: 0
}).appendTo(contentView);
