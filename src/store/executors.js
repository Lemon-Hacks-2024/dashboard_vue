export default {
  state: {
    executors: [
      {
        id: 0,
        name: "Anton",
        lastname: "Aglushevich",
        email: "ant-agl@ya.ru",
        phone: "+7 913 153-52-20",
      },
      {
        id: 1,
        name: "Семен",
        lastname: "Альбеев",
        email: "sm@ya.ru",
        phone: "+7 999 150-50-00",
      },
      {
        id: 2,
        name: "Дмитрий",
        lastname: "Битков",
        email: "bitkov@ya.ru",
        phone: "+7 900 000-99-99",
      },
    ],
  },
  getters: {
    executors: (s) => s.executors,
  },
  mutations: {
    setExecutors(s, executors) {
      s.executors = executors;
    },
    addExecutor(s, executor) {
      s.executors.push(executor);
    },
  },
  actions: {},
};
