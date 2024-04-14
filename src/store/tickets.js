export default {
  state: {
    tickets: [
      {
        id: 0,
        shop: "Пятерочка",
        date: new Date().getTime(),
        address: "г. Ростов, ул. Гагарина, д. 1",
        product: "Мука",
        priceRecommend: 40.6,
        priceCurrent: 50,
        status: "opened",
        count: 1,
        countShop: 1,
        relapse: false,
        relapseCount: 0,
        email: "shop1@ya.ru",
        img: "https://mstlife.by/wp-content/uploads/2021/03/cennik-696x520.jpg",
        imgClose:
          "https://static.dreamkas.ru/blog/cenniki/price-tag-mistake-3.jpg",
        name: "Anton",
        surname: "Aglushevich",
        userEmail: "ant-agl@ya.ru",
        userPhone: "+7 913 153-52-20",
        countSuccessOrder: 34,
        countErrorOrder: 1,
        userBan: false,
      },
      {
        id: 1,
        shop: "Магнит",
        date: new Date().getTime(),
        address: "Россия, г. Ростов-на-Дону, ул. Ленина, д. 132/3",
        product: "Лимон",
        priceRecommend: 10.1,
        priceCurrent: 12.1,
        status: "closed",
        count: 1,
        countShop: 1,
        relapse: false,
        relapseCount: 0,
        email: "shop2@ya.ru",
        img: "https://mstlife.by/wp-content/uploads/2021/03/cennik-696x520.jpg",
        imgClose:
          "https://static.dreamkas.ru/blog/cenniki/price-tag-mistake-3.jpg",
        name: "Anton",
        surname: "Aglushevich",
        userEmail: "ant-agl@ya.ru",
        userPhone: "+7 913 153-52-20",
        countSuccessOrder: 34,
        countErrorOrder: 1,
        userBan: true,
      },
      {
        id: 2,
        shop: "Пятерочка",
        date: new Date().getTime(),
        address: "г. Ростов, ул. Петренко, д. 2",
        product: "Хлеб",
        priceRecommend: 20,
        priceCurrent: 70,
        status: "refused",
        count: 3,
        countShop: 1,
        relapse: true,
        relapseCount: 1,
        email: "shop3@ya.ru",
        img: "https://mstlife.by/wp-content/uploads/2021/03/cennik-696x520.jpg",
        imgClose:
          "https://static.dreamkas.ru/blog/cenniki/price-tag-mistake-3.jpg",
        name: "Anton",
        surname: "Aglushevich",
        userEmail: "ant-agl@ya.ru",
        userPhone: "+7 913 153-52-20",
        countSuccessOrder: 34,
        countErrorOrder: 1,
        userBan: false,
      },
    ],
    statuses: {
      refused: "Отмена",
      opened: "Открыт",
      closed: "Закрыт",
    },
  },
  getters: {
    tickets: (s) => s.tickets,
    statuses: (s) => s.statuses,
  },
  mutations: {
    setTickets(s, tickets) {
      s.tickets = tickets;
    },
    updateTicket(s, { id, data }) {
      const ticket = s.tickets.find((t) => t.id == id);
      for (let key in data) {
        ticket[key] = data[key];
      }
    },
  },
  actions: {},
};
