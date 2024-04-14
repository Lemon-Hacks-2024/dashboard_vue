<template>
  <div class="field">
    <h6>{{ title }}</h6>
    <p><slot></slot></p>
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
.field {
  h6 {
    font-weight: 400;
    font-size: 18px;
  }
  p {
    font-size: 16px;
    color: #7d7d7d;

    :deep(img) {
      width: 400px;
      border-radius: 20px;
    }
  }
}
</style>
