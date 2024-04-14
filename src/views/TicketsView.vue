<template>
  <div class="header">
    <h1 class="title">Тикеты</h1>
  </div>

  <AppLoader v-if="loading" />

  <AppTable v-else-if="tickets.length > 0" class="show">
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

    <TicketsTableItem
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
    />
  </AppTable>

  <AppZero v-else class="show">Созданных тикетов пока нет</AppZero>
</template>

<script>
import AppLoader from "@/components/AppLoader";
import AppTable from "@/components/AppTable";
import TicketsTableItem from "@/components/TicketsTableItem";
import AppZero from "@/components/AppZero";

import { mapGetters } from "vuex";

export default {
  components: { AppLoader, AppTable, TicketsTableItem, AppZero },
  data: () => ({
    loading: true,
    sortType: "desc",
    sortField: "date",
    fields: [
      { id: "id", label: "ID" },
      { id: "date", label: "Дата" },
      { id: "shop", label: "Магазин" },
      { id: "address", label: "Адрес" },
      { id: "product", label: "Товар" },
      { id: "priceRecommend", label: "Рек. цена" },
      { id: "priceCurrent", label: "Тек. цена" },
      { id: "status", label: "Статус" },
      { id: "count", label: "Кол-во" },
    ],
    fieldsMin: ["id", "count"],
    fieldsSort: ["id", "date", "status", "count"],
  }),
  computed: {
    ...mapGetters(["tickets"]),
  },
  methods: {
    changeSort(field) {
      if (field == this.sortField && this.sortType == "desc") {
        this.sortType = "asc";
      } else {
        this.sortType = "desc";
      }
      this.sortField = field;

      // refresh table
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 400);
  },
};
</script>

<style scoped>
@import "@/assets/css/tableItem.css";
</style>
