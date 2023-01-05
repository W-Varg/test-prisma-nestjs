import { JsonValue } from "type-fest";
import { Unidad } from "../unidad/Unidad";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  unidades?: Array<Unidad>;
  updatedAt: Date;
  username: string;
};
