import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UnidadWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  tasks?: TaskListRelationFilter;
};
