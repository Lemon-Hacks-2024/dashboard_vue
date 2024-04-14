import { createStore } from "vuex";
import user from "./user";
import tickets from "./tickets";
import executors from "./executors";
import template from "./template";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    clearData({ commit }) {
      delete localStorage.token;
      commit("setUserData", {});
      commit("setTickets", []);
      commit("setExecutors", []);
    },
  },
  modules: { user, tickets, executors, template },
});
