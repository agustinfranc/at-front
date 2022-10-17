export default class ClientForm {
  id?: number;
  name: string = "";
  dni: number = 0;
  phone: string = "";
  extra_phone: string | null = null;
  rate: number | null = null;
  taxable: number | null = null;
  comments: string | null = null;
  address: string = "";
  guardian_name: string | null = null;
  birthday: string = "";
  medicine: string | null = null;
  diagnosis: string | null = null;
  treatment: string | null = null;
  health_insurance: string | null = null;
  affiliate: string | null = null;
  budget_date: string | null = null;
  created_at: string | null = null;
  updated_at: string | null = null;
}
