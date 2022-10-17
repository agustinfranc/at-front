import type Client from "@/api/client/interface";
import type ClientForm from "../interfaces/clientForm";

export function mapClientForEditForm(client: Client): ClientForm {
  return {
    id: client.id,
    name: client.name,
    dni: client.dni,
    phone: client.phone,
    extra_phone: client.extra_phone,
    rate: client.rate,
    taxable: client.taxable,
    comments: client.comments,
    address: client.address,
    guardian_name: client.guardian_name,
    birthday: client.birthday,
    medicine: client.medicine,
    diagnosis: client.diagnosis,
    treatment: client.health_insurance,
    affiliate: client.affiliate,
    budget_date: client.budget_date,
    created_at: client.created_at,
    updated_at: client.updated_at,
  };
}

export function mapFormForRequest(fields: ClientForm) {
  return {
    ...fields,
  };
}
