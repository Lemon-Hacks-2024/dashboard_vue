<template>
  <AppModal
    :active="active"
    title="Забанить пользователя?"
    @close="$emit('close')"
  >
    <template #footer>
      <AppBtn class="gray" @click="$emit('close')">Отмена</AppBtn>
      <AppBtn class="danger" @click="$emit('ban')">Забанить</AppBtn>
    </template>
  </AppModal>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppBtn from "@/components/AppBtn";

export default {
  emits: ["close", "ban"],
  components: { AppModal, AppBtn },
  props: {
    active: Boolean,
  },
};
</script>
