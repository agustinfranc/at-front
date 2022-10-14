export default interface Companion {
  id?: number;
  name: string;
  cuit: number;
  phone: number;
  nationality: string | null;
  birthday: string | null;
  max_taxable: boolean;
  monotax: boolean;
  criminal_record: boolean;
  insurance: boolean;
  has_sign_contract: boolean;
}
