import { SortOrder } from "../../util/SortOrder";

export type UnidadOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
