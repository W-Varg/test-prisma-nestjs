import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UnidadCreateInput = {
  description?: string | null;
  name: string;
  owner?: UserWhereUniqueInput | null;
};
