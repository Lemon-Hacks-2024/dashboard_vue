export default {
  state: {
    template: [
      {
        id: 1,
        title: "Картофель",
        unit: "Кг",
        price: "31.57",
      },
      {
        id: 2,
        title: "Капуста белокочанная свежая",
        unit: "Кг",
        price: "42.68",
      },
      {
        id: 3,
        title: "Лук репчатый",
        unit: "Кг",
        price: "39.02",
      },
      {
        id: 4,
        title: "Свёкла столовая",
        unit: "Кг",
        price: "42.43",
      },
      {
        id: 5,
        title: "Морковь",
        unit: "Кг",
        price: "44.62",
      },
    ],
  },
  getters: {
    template: (s) => s.template,
  },
  mutations: {
    setTemplate(s, template) {
      s.template = template;
    },
  },
};
