import { Module } from "vuex";
import { Category, IHomeState } from "@/typings/home";
import { IGlobalState } from "..";

const state: IHomeState = {
  category: Category.Node,
  sliders: [],
  lessons: {
    hasMore: false,
    loading: false,
    offset: 0,
    limit: 5,
    list: [],
  },
};

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {},
};

export default home;
