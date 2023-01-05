import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutUnidadsInput } from "./TaskCreateNestedManyWithoutUnidadsInput";

export type UnidadCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name: string;
  owner?: UserWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutUnidadsInput;
};
