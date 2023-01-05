import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutUnidadsInput } from "./TaskUpdateManyWithoutUnidadsInput";

export type UnidadUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutUnidadsInput;
};
