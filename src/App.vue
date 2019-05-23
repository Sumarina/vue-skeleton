<template>
  <div id="app" class="m-skeleton">
    <div class="m-skeleton__header">
      <div class="m-skeleton__header--red"></div>
    </div>
    <div class="m-skeleton__container">
      <div class="m-skeleton__container--red" v-for="i in arr" v-bind:key="i">
          这是第{{i}}个红块
      </div>
    </div>
  </div>
</template>

<script>
import "./style.css";
export default {
  name: "app",
  data() {
    return {
      title: "hello world"
    };
  },
  computed: {
    arr() {
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push(i + 1);
      }
      return arr;
    }
  }
};
</script>

<style>
</style>
