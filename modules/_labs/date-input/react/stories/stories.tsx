/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import DateInput from '../index';
import README from '../README.md';

storiesOf('Labs/Date Input', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <DateInput />
    </div>
  ));