<template>
  <q-btn class="btn" :style="{color:color}" >{{ btn }}</q-btn>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LoginBtn",
  props: ["btn", "color"],
});
</script>

<style>
.btn {
  background-color: rgba(0, 119, 255, 0.562);
  margin-left: 10px;
}</style>
