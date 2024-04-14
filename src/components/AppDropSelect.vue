<template>
  <div class="select" :class="{ active: isActive }">
    <div class="select__label" ref="menuBtn" @click="isActive = !isActive">
      <span>{{ activeLabel }}</span>
      <img src="@/assets/img/icons/arr-down.svg" />
    </div>
    <div class="select__list">
      <div
        v-for="item in list"
        :key="item.id"
        class="select__item"
        @mousedown="
          $emit('update:modelValue', item.id);
          isActive = false;
        "
      >
        {{ item.label }}

        <img
          v-if="item.id == modelValue"
          src="@/assets/img/icons/check-line.svg"
          class="select__check"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    list: Array,
    modelValue: [Number, String],
  },
  data: () => ({
    isActive: false,
  }),
  computed: {
    activeLabel() {
      if (this.list.length == 0 || this.modelValue === "") return "";
      return this.list.find((l) => l.id == this.modelValue).label;
    },
  },
  methods: {
    closeMenu(e) {
      if (!this.$refs.menuBtn.contains(e.target)) this.isActive = false;
    },
  },
  mounted() {
    document.body.addEventListener("click", this.closeMenu);
  },
  unmounted() {
    document.body.removeEventListener("click", this.closeMenu);
  },
};
</script>

<style scoped>
.select {
  position: relative;
}
.select.refused .select__label {
  background-color: #ff9797;
  color: #7e1919;
}
.select.opened .select__label {
  background-color: #a2ff95;
  color: #0a600a;
}
.select.closed .select__label {
  background-color: #e6e6e6;
  color: #000;
}

.select.filter .select__label {
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  background-color: #fff;
  cursor: pointer;
  padding: 3px 10px;
  border: 1px solid #919eab66;
  border-radius: 8px;
}
.select__label {
  border-radius: 8px;
  background-color: #dfe3e8;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;
}
.select__label:hover {
  background-color: #c4cdd5;
}
.select__label img {
  transition: 0.2s;
  width: 18px;
}
.select.active .select__label img {
  transform: rotate(180deg);
}
.select__list {
  position: absolute;
  top: 105%;
  transform-origin: top center;
  transform: scaleY(0);
  opacity: 0;
  right: 0;
  width: 100%;
  min-width: 150px;
  max-height: 240px;
  overflow-y: auto;
  transition: 0.2s;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px #161c2433, 0px 0px 2px 0px #161c241a;
  border-radius: 4px;
  font-size: 13px;
  line-height: 22px;
}
@media (max-width: 600px) {
  .select__list {
    right: auto;
    left: 0;
  }
}
.select__item {
  transition: 0.2s;
  padding: 5px 12px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select__item:hover {
  background-color: #f0fbff;
}
.select__check {
  width: 16px;
}

.select.active .select__list {
  transform: scaleY(1);
  opacity: 1;
}
</style>
