import { JsonValue } from "type-fest";
import { Task } from "../task/Task";
import { Unidad } from "../unidad/Unidad";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Task | null;
  unidades?: Array<Unidad>;
  updatedAt: Date;
  username: string;
};
