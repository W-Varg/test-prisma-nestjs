import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UnidadCreateNestedManyWithoutUsersInput } from "./UnidadCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tasks?: TaskWhereUniqueInput | null;
  unidades?: UnidadCreateNestedManyWithoutUsersInput;
  username: string;
};
