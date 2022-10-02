export default class AssignmentForm {
  id?: number;
  client_name: string | null = null;
  companion_name: string | null = null;
  days: string[] = [];
  hours: number = 0;
  periodic: boolean = false;
  enabled: boolean = true;
  weekdays = [
    { enabled: false, type: "Domingo" },
    { enabled: false, type: "Lunes" },
    { enabled: false, type: "Martes" },
    { enabled: false, type: "Miercoles" },
    { enabled: false, type: "Jueves" },
    { enabled: false, type: "Viernes" },
    { enabled: false, type: "Sabado" },
  ];
}
