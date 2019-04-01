import {contentView, TextView, Stack} from 'tabris';

contentView.append(
  <Stack layoutData='fill' spacing={24} alignment='stretchX'>
    <TextView background='red'>lorem</TextView>
    <TextView left={0} background='green'>ipsum dolor</TextView>
    <TextView centerX background='blue'>sit amet</TextView>
    <TextView right={0} background='teal'>consectetur</TextView>
  </Stack>
).find(TextView).set({font: '48px', textColor: 'white'});