import { DateTime } from 'luxon';

interface Task extends TaskAdd {
  id: string;
  userId: string;
}

interface TaskAdd {
  title: string;
  summary: string;
  dueDate: DateTime;
}

export type { Task, TaskAdd };
