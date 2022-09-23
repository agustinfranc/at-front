export default class Companion {
  id?: number;
  name: string = "";
  cuit: string = "";
  phone: string = "";
  nationality: string = "";
  birth: string = "";
  max_taxable: number = 0;
  monotax: boolean | null = false;
  criminal_record: boolean | null = false;
  insurance: boolean | null = false;
}
