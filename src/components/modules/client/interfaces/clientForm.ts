import type Client from "@/api/client/interface";

export default class ClientForm implements Client {
  id?: number;
  name = "";
  dni: number | null = null;
  phone: string | null = null;
  extra_phone: string | null = null;
  extra_phone_reference: string | null = null;
  extra_phone_bis: string | null = null;
  extra_phone_bis_reference: string | null = null;
  rate: number = 0;
  companion_rate: number = 0;
  taxable: string | null = null;
  comments: string | null = null;
  address: string | null = null;
  guardian_name: string | null = null;
  birthday: string | null = null;
  medicine: string | null = null;
  diagnosis: string | null = null;
  treatment: string | null = null;
  health_insurance: string | null = null;
  affiliate: string | null = null;
  budget_date: string | null = null;
}
