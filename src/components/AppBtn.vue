<template>
  <button
    type="submit"
    class="btn primary"
    :class="classes"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    classes: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 16px;
  line-height: 24px;
  font-weight: 600;
  font-size: 14px;
  transition: 0.2s;
  cursor: pointer;
  background-color: #dfe3e8;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #c4cdd5;
  }

  &.auth {
    padding: 12px 20px;
    font-size: 16px;
  }

  &.primary {
    background-color: #0088ff;
    color: #fff;

    &:hover {
      background-color: #29998c;
    }
  }

  &.second {
    background-color: #212b36;
    color: #fff;

    &:hover {
      background-color: #454f5b;
    }
  }

  &.success {
    background-color: #54d62c;
  }

  &.success:hover {
    background-color: #229a16;
  }

  &.warning {
    background-color: #ffc107;
  }

  &.warning:hover {
    background-color: #b78103;
  }

  &.danger {
    background-color: #ff4842;
    color: #fff;
  }

  &.danger:hover {
    background-color: #b72136;
  }

  &.outline {
    background-color: #fff;
    color: #212b36;
    border-color: #919eab66;
  }

  &.outline:hover {
    background-color: #eee;
  }

  &.white {
    background-color: #fff;
    color: #212b36;
  }

  &.white:hover {
    background-color: #eee;
  }

  &.gray {
    background-color: #dfe3e8;
    color: #212b36;
  }

  &.gray:hover {
    background-color: #c4cdd5;
  }

  &.small {
    padding: 5px 10px;
    gap: 4px;
    font-size: 13px;
    line-height: 22px;
  }

  &[disabled] {
    background-color: #919eab3d;
    color: #919eabcc;
    cursor: not-allowed;
    &:hover {
      background-color: #919eab3d;
    }
  }

  &.load,
  &.load[disabled] {
    background-color: #919eabcc;
    color: #fff;
    cursor: default;
  }

  :deep(img) {
    // width: 20px;
    height: 20px;
  }
}
</style>
