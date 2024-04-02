export type Status = 'todo' | 'in-progress' | 'done';

export type Task = {
  title: string,
  id: number,
  status?: Status
};

export const statuses: Status[] = ['todo', 'in-progress', 'done'];

export const TASKS: Array<Task> = [
  {
    id: 1,
    status: "in-progress",
    title: 'Do market research'
  },
  {
    id: 2,
    status: "done",
    title: 'Competitor analysis'
  },
  {
    id: 3,
    status: "done",
    title: 'Develop Business strategy'
  },
  {
    id: 4,
    status: 'in-progress',
    title: 'Identify potential partners'
  },
  {
    id: 5,
    status: "todo",
    title: 'Negotiate partnerships'
  },
  {
    id: 6,
    status: "todo",
    title: 'Develop marketing plan'
  },
  {
    id: 7,
    status: "in-progress",
    title: 'Implement marketing plan'
  },
  {
    id: 8,
    status: "done",
    title: 'Evaluate business performance'
  }
]
