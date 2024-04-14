<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <slot name="head"></slot>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  border-radius: 8px;
  border: 1px solid #919eab3d;
  overflow-x: auto;
}
.table {
  border-collapse: collapse;
  width: 100%;
}
.table thead {
  background-color: #f0f3f5;
}
:slotted(.table thead th) {
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #637381;
  text-align: left;
}
:slotted(.table th),
:slotted(.table td) {
  padding: 12px 16px;
  white-space: nowrap;
}
:slotted(.table th:first-child) {
  border-top-left-radius: 7px;
}
:slotted(.table th:last-child) {
  border-top-right-radius: 7px;
}
:slotted(.table tbody tr:last-child td:first-child) {
  border-bottom-left-radius: 7px;
}
:slotted(.table tbody tr:last-child td:last-child) {
  border-bottom-right-radius: 7px;
}
:slotted(.table td) {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
:slotted(.table tbody tr) {
  transition: 0.2s;
}
:slotted(.table tbody tr:hover) {
  background-color: #f9fafb;
}
</style>
