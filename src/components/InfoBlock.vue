<template>
  <div class="info-block">
    <h5 class="info-block__title">{{ title }}</h5>
    <div class="info-block__number">
      {{ value }} <span>{{ unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    unit: String,
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  border-radius: 20px;
  box-shadow: 0px 2px 6px 0 rgb(0, 54, 73, 0.3);
  width: 250px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f8fdff;

  &__title {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.6;
  }
  &__number {
    font-size: 40px;
    font-weight: bold;

    span {
      font-size: 18px;
      opacity: 0.5;
    }
  }
}
</style>
