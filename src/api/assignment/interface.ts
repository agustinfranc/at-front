export default class Assignment {
  id?: number;
  client_id: number | null = null;
  companion_id: number | null = null;
  days: string[] = [];
  hours = 0;
  periodic = false;
  enabled = true;
}
