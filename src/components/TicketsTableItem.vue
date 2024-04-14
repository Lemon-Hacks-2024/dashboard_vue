<template>
  <tr
    @click="$router.push('/' + ticket.id)"
    class="main-row"
    :class="{ relapse: ticket.relapse }"
  >
    <td>{{ ticket.id }}</td>
    <td>{{ $moment(ticket.date).format("DD.MM.YYYY HH:mm") }}</td>
    <td>{{ ticket.shop }}</td>
    <td>{{ ticket.address }}</td>
    <td>{{ ticket.product }}</td>
    <td>{{ ticket.priceRecommend }} руб.</td>
    <td>{{ ticket.priceCurrent }} руб.</td>
    <td>
      <TicketStatus :status="ticket.status" />
    </td>
    <td>
      <span class="circle" :class="{ attention: ticket.count > 1 }">
        {{ ticket.count }}
      </span>
    </td>
  </tr>
</template>

<script>
import TicketStatus from "@/components/TicketStatus";

export default {
  components: { TicketStatus },
  props: {
    ticket: Object,
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  &.attention {
    background-color: #ffd19f;
  }
}
.relapse {
  background-color: #ffe3e3;
  &:hover {
    background-color: #ffcfcf !important;
  }
}
</style>
