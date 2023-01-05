import { Unidad as TUnidad } from "../api/unidad/Unidad";

export const UNIDAD_TITLE_FIELD = "name";

export const UnidadTitle = (record: TUnidad): string => {
  return record.name || String(record.id);
};
