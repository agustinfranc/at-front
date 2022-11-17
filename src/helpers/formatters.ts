import type { ValueFormatterParams } from "ag-grid-community";

export function booleanFormatter(params: ValueFormatterParams) {
  return params.value ? "Si" : "No";
}
