<template>
  <v-card class="mx-auto my-15" variant="outlined" max-width="400">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">Login</div>
      </div>
    </v-card-item>
    <v-card-item>
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Usuario"
            v-model="fields.email"
            required
          ></v-text-field>
          <v-text-field
            label="Contraseña"
            required
            :type="'password'"
            v-model="fields.password"
          ></v-text-field>
        </v-form>
      </div>
    </v-card-item>

    <v-card-actions>
      <div>
        <v-btn :disabled="!valid" variant="outlined" @click="login">
          Entrar
        </v-btn>
      </div>
    </v-card-actions></v-card
  >
</template>

<script setup lang="ts">
import LoginApi from "@/api/login";
import localStorageService from "@/services/localStorageService";
import { LoginService } from "@/services/loginService";
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "./loginForm";

const fields = ref(new LoginForm());
const valid = ref(true);
const form = ref();
const router = useRouter();
const storageService = new localStorageService();

const service = new LoginService(new LoginApi());

async function login() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  const response = await service.login(fields.value);
  if (response.data) {
    storageService.set("token", response.data.token);
    router.push({ name: "home" });
  }
}
</script>
