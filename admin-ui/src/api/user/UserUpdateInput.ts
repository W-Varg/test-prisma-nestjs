import { InputJsonValue } from "../../types";
import { UnidadUpdateManyWithoutUsersInput } from "./UnidadUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  unidades?: UnidadUpdateManyWithoutUsersInput;
  username?: string;
};
