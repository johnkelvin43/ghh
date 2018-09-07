import {ActionSheet, TextView, Button, WidgetCollection} from 'tabris';

tabris.ui.contentView.append(
  <WidgetCollection>
    <Button left={16} right={16} top={16} onSelect={showActionSheet}>
      Show ActionSheet2
    </Button>
    <TextView left={16} right={16} top='prev() 16' alignment='center'/>
  </WidgetCollection>
);

const textView = tabris.ui.contentView.find(TextView).first();

function showActionSheet() {
  new ActionSheet({
    title: 'Actions',
    message: 'Select any of the actions below to proceed.',
    actions: [
      {title: 'Search', image: 'resources/search-black-24dp@3x.png'},
      {title: 'Share', image: 'resources/share-black-24dp@3x.png'},
      {title: 'Settings', image: 'resources/settings-black-24dp@3x.png'},
      {title: 'Delete', image: 'resources/delete-black-24dp@3x.png', style: 'destructive'},
      {title: 'Cancel', image: 'resources/close-black-24dp@3x.png', style: 'cancel'},
    ]
  }).on({
    select: ({target: actionSheet, index}) => textView.text = `"${actionSheet.actions[index].title}" selected`,
    close: () => console.log('ActionSheet closed')
  }).open();
}
