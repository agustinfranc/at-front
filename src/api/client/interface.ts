export default interface Client {
  id?: number;
  name: string;
  dni: number;
  phone: string;
  extra_phone: string;
  rate: number;
  taxable: string;
  comments: string;
  address: string;
  guardian_name: string;
  birthday: string;
  medicine: string;
  diagnosis: string;
  treatment: string;
  health_insurance: string;
  affiliate: string;
  budget_date: string;
  created_at: string;
  updated_at: string;
}
