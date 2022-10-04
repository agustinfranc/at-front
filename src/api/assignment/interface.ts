export default class Assignment {
  id?: number;
  client_id: number | null = null;
  companion_id: number | null = null;
  days: string[] = [];
  hours: number = 0;
  periodic: boolean = false;
  enabled: boolean = true;
}
