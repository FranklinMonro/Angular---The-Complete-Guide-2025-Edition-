import { DateTime } from 'luxon';

export interface TaskInterface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: DateTime;
}
