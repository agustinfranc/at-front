export function renderNullableMoneyCell(value: number | string | null) {
  return value ? "$" + value : "-";
}

export function renderNullableTableCell(value: string | number | null) {
  return value ?? "-";
}

export function renderNullableTaxableCell(value: number | string | null) {
  return value ? value + "%" : "-";
}

export function renderBooleanTableCell(value: boolean) {
  return value ? "Si" : "No";
}
