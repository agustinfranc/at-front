export default class Assignment {
  id?: number;
  client_name: string | null = null;
  companion_name: string | null = null;
  days: string[] = [];
  hours: number = 0;
  periodic: boolean = false;
  enabled: boolean = true;
}
