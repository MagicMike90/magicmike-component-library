import React from 'react';
import { Task } from './types';

interface Props {
  task: Task;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}
const TaskView: React.FC<Props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}: Props) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ textOverflow: 'ellipsis' }}
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
export default TaskView;
