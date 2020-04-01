// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';
import { Task } from '../components/types';
import { TaskActionTypes, ARCHIVE_TASK, PIN_TASK } from './types.d';

interface TaskState {
  tasks: Task[];
}
// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
  return (state: TaskState, action: TaskActionTypes): TaskState => {
    return {
      ...state,
      tasks: state.tasks.map((task: Task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      )
    };
  };
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' }
];

// We export the constructed redux store
const initialState: TaskState = {
  tasks: defaultTasks
};

// The reducer describes how the contents of the store change for each action
export const reducer = (
  state: TaskState = initialState,
  action: TaskActionTypes
) => {
  switch (action.type) {
    case ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};

export default createStore(reducer, initialState);
