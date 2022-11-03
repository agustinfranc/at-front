export default interface Client {
  id?: number;
  name: string;
  dni: number | null;
  phone: string | null;
  extra_phone: string | null;
  extra_phone_reference: string | null;
  extra_phone_bis: string | null;
  extra_phone_bis_reference: string | null;
  rate: number | null;
  taxable: string | null;
  comments: string | null;
  address: string | null;
  guardian_name: string | null;
  birthday: string | null;
  medicine: string | null;
  diagnosis: string | null;
  treatment: string | null;
  health_insurance: string | null;
  affiliate: string | null;
  budget_date: string | null;
  created_at?: string;
  updated_at?: string;
}
