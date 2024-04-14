<template>
  <div class="header">
    <h1 class="title">Цены</h1>

    <div class="wrap-btns">
      <AppBtn>
        <img src="@/assets/img/icons/cloud-arrow.svg" />
        <span>Загрузить файл</span>
      </AppBtn>
      <AppBtn class="gray">
        <img src="@/assets/img/icons/arrow-circle.svg" />
        <span>Скачать шаблон</span>
      </AppBtn>
    </div>
  </div>

  <AppLoader v-if="loading" />

  <AppTable v-else class="show">
    <template v-slot:head>
      <tr class="thead">
        <th
          v-for="field in fields"
          :key="field.id"
          :class="{ 'min-w': fieldsMin.includes(field.id) }"
        >
          <span>{{ field.label }}</span>
        </th>
      </tr>
    </template>

    <TemplateTableItem v-for="row in template" :key="row.id" :row="row" />
  </AppTable>
</template>

<script>
import AppBtn from "@/components/AppBtn";
import AppTable from "@/components/AppTable";
import TemplateTableItem from "@/components/TemplateTableItem";
import AppLoader from "@/components/AppLoader";

import { mapGetters } from "vuex";

export default {
  components: { AppBtn, AppLoader, AppTable, TemplateTableItem },
  data: () => ({
    loading: true,
    fields: [
      { id: "id", label: "#" },
      { id: "title", label: "Наименование товара/группы товаров" },
      { id: "unit", label: "Ед. изм." },
      { id: "price", label: "Цена региона-аналога (Ростова-на-Дону)" },
    ],
    fieldsMin: ["id", "unit"],
  }),
  computed: {
    ...mapGetters(["template"]),
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
