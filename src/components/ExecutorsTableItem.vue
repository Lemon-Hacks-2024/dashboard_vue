<template>
  <tr class="main-row">
    <td>{{ executor.id }}</td>
    <td>{{ executor.name }} {{ executor.lastname }}</td>
    <td>{{ executor.email }}</td>
    <td>{{ executor.phone }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    executor: Object,
  },
};
</script>

<style scoped>
.main-row {
  cursor: default;
}
</style>
