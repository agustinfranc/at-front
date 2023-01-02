// eslint-disable-next-line
// @ts-ignore
import { startCase, toLower } from "lodash";

export function capitalizeField(value: string, field: string, fields: any) {
  fields[field] = startCase(toLower(value));
}
