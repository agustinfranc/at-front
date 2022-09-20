export default class Assignment {
  id?: number;
  client_id: number = 0;
  companion_id: number = 0;
  days: string[] = [];
  hours: number = 0;
  periodic: boolean = false;
  enabled: boolean = false;
}
