export default interface Client {
  id: number;
  name: string;
  dni: string;
  phone: string;
  rate: string;
  taxable: string;
  comments?: string;
}
