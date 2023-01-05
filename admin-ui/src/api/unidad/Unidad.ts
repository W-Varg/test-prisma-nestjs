import { User } from "../user/User";
import { Task } from "../task/Task";

export type Unidad = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string;
  owner?: User | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
