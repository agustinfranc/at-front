export default class Companion {
  id?: number;
  name: string = "";
  dni: string = ""; // TODO: corregir tipado
  phone: string = ""; // TODO: corregir tipado
  max_taxable: number | null = 0;
  monotax: boolean | null = null;
  criminal_record: boolean | null = null;
  insurance: boolean | null = null;
}
