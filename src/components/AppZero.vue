<template>
  <div class="zero">
    <p><slot></slot></p>
    <AppBtn v-if="isBtn" @click.prevent="$emit('create')">Добавить</AppBtn>
  </div>
</template>

<script>
import AppBtn from "./AppBtn.vue";
export default {
  emits: ["create"],
  components: { AppBtn },
  props: {
    isBtn: Boolean,
  },
};
</script>

<style scoped>
.zero {
  padding: 40px;
  width: 100%;
  background-color: #eef7ff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  border-radius: 7px;
}
.zero p {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #49647c;
}
</style>
