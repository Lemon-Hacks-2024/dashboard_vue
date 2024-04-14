<template>
  <AppModal :active="active" title="Укажите причину отмены" @close="close">
    <form @submit.prevent="sendForm" class="form">
      <AppTextarea
        placeholder="Причина отмены"
        v-model="reason"
        :isError="v$.reason.$error"
        errorText="Поле не заполнено"
      />

      <div class="form__footer">
        <AppBtn class="gray" @click.prevent="close">Отмена</AppBtn>
        <AppBtn class="danger">Подтвердить</AppBtn>
      </div>
    </form>
  </AppModal>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppBtn from "@/components/AppBtn";
import AppTextarea from "@/components/AppTextarea";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  emits: ["close", "confirm"],
  setup: () => ({
    v$: useVuelidate(),
  }),
  components: { AppModal, AppBtn, AppTextarea },
  props: {
    active: Boolean,
  },
  data: () => ({
    reason: "",
  }),
  validations: () => ({
    reason: { required },
  }),
  methods: {
    close() {
      setTimeout(() => {
        this.reason = "";
        this.v$.$reset();
      }, 200);
      this.$emit("close");
    },
    sendForm() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }

      let data = {
        reason: this.reason,
      };
      console.log(data);
      this.$emit("confirm");
      this.close();
    },
  },
};
</script>
