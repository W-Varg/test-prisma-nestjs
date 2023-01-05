import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UnidadListRelationFilter } from "../unidad/UnidadListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  unidades?: UnidadListRelationFilter;
  username?: StringFilter;
};
