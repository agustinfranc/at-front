export default interface Companion {
  id?: number;
  name: string;
  cuit: string;
  phone: string;
  nationality: string | null;
  birthday: string | null;
  max_taxable: number;
  monotax: boolean;
  criminal_record: boolean;
  insurance: boolean;
  has_sign_contract: boolean;
}
