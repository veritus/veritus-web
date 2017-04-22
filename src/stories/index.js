import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import Button from './Button';
import { VButton } from '../Components/Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
storiesOf('VButton', module)
  .addDecorator(muiTheme())
  .add('raised', () => <VButton onClick={action('clicked')}>Veritus Button</VButton>);
