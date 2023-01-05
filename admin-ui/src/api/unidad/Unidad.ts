import { User } from "../user/User";

export type Unidad = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  owner?: User | null;
  updatedAt: Date;
};
