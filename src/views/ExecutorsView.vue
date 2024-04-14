<template>
  <div class="header">
    <h1 class="title">Исполнители</h1>
    <AppBtn @click="modalCreateExecutor = true">Добавить</AppBtn>
  </div>

  <AppLoader v-if="loading" />

  <AppTable v-else-if="executors.length > 0" class="show">
    <template v-slot:head>
      <tr class="thead">
        <th
          v-for="field in fields"
          :key="field.id"
          :class="{ 'min-w': fieldsMin.includes(field.id) }"
        >
          <div class="th-flex">
            <span>{{ field.label }}</span>
            <img
              v-if="fieldsSort.includes(field.id)"
              src="@/assets/img/icons/arr-sort.svg"
              class="th-icon"
              :class="{
                reverse: sortType == 'desc',
                active: sortField == field.id,
              }"
              @click="changeSort(field.id)"
            />
          </div>
        </th>
      </tr>
    </template>

    <ExecutorsTableItem
      v-for="executor in executors"
      :key="executor.id"
      :executor="executor"
    />
  </AppTable>

  <AppZero
    v-else
    :isBtn="true"
    class="show"
    @create="modalCreateExecutor = true"
    >Исполнителей пока нет</AppZero
  >

  <ModalCreateExecutor
    :active="modalCreateExecutor"
    @close="modalCreateExecutor = false"
  />
</template>

<script>
import AppLoader from "@/components/AppLoader";
import AppZero from "@/components/AppZero";
import AppBtn from "@/components/AppBtn";
import AppTable from "@/components/AppTable";
import ExecutorsTableItem from "@/components/ExecutorsTableItem";
import ModalCreateExecutor from "@/components/ModalCreateExecutor";

import { mapGetters } from "vuex";

export default {
  components: {
    AppLoader,
    AppZero,
    AppBtn,
    ModalCreateExecutor,
    AppTable,
    ExecutorsTableItem,
  },
  data: () => ({
    loading: true,
    modalCreateExecutor: false,
    sortType: "asc",
    sortField: "id",
    fields: [
      { id: "id", label: "ID" },
      { id: "name", label: "Имя" },
      { id: "email", label: "Почта" },
      { id: "phone", label: "Телефон" },
    ],
    fieldsMin: ["id"],
    fieldsSort: ["id"],
  }),
  computed: {
    ...mapGetters(["executors"]),
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  },
};
</script>

<style scoped>
@import "@/assets/css/tableItem.css";
</style>
