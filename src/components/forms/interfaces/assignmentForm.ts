export default class AssignmentForm {
  id?: number;
  client_name: string | null = null;
  companion_name: string | null = null;
  periodic: boolean = false;
  enabled: boolean = true;
  // TODO: traer los day_types del BE
  days = [
    {
      enabled: false,
      day_type_name: "Domingo",
      day_type_id: 1,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Lunes",
      day_type_id: 2,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Martes",
      day_type_id: 3,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Miercoles",
      day_type_id: 4,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Jueves",
      day_type_id: 5,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Viernes",
      day_type_id: 6,
      from: "",
      to: "",
      hours: 0,
    },
    {
      enabled: false,
      day_type_name: "Sabado",
      day_type_id: 7,
      from: "",
      to: "",
      hours: 0,
    },
  ];
}
