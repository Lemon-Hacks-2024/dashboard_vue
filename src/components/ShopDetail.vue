<template>
  <DataDetail title="О магазине">
    <DetailField title="Название магазина">{{ ticket.shop }}</DetailField>
    <DetailField title="Адрес">{{ ticket.address }}</DetailField>
    <DetailField title="Почта">{{ ticket.email }}</DetailField>
    <DetailField title="Кол-во обращений">{{ ticket.countShop }}</DetailField>
    <DetailField title="Кол-во рецедивов">
      {{ ticket.relapseCount }}
    </DetailField>
  </DataDetail>
</template>

<script>
import DataDetail from "@/components/DataDetail";
import DetailField from "@/components/DetailField";

export default {
  components: { DataDetail, DetailField },
  props: {
    ticket: Object,
  },
};
</script>
