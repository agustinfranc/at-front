import type Assignment from "@/api/assignment/interface";
import type Client from "@/api/client/interface";
import type Companion from "@/api/companion/interface";
import type AssignmentForm from "../interfaces/assignmentForm";

export function mapAssignmentForEditForm(
  assignment: Assignment
): AssignmentForm {
  return {
    id: assignment.id,
    client_name: assignment.client.name,
    companion_name: assignment.companion.name,
    days: [
      {
        enabled: assignment.days.find((day) => day.value === 0) ? true : false,
        title: "Domingo",
        id: 1,
        value: 0,
        from: assignment.days.find((day) => day.value === 0)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 0)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 0)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 1) ? true : false,
        title: "Lunes",
        id: 2,
        value: 1,
        from: assignment.days.find((day) => day.value === 1)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 1)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 1)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 2) ? true : false,
        title: "Martes",
        id: 3,
        value: 2,
        from: assignment.days.find((day) => day.value === 2)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 2)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 2)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 3) ? true : false,
        title: "Miercoles",
        id: 4,
        value: 3,
        from: assignment.days.find((day) => day.value === 3)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 3)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 3)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 4) ? true : false,
        title: "Jueves",
        id: 5,
        value: 4,
        from: assignment.days.find((day) => day.value === 4)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 4)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 4)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 5) ? true : false,
        title: "Viernes",
        id: 6,
        value: 5,
        from: assignment.days.find((day) => day.value === 5)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 5)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 5)?.pivot.hours || 0,
      },
      {
        enabled: assignment.days.find((day) => day.value === 6) ? true : false,
        title: "Sabado",
        id: 7,
        value: 6,
        from: assignment.days.find((day) => day.value === 6)?.pivot.from || "",
        to: assignment.days.find((day) => day.value === 6)?.pivot.to || "",
        hours: assignment.days.find((day) => day.value === 6)?.pivot.hours || 0,
      },
    ],
  };
}

export function mapFormForRequest(
  fields: AssignmentForm,
  clients: Client[],
  companions: Companion[]
) {
  return {
    ...fields,
    client_id: clients.find(
      (client: Client) => client.name === fields.client_name
    )?.id,
    companion_id: companions.find(
      (companion: Companion) => companion.name === fields.companion_name
    )?.id,
  };
}
