export default class AssignmentForm {
  id?: number;
  client_name: string | null = null;
  companion_name: string | null = null;
  periodic: boolean = false;
  enabled: boolean = true;
  days = [
    { enabled: false, type: "Domingo", from: "", to: "", hours: 0 },
    { enabled: false, type: "Lunes", from: "", to: "", hours: 0 },
    { enabled: false, type: "Martes", from: "", to: "", hours: 0 },
    { enabled: false, type: "Miercoles", from: "", to: "", hours: 0 },
    { enabled: false, type: "Jueves", from: "", to: "", hours: 0 },
    { enabled: false, type: "Viernes", from: "", to: "", hours: 0 },
    { enabled: false, type: "Sabado", from: "", to: "", hours: 0 },
  ];
}
