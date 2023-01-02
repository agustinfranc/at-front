export default interface Companion {
  id?: number;
  name: string;
  cuit: string;
  phone: string;
  extra_phone: string;
  extra_phone_reference: string;
  nationality: string;
  birthday: string;
  max_taxable: number;
  monotax: boolean;
  criminal_record: boolean;
  insurance: boolean;
  has_sign_contract: boolean;
}
