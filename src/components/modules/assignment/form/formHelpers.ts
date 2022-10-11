import type Assignment from "@/api/assignment/interface";
import type AssignmentForm from "../interfaces/assignmentForm";

export function mapAssignmentForEditForm(
  assignment: Assignment
): AssignmentForm {
  return {
    id: assignment.id,
    client_name: assignment.client.name,
    companion_name: assignment.companion.name,
    periodic: assignment.periodic,
    enabled: assignment.enabled,
    // TODO: finish mapping days
    days: [
      { enabled: false, title: "Domingo", id: 1, from: "", to: "", hours: 0 },
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
    ],
  };
}
