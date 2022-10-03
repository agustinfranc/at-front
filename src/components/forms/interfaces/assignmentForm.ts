export default class AssignmentForm {
  id?: number;
  client_name: string | null = null;
  companion_name: string | null = null;
  periodic: boolean = false;
  enabled: boolean = true;
  // TODO: traer los days del BE
  days = [
    {
      enabled: false,
      title: "Domingo",
      id: 1,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Lunes",
      id: 2,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Martes",
      id: 3,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Miercoles",
      id: 4,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Jueves",
      id: 5,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Viernes",
      id: 6,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      title: "Sabado",
      id: 7,
      from: "",
      to: "",
      hours: 0,
    },
  ];
}
