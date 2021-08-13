<!--
 * @Author: zhangjianfei
 * @Email: 
 * @Date: 2021-08-13 10:02:57
 * @LastEditors: zhangjianfei
 * @LastEditTime: 2021-08-13 12:20:05
 * @Description: 
-->
<template>
  <p>vuex页面</p>
  <p>获取store中state中的数据{{ state.name }}</p>
  <button @click="add">add</button><br /><br />
  <button @click="mius">mius</button><br /><br />
  <p>{{ state.num }}</p>
  <button @click="goBack">返回首页</button>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Vuex",
  setup() {
    const store = new useStore();
    const state = computed(() => {
      return store.state;
    });
    const router = new useRouter();
    const add = () => {
      store.commit("numAdd");
    };
    const mius = () => {
      store.commit("numReduce");
    };
    const goBack = () => {
      router.push("/");
    };
    return { goBack, state,add,mius };
  },
};
</script>