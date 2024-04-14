<template>
  <div class="status" :class="[status]">
    {{ statuses[status] }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["statuses"]),
  },
};
</script>

<style lang="scss" scoped>
.status {
  padding: 5px 8px;
  border-radius: 5px;
  display: inline-block;

  &.refused {
    background-color: #ff9797;
    color: #7e1919;
  }
  &.opened {
    background-color: #a2ff95;
    color: #0a600a;
  }
  &.closed {
    background-color: #e6e6e6;
    color: #000;
  }
}
</style>
