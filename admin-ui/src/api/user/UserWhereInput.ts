import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UnidadListRelationFilter } from "../unidad/UnidadListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskWhereUniqueInput;
  unidades?: UnidadListRelationFilter;
  username?: StringFilter;
};
