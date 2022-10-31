import type User from "@/api/user/interface";
import type UserForm from "../interfaces/userForm";

export function mapForEditForm(user: User): UserForm {
  return {
    ...user,
    password: "",
    repeate_password: "",
    role: {
      title: user.role.name as "Administrador" | "Asistente",
      value: user.role.id,
    },
  };
}

export function mapFormForRequest(
  fields: UserForm,
  roles: { title: "Administrador" | "Asistente"; id: number }[]
): UserForm {
  return {
    ...fields,
    user_role_id:
      roles.find((role: any) => role.title === fields.role)?.id || null,
  };
}
