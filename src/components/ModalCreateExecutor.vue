<template>
  <AppModal :active="active" title="Добавление исполнителя" @close="close">
    <form @submit.prevent="sendForm" class="form">
      <AppInput
        placeholder="Имя"
        v-model="name"
        :isError="v$.name.$error"
        errorText="Поле не заполнено"
      />
      <AppInput
        placeholder="Фамилия"
        v-model="lastname"
        :isError="v$.lastname.$error"
        errorText="Поле не заполнено"
      />
      <AppInput
        placeholder="Почта"
        v-model="email"
        :isError="v$.email.$error"
        :errorText="errorEmail"
      />
      <AppInput
        placeholder="Телефон"
        v-model="phone"
        v-mask="'+7 ### ### ## ##'"
        :isError="v$.phone.$error"
        :errorText="errorPhone"
      />
      <AppInput
        placeholder="Пароль"
        type="password"
        v-model="password"
        :isError="v$.password.$error"
        :errorText="errorPassword"
      />

      <div class="form__footer">
        <AppBtn class="gray" @click="close">Отмена</AppBtn>
        <AppBtn>Добавить</AppBtn>
      </div>
    </form>
  </AppModal>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppBtn from "@/components/AppBtn";
import AppInput from "@/components/AppInput";

import { mask } from "vue-the-mask";

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
const phoneValidate = (value) => {
  const phone = value.replace(/\D/g, "");
  const isPhone = phone.length >= 11;
  return isPhone;
};

export default {
  directives: { mask },
  emits: ["close", "logout"],
  setup: () => ({
    v$: useVuelidate(),
  }),
  components: { AppModal, AppBtn, AppInput },
  props: {
    active: Boolean,
  },
  data: () => ({
    lastname: "",
    name: "",
    email: "",
    phone: "",
    password: "",
  }),
  computed: {
    errorPassword() {
      if (!this.v$.password.$error) return "";
      if (this.v$.password.required.$invalid) return "Поле не заполнено";
      if (this.v$.password.minLength.$invalid)
        return `Минимальная длина пароля ${this.v$.password.minLength.$params.min} символов`;
      return "Неизвестная ошибка";
    },
    errorEmail() {
      if (!this.v$.email.$error) return "";
      if (this.v$.email.required.$invalid) return "Поле не заполнено";
      if (this.v$.email.email.$invalid) return "Неверный формат почты";
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
    name: { required },
    lastname: { required },
    email: { required, email },
    phone: { required, phoneValidate },
    password: { required, minLength: minLength(8) },
  }),
  methods: {
    close() {
      setTimeout(() => {
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.password = "";
        this.v$.$reset();
      }, 200);
      this.$emit("close");
    },
    sendForm() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      const data = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone.replace(/\D/g, ""),
        password: this.password,
      };
      console.log(data);

      this.$store.commit("addExecutor", data);
      this.close();
    },
  },
};
</script>
