import { User } from "../user/User";
import { Unidad } from "../unidad/Unidad";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimation: number | null;
  id: string;
  project?: Unidad | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
  updatedAt: Date;
};
