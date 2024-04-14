<template>
  <h3 class="title">Вход</h3>

  <form class="form" @submit.prevent="sendForm">
    <AppInput
      placeholder="Телефон"
      v-model.trim="phone"
      :isError="v$.phone.$error"
      v-mask="'+7 ### ### ## ##'"
      :errorText="errorPhone"
    />
    <AppInput
      type="password"
      placeholder="Пароль"
      v-model.trim="password"
      :isError="v$.password.$error"
      :errorText="errorPassword"
    />

    <p v-if="errorText" class="error-text">{{ errorText }}</p>

    <AppBtn classes="btn_auth">Войти</AppBtn>
  </form>
</template>

<script>
import AppInput from "@/components/AppInput";
import AppBtn from "@/components/AppBtn";

import { mask } from "vue-the-mask";

import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
const phoneValidate = (value) => {
  const phone = value.replace(/\D/g, "");
  const isPhone = phone.length >= 11;
  return isPhone;
};

export default {
  directives: { mask },
  setup: () => ({
    v$: useVuelidate(),
  }),
  components: { AppInput, AppBtn },
  data: () => ({
    phone: "",
    password: "",
    errorText: "",
  }),
  computed: {
    errorPassword() {
      if (!this.v$.password.$error) return "";
      if (this.v$.password.required.$invalid) return "Поле не заполнено";
      if (this.v$.password.minLength.$invalid)
        return `Минимальная длина пароля ${this.v$.password.minLength.$params.min} символов`;
      return "Неизвестная ошибка";
    },
    errorPhone() {
      if (!this.v$.phone.$error) return "";
      if (this.v$.phone.required.$invalid) return "Поле не заполнено";
      if (this.v$.phone.phoneValidate.$invalid)
        return "Неверный формат телефона";
      return "Неизвестная ошибка";
    },
  },
  validations: () => ({
    phone: { required, phoneValidate },
    password: { required, minLength: minLength(8) },
  }),
  methods: {
    sendForm() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      const data = {
        phone: this.phone.replace(/\D/g, ""),
        password: this.password,
      };
      console.log(data);

      this.errorText = "";

      // send data
      localStorage.token = "123";
      this.$store.commit("setUserData", {
        name: "Антон",
        surname: "Аглушевич",
        email: "ant-agl@ya.ru",
        phone: "79131535220",
        cities: [],
      });
      this.$router.push("/");
    },
  },
};
</script>
