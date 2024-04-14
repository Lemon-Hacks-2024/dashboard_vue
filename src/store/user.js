export default {
  state: {
    user: {
      name: "Антон",
      surname: "Аглушевич",
      email: "ant-agl@ya.ru",
      phone: "79131535220",
      cities: [],
    },
  },
  getters: {
    user: (s) => s.user,
  },
  mutations: {
    setUserData(s, user) {
      s.user = user;
    },
  },
  actions: {},
};
