import { createStore } from "vuex";
import home from "./modules/home";
import { IHomeState } from "@/typings/home";

export interface IGlobalState {
  home: IHomeState;
}

export default createStore<IGlobalState>({
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
