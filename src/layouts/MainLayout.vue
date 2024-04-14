<template>
  <div class="main-layout">
    <AppSidebar :open="isSidebar" @close="isSidebar = false" />

    <div class="main-layout__content">
      <router-view v-slot="{ Component, route }">
        <Transition appear>
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>

      <img
        @click="isSidebar = true"
        class="menu"
        src="@/assets/img/icons/menu.svg"
      />
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/AppSidebar";

export default {
  components: { AppSidebar },
  data: () => ({
    isSidebar: false,
  }),
};
</script>

<style lang="scss" scoped>
.main-layout {
  background-color: var(--main-light-color);
  height: 100vh;
  display: flex;
  overflow: hidden;

  &__content {
    width: 100%;
    overflow-y: auto;
    padding: 40px 70px;
    position: relative;

    @media (max-width: 600px) {
      padding: 20px 15px;
    }

    :deep(.title) {
      font-weight: 600;
      font-size: 34px;

      @media (max-width: 600px) {
        font-size: 24px;
      }
    }
    :deep(.header) {
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 800px) {
        padding-right: 50px;
      }
      @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
    :deep(.wrap-btns) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 15px;
      margin-top: 20px;
    }
  }
}
.menu {
  display: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 45px;
  right: 70px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }
  @media (max-width: 600px) {
    top: 25px;
    right: 15px;
  }
  @media (max-width: 800px) {
    display: block;
  }
}
</style>
