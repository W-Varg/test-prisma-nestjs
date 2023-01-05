import { InputJsonValue } from "../../types";
import { UnidadCreateNestedManyWithoutUsersInput } from "./UnidadCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  unidades?: UnidadCreateNestedManyWithoutUsersInput;
  username: string;
};
