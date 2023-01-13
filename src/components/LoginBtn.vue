<template>
  <q-btn>{{ btn }}</q-btn>
</template>

<script>
import { defaultComponent, ref } from "vue";
export default defineComponent({
  name: "LoginBtn",
  props: ["btn"],
});
</script>
