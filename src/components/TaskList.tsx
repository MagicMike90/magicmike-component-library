import React from 'react';

import TaskView from './Task';
import { Task } from './types';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/actions';
import { TaskState } from '../lib/redux';

interface Props {
  loading?: boolean;
  tasks: Task[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}
export const PureTaskList: React.FC<Props> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}: Props) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED')
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <TaskView key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  (state: TaskState) => ({
    tasks: state.tasks.filter(
      (t: Task) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    )
  }),
  dispatch => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id))
  })
)(PureTaskList);
