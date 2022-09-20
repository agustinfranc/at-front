export default class Companion {
  id?: number;
  name: string = "";
  dni: string = "";
  phone: string = "";
  max_taxable: number = 0;
  monotax?: boolean | null = null;
  criminal_record?: boolean | null = null;
  insurance?: boolean | null = null;
}
