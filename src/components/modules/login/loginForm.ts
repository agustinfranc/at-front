import type Login from "@/api/login/interface";

export default class LoginForm implements Login {
  email: string | null = null;
  password: string | null = null;
}
