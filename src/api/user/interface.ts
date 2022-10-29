export default interface User {
  id?: number;
  user_role_id: number;
  name: string;
  role: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}
