import { ARCHIVE_TASK, PIN_TASK } from './types.d';

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string) => ({ type: ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: PIN_TASK, id });
