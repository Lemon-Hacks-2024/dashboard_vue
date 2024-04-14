<template>
  <div class="auth-layout">
    <h1 class="auth-layout__title">Контролируем цены вместе</h1>
    <router-view v-slot="{ Component, route }">
      <Transition appear>
        <div class="auth-content" id="auth-content" :key="route.name">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped>
.auth-layout__title {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
.auth-layout {
  background-color: #f0f3f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
}
.auth-content {
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 488px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto 0;
}
@media (max-width: 700px) {
  .auth-content {
    padding: 30px 20px;
  }
}

:deep(.title) {
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  color: #212b36;
}
:deep(.desc) {
  font-size: 16px;
  line-height: 24px;
  color: #212b36;
}
:deep(.socials) {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
:deep(.socials__item) {
  border: 1px solid #919eab66;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  transition: 0.2s;
}
:deep(.socials__item:hover) {
  background-color: #0088ff;
}
:deep(.socials__icon) {
  width: 32px;
  border-radius: 100px;
  background-color: #fff;
}
:deep(.form) {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
:deep(.form__links) {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  line-height: 22px;
}
:deep(.form .btn) {
  margin-top: 8px;
}
:deep(.link_back) {
  padding: 3px 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  margin-bottom: 8px;
}
:deep(.link_back span) {
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
}
:deep(.agreeText) {
  font-size: 13px;
  line-height: 16px;
  color: #212b36;
}
:deep(.form__row) {
  display: flex;
  gap: 16px;
}

:deep(.error-text) {
  color: #ff4842;
  font-size: 15px;
}
</style>
