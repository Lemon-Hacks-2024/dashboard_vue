<template>
  <DataDetail title="О пользователе">
    <template #header v-if="!ticket.userBan">
      <AppBtn @click="modalBan = true" class="danger">Забанить</AppBtn>
    </template>

    <DetailField title="Имя">
      {{ ticket.name }} {{ ticket.surname }}
    </DetailField>
    <DetailField title="Почта">
      {{ ticket.userEmail }}
    </DetailField>
    <DetailField title="Телефон">
      {{ ticket.userPhone }}
    </DetailField>
    <DetailField title="Кол-во успешных заявок">
      {{ ticket.countSuccessOrder }}
    </DetailField>
    <DetailField title="Кол-во ошибочных заявок">
      {{ ticket.countErrorOrder }}
    </DetailField>
  </DataDetail>

  <ModalBan :active="modalBan" @close="modalBan = false" @ban="ban" />
</template>

<script>
import DataDetail from "@/components/DataDetail";
import DetailField from "@/components/DetailField";
import AppBtn from "@/components/AppBtn";
import ModalBan from "@/components/ModalBan";

export default {
  components: { DataDetail, DetailField, AppBtn, ModalBan },
  props: {
    ticket: Object,
  },
  data: () => ({
    modalBan: false,
  }),
  methods: {
    ban() {
      console.log("ban");
      this.modalBan = false;
    },
  },
};
</script>
