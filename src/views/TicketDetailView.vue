<template>
  <AppLoader v-if="loading" />

  <div v-else>
    <div class="header">
      <h1 class="title">
        <img
          v-if="currentTicket.relapse"
          src="@/assets/img/icons/warning.svg"
          alt="Рецидив"
          class="title__warning"
        />
        <span>
          Тикет #{{ currentTicket.id }}
          <span class="title__date">от&nbsp;{{ formatDate }}</span>
        </span>
      </h1>

      <AppDropSelect
        v-if="currentTicket.status == 'opened'"
        :list="statusesArray"
        v-model="selectStatus"
        :class="selectStatus"
      />
      <TicketStatus v-else :status="currentTicket.status" />
    </div>

    <div class="ticket-detail">
      <ShopDetail :ticket="currentTicket" />
      <ProductDetail :ticket="currentTicket" />
      <UserDetail :ticket="currentTicket" />
    </div>
  </div>

  <ModalReason
    :active="modalReason"
    @close="closeReason"
    @confirm="confirmReason"
  />
  <ModalConfirm
    :active="modalConfirm"
    @close="closeConfirm"
    @confirm="confirmConfirm"
  />
</template>

<script>
import AppLoader from "@/components/AppLoader";
import TicketStatus from "@/components/TicketStatus";
import ShopDetail from "@/components/ShopDetail";
import ProductDetail from "@/components/ProductDetail";
import UserDetail from "@/components/UserDetail";
import AppDropSelect from "@/components/AppDropSelect";
import ModalReason from "@/components/ModalReason";
import ModalConfirm from "@/components/ModalConfirm";

import { mapGetters } from "vuex";

export default {
  components: {
    AppLoader,
    TicketStatus,
    ShopDetail,
    ProductDetail,
    UserDetail,
    AppDropSelect,
    ModalReason,
    ModalConfirm,
  },
  data: () => ({
    loading: true,
    selectStatus: "opened",
    modalReason: false,
    modalConfirm: false,
  }),
  computed: {
    ...mapGetters(["tickets", "statuses"]),
    currentTicket() {
      return (
        this.tickets.find((t) => t.id == this.$route.params.ticketId) ?? {}
      );
    },
    formatDate() {
      if (!this.currentTicket.date) return "";
      return this.$moment(this.currentTicket.date).format("DD.MM.YYYY HH:mm");
    },
    statusesArray() {
      let res = [];
      for (let status in this.statuses) {
        res.push({
          id: status,
          label: this.statuses[status],
        });
      }
      return res;
    },
  },
  watch: {
    selectStatus(status) {
      if (status == "refused") this.modalReason = true;
      else if (status == "closed") this.modalConfirm = true;
    },
  },
  methods: {
    closeReason() {
      this.modalReason = false;
      this.selectStatus = "opened";
    },
    confirmReason() {
      this.$store.commit("updateTicket", {
        id: this.currentTicket.id,
        data: {
          status: "refused",
        },
      });
    },
    closeConfirm() {
      this.modalConfirm = false;
      this.selectStatus = "opened";
    },
    confirmConfirm() {
      this.$store.commit("updateTicket", {
        id: this.currentTicket.id,
        data: {
          status: "closed",
        },
      });
    },
  },
  async mounted() {
    // if (!this.currentTicket.id) await ...
    setTimeout(() => {
      if (this.currentTicket.id === undefined) this.$router.replace("/");
      this.loading = false;
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  gap: 7px;
}
.title__warning {
  min-width: 30px;
  max-width: 30px;
  vertical-align: middle;
}
.title__date {
  font-size: 0.6em;
  opacity: 0.6;
}
.ticket-detail {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
