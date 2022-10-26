// Button.stories.js|jsx

import React from 'react';

import { Button2 } from '../comp/Button2';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button2',
  component: Button2,
};

export const Primary = () => <Button2 colors={'secondary'}>Button</Button2>;