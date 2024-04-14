<template>
  <div class="data-detail">
    <div class="data-detail__header">
      <h3 class="data-detail__title">{{ title }}</h3>

      <slot name="header"></slot>
    </div>

    <div class="data-detail__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.data-detail {
  &__header {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 15px;
  }

  &__title {
    font-size: 24px;

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
