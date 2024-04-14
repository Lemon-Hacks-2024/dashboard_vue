<template>
  <tr class="main-row">
    <td>{{ row.id }}</td>
    <td>{{ row.title }}</td>
    <td>{{ row.unit }}</td>
    <td>{{ row.price }} руб.</td>
  </tr>
</template>

<script>
export default {
  props: {
    row: Object,
  },
};
</script>

<style scoped>
.main-row {
  cursor: default;
}
</style>
