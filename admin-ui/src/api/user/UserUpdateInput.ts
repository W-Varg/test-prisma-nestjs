import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UnidadUpdateManyWithoutUsersInput } from "./UnidadUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tasks?: TaskWhereUniqueInput | null;
  unidades?: UnidadUpdateManyWithoutUsersInput;
  username?: string;
};
