import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { PureInboxScreen } from '../components/InboxScreen';
import { defaultTasksData } from './TaskList.stories';

const mockStore = configureStore()({
  tasks: defaultTasksData
});
// A super-simple mock of a redux store
// const store = {
//   getState: () => {
//     return {
//       tasks: defaultTasksData
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch')
// };

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [(story: any) => <Provider store={mockStore}>{story()}</Provider>]
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;
