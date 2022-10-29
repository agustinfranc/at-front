import type User from "@/api/user/interface";
import type UserForm from "../interfaces/userForm";

export function mapForEditForm(user: User): UserForm {
  return {
    id: user.id,
    name: user.name,
    role: user.role.name,
  };
}

export function mapFormForRequest(fields: UserForm, roles: any[]) {
  return {
    ...fields,
    user_role_id: roles.find((role: any) => role.title === fields.role)?.id,
  };
}
