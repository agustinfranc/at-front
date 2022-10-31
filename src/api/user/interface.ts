export default interface User {
  id?: number;
  user_role_id: number;
  name: string;
  email: string;
  role: {
    id: number;
    name: "Administrador" | "Asistente";
  };
  created_at: string;
  updated_at: string;
}
