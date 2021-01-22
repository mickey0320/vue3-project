<template>
  <div class="home">
    {{ category }}
    <Home-Header></Home-Header>
    <Home-List></Home-List>
    <Home-Swiper></Home-Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore } from "vuex";
import { IGlobalState } from "../../store";
export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper,
  },
  setup() {
    const store = useStore<IGlobalState>();
    const category = computed(() => {
      return store.state.home.category;
    });

    return {
      category,
    };
  },
});
</script>
