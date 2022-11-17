import type Assignment from "@/api/assignment/interface";
import type Client from "@/api/client/interface";
import type Companion from "@/api/companion/interface";
import type AssignmentForm from "../../../modules/assignment/interfaces/assignmentForm";
import type AssignmentTemplateForm from "../../../modules/assignmentTemplate/interfaces/assignmentTemplateForm";

export function mapAssignmentForEditForm(
  assignment: Assignment
): AssignmentForm {
  return {
    id: assignment.id,
    client_name: assignment.client.name,
    companion_name: assignment.companion.name,
    hours: assignment.hours,
    date: assignment.date,
    from: assignment.from,
    to: assignment.to,
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
