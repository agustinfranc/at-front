import type Client from "../client/interface";
import type Companion from "../companion/interface";

export default interface AssignmentTemplate {
  id?: number;
  client_id: number;
  client: Client;
  companion_id: number;
  companion: Companion;
  days: {
    id: number;
    value: number;
    title: string;
    pivot: {
      assignment_id: number;
      day_id: number;
      from: string;
      to: string;
      hours: number;
      created_at: string;
      updated_at: string;
    };
  }[];
  created_at: string;
  updated_at: string;
}
