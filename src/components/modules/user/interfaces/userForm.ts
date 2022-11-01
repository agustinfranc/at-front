export default class UserForm {
  id?: number;
  user_role_id: number | null = null;
  name: string | null = null;
  email: string | null = null;
  password: string | null = null;
  repeate_password: string | null = null;
  role: { title: "Administrador" | "Asistente"; value: number } | null = null;
}
