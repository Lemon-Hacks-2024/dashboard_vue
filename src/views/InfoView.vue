<template>
  <div class="header">
    <h1 class="title">Информация</h1>
  </div>

  <AppLoader v-if="loading" />

  <div v-else class="info-list">
    <InfoBlock title="Всего пользователей" value="5" unit="чел." />
    <InfoBlock title="Всего обращений" value="542" unit="раза" />
    <InfoBlock title="Успешных обращений" value="344" unit="раза" />
    <InfoBlock title="Ошибочных обращений" value="198" unit="раза" />
    <InfoBlock title="Обращений за текущию неделю" value="45" unit="раз" />
  </div>
</template>

<script>
import AppLoader from "@/components/AppLoader";
import InfoBlock from "@/components/InfoBlock";

export default {
  components: { AppLoader, InfoBlock },
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  },
};
</script>

<style scoped>
.info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}
</style>
