import type Client from "../client/interface";
import type Companion from "../companion/interface";

export default interface Assignment {
  id?: number;
  client_id: number;
  client: Client;
  companion_id: number;
  companion: Companion;
  date: string;
  from: string;
  to: string;
  hours: number;
  created_at: string;
  updated_at: string;
}
