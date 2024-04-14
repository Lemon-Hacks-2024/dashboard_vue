<template>
  <div class="input-wrapper" :class="{ disabled: disabled }">
    <div class="input-text">
      <input
        :type="currentType"
        :value="modelValue"
        class="input-text__input"
        :class="{ fill: isFill, error: isError }"
        @input="$emit('update:modelValue', $event.target.value.trim())"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        ref="input"
      />
      <div v-if="placeholder != ''" class="input-text__placeholder">
        {{ placeholder }}
      </div>

      <button
        v-if="type == 'password'"
        class="icon"
        @click.prevent="changeType"
      >
        <img
          v-if="currentType == 'password'"
          src="@/assets/img/icons/close-eye.svg"
        />
        <img
          v-if="currentType == 'text'"
          src="@/assets/img/icons/open-eye.svg"
        />
      </button>

      <img v-if="icon" class="icon" :src="icon" @click="$refs.input.focus()" />
    </div>

    <Transition name="toggle" mode="out-in">
      <div v-if="isError && errorText" class="input-text__error">
        {{ errorText }}
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  emits: ["copy", "update:modelValue"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    modelValue: [String, Number],
    isError: Boolean,
    errorText: String,
    autocomplete: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    copy: Boolean,
    icon: String,
  },
  data: function () {
    return {
      currentType: this.type,
    };
  },
  computed: {
    isFill() {
      return this.modelValue !== "";
    },
  },
  methods: {
    changeType() {
      if (this.currentType == "password") this.currentType = "text";
      else this.currentType = "password";
    },
    copyText() {
      const input = this.$refs.input;
      input.select();
      input.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(input.value);

      this.$emit("copy");
    },
  },
};
</script>

<style scoped>
.input-wrapper,
.input-text {
  position: relative;
  width: 100%;
}
.input-text__input {
  width: 100%;
  border: 1px solid #919eab66;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  position: relative;
  z-index: 1;
  transition: 0.2s;
}
.input-text__input[disabled] {
  background: #f9fafb;
  color: #919eab;
}
.input-text__placeholder {
  position: absolute;
  color: #919eab;
  top: 13px;
  left: 15px;
  transition: 0.2s;
  font-size: 16px;
  line-height: 24px;
  background-color: #fff;
  z-index: 0;
}
.small .input-text__input {
  padding: 8px 14px;
}
.small .input-text__placeholder {
  top: 9px;
}
.input-text__input:focus {
  outline: 1px solid #0088ff;
  border-color: #0088ff;
}
.input-text__input:focus + .input-text__placeholder,
.input-text__input.fill + .input-text__placeholder {
  top: 0;
  transform: translateY(-50%);
  left: 12px;
  font-size: 12px;
  line-height: 18px;
  z-index: 2;
  padding: 0 3px;
}
.input-text__input:focus + .input-text__placeholder {
  color: #0088ff;
}
.input-text__input.error {
  border-color: #ff4842;
  outline-color: #ff4842;
}
.input-text__input.error:focus + .input-text__placeholder,
.input-text__input.error.fill + .input-text__placeholder {
  color: #ff4842;
}
.input-text__error {
  color: #ff4842;
  font-size: 12px;
  line-height: 18px;
  margin-top: 6px;
}
.icon {
  position: absolute;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 24px;
  border: none;
  cursor: pointer;
  z-index: 2;
  padding: 0 8px 0 20px;
  background: #fff;
  cursor: pointer;
}
.icon img {
  opacity: 0.5;
  transition: 0.2s;
}
.icon:hover img {
  opacity: 1;
}
.input-wrapper.disabled .icon {
  background: #f9fafb;
}
</style>
