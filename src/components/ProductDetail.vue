<template>
  <DataDetail title="О товаре">
    <DetailField title="Ценник">
      <img :src="ticket.img" alt="Ценник" />
    </DetailField>
    <DetailField title="Закрывающий ценник">
      <img :src="ticket.imgClose" alt="Закрывающий ценник" />
    </DetailField>
    <DetailField title="Рекомендуемая цена">
      {{ ticket.priceRecommend }} руб.
    </DetailField>
    <DetailField title="Текущая цена">
      {{ ticket.priceCurrent }} руб.
    </DetailField>
    <DetailField title="Кол-во обращений">{{ ticket.count }}</DetailField>
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
