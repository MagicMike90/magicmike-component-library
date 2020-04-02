import React from 'react';
import { action } from '@storybook/addon-actions';

import TaskView from '../components/Task';
import { withKnobs, object } from '@storybook/addon-knobs';

// To tell Storybook about the component we are documenting
export default {
  component: TaskView,
  title: 'Task',
  decorators: [withKnobs],
  parameters: {
    assets: [
      'path/to/your/asset.png',
      'path/to/another/asset.png',
      'path/to/yet/another/asset.png'
    ]
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

//  (taskData) to build out the shape of the task the component expects
// it will be exclude by storybook set   excludeStories: /.*Data$/
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

// action() allows us to create a callback that appears in the actions panel of the Storybook UI
// when clicked. So when we build a pin button,
// we’ll be able to determine in the test UI if a button click is successful.
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export const Default = () => (
  <TaskView task={object('task', { ...taskData })} {...actionsData} />
);

export const Pinned = () => (
  <TaskView task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => (
  <TaskView task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => (
  <TaskView task={{ ...taskData, title: longTitleString }} {...actionsData} />
);
