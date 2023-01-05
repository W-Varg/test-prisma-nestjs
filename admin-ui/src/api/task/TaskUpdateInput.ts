import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UnidadWhereUniqueInput } from "../unidad/UnidadWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimation?: number | null;
  project?: UnidadWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
};
