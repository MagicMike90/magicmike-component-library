import React from 'react';
import { action } from '@storybook/addon-actions';

import TaskView from '../components/Task';

// To tell Storybook about the component we are documenting
export default {
  component: TaskView,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

//  (taskData) to build out the shape of the task the component expects
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
  <TaskView task={{ ...taskData }} {...actionsData} />
);

export const Pinned = () => (
  <TaskView task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => (
  <TaskView task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
