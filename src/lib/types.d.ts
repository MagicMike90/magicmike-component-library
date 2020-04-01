// The actions are the "names" of the changes that can happen to the store
export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const PIN_TASK = 'PIN_TASK';
interface ArchiveTaskAction {
  type: typeof ARCHIVE_TASK;
  id: string;
}

interface PinTaskAction {
  type: typeof PIN_TASK;
  id: string;
}

export type TaskActionTypes = ArchiveTaskAction | PinTaskAction;
