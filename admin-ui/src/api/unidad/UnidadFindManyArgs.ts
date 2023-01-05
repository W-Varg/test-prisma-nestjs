import { UnidadWhereInput } from "./UnidadWhereInput";
import { UnidadOrderByInput } from "./UnidadOrderByInput";

export type UnidadFindManyArgs = {
  where?: UnidadWhereInput;
  orderBy?: Array<UnidadOrderByInput>;
  skip?: number;
  take?: number;
};
