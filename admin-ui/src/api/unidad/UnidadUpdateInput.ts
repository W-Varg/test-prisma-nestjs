import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UnidadUpdateInput = {
  description?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput | null;
};
