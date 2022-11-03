export function renderNullableMoneyCell(value: number | string | null) {
  return value ? "$" + value : "-";
}
