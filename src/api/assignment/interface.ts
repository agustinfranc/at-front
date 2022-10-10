import type Client from "../client/interface";
import type Companion from "../companion/interface";

export default interface Assignment {
  id?: number;
  client_id: number;
  client: Client;
  companion_id: number;
  companion: Companion;
  days: [];
  periodic: boolean;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}
