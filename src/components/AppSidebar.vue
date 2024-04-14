<template>
  <div class="sidebar" :class="{ open }">
    <div class="sidebar__name">
      <span>{{ user.name }} {{ user.surname }}</span>
      <img @click="$emit('close')" src="@/assets/img/icons/cross.svg" />
    </div>

    <div class="sidebar__links">
      <router-link
        v-for="link in sidebarLinks"
        :key="link.label"
        :to="link.link"
        @click="$emit('close')"
        class="sidebar__link hover"
      >
        <img :src="link.icon" :alt="link.label" />
        <span>{{ link.label }}</span>
      </router-link>
    </div>

    <a href="#" @click.prevent="modalLogout = true" class="sidebar__logout">
      Выйти
    </a>
  </div>

  <ModalLogout
    :active="modalLogout"
    @close="modalLogout = false"
    @logout="logout"
  />
</template>

<script>
import ModalLogout from "@/components/ModalLogout";

import { mapGetters } from "vuex";

export default {
  emits: ["close"],
  components: { ModalLogout },
  props: {
    open: Boolean,
  },
  data() {
    return {
      modalLogout: false,
      sidebarLinks: [
        {
          icon: require("@/assets/img/icons/list.svg"),
          label: "Тикеты",
          link: "/",
        },
        {
          icon: require("@/assets/img/icons/chart.svg"),
          label: "Информация",
          link: "/info",
        },
        {
          icon: require("@/assets/img/icons/users.svg"),
          label: "Исполнители",
          link: "/executors",
        },
        {
          icon: require("@/assets/img/icons/settings.svg"),
          label: "Обновить цены",
          link: "/prices",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("clearData");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 265px;
  max-width: 265px;
  min-height: 100vh;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.27);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  animation: occurrence 0.5s ease both;

  @media (max-width: 800px) {
    position: fixed;
    min-width: auto;
    max-width: none;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 9;
    animation: none;
    box-shadow: none;
    left: 100%;
    transition: 0.3s;

    &.open {
      left: 0;
      right: 0;
    }
  }

  &__name {
    padding: 13px 20px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      min-width: 20px;
      max-width: 20px;
      cursor: pointer;
      display: none;

      @media (max-width: 800px) {
        display: block;
      }
    }
  }

  &__logo {
    padding: 14px 20px;
    img {
      max-width: 150px;
      display: block;
    }
  }
  &__links {
  }
  &__link {
    padding: 13px 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 15px;
    color: #000;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    position: relative;

    img {
      min-width: 20px;
      max-width: 20px;
    }
  }
  &__footer {
    margin-top: auto;
  }

  &__logout {
    color: #ff4842;
    display: inline-block;
    padding: 13px 20px;
    margin-top: auto;
  }
}
.profile {
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &__line {
    height: 2px;
    width: 100%;
    position: absolute;
    left: 0;
    background-image: linear-gradient(
      90deg,
      #b3b2b2 0%,
      rgba(49, 49, 49, 0) 100%
    );
    &_start {
      top: 0;
    }
    &_end {
      bottom: 0;
    }
  }

  &__name {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 1.1;
  }
  &__desc {
    font-size: 13px;
    color: #929292;
    line-height: 1.1;
  }
}

@media (hover: hover) {
  .hover {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      max-width: 0;
      top: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(214, 222, 243, 0.532) 0%,
        rgba(49, 49, 49, 0) 100%
      );
      transition: 0.2s;
      z-index: 0;
    }

    * {
      transition: 0.3s;
    }
    &:hover {
      &::before {
        max-width: 100%;
      }
      > * {
        transform: translateX(10px);
      }
    }
  }
}

@keyframes occurrence {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
