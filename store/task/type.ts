export interface taskInterface {
  id: number;
  name: string;
  description: string;
  status_id: number;
  position: number;
  isArchive: boolean;
}

export interface S {
  taskList: taskInterface[];
}

export interface G {
  nextId: number;
}

export interface RG {
  'task/nextId': G['nextId'];
}

export interface M {
  addTask: taskInterface;
  updateTask: taskInterface,
  updateName: { id: number, name: string };
  updateDescription: { id: number, description: string };
  deleteTask: { id: number };
  updateStatus: { taskId: number, toStatusId: number };
}

export interface RM {
  'task/addTask': M['addTask'];
  'task/updateTask': M['updateTask'];
  'task/updateName': M['updateName'];
  'task/updateDescription': M['updateDescription'];
  'task/deleteTask': M['deleteTask'];
  'task/updateStatus': M['updateStatus'];
}

export interface A {
  asyncAddTask: taskInterface;
  asyncUpdateTask: taskInterface;
  asyncUpdateName: { id: number, name: string };
  asyncUpdateDescription: { id: number, description: string };
  asyncDeleteTask: { id: number };
  asyncUpdateStatus: { taskId: number, toStatusId: number };
}

export interface RA {
  'task/asyncAddTask': A['asyncAddTask'];
  'task/asyncUpdateTask': A['asyncUpdateTask'];
  'task/asyncUpdateName': A['asyncUpdateName'];
  'task/asyncUpdateDescription': A['asyncUpdateDescription'];
  'task/asyncDeleteTask': A['asyncDeleteTask'];
  'task/asyncUpdateStatus': A['asyncUpdateStatus'];
}