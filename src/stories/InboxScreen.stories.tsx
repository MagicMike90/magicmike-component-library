import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from '../components/InboxScreen';
import { defaultTasksData } from './TaskList.stories';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>]
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
