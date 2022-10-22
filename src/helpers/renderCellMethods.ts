export function renderNullableMoneyCell(value: number | string) {
  return value ? "$" + value : "-";
}
