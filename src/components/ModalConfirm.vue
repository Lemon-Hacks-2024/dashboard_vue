<template>
  <AppModal :active="active" title="Прикрепите фото" @close="close">
    <FilesUpload
      :files="file"
      @upload="upload"
      @removeFile="removeFile"
      :multiple="false"
    />

    <template #footer>
      <AppBtn class="gray" @click="close">Отмена</AppBtn>
      <AppBtn :disabled="disabledBtn" @click="sendForm">Подтвердить</AppBtn>
    </template>
  </AppModal>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppBtn from "@/components/AppBtn";
import FilesUpload from "@/components/FilesUpload";

export default {
  emits: ["close", "confirm"],
  components: { AppModal, AppBtn, FilesUpload },
  props: {
    active: Boolean,
  },
  data: () => ({
    file: [],
  }),
  computed: {
    disabledBtn() {
      return this.file.length == 0;
    },
  },
  methods: {
    close() {
      setTimeout(() => {
        this.file = [];
      }, 200);
      this.$emit("close");
    },
    upload(file) {
      this.file.push(...file);
    },
    removeFile(idx) {
      this.file.splice(idx, 1);
    },
    sendForm() {
      this.$emit("confirm");
      this.$emit("close");
    },
  },
};
</script>
