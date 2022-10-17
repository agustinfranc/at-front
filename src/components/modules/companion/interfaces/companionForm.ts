import type Companion from "@/api/companion/interface";

export default class CompanionForm implements Companion {
  id?: number;
  name = "";
  cuit = "";
  phone = "";
  nationality = "";
  birthday = "";
  max_taxable = 0;
  monotax = false;
  criminal_record = false;
  insurance = false;
  has_sign_contract = false;
}
