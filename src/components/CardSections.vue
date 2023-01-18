<template>
  <div class="card q-px-l">
      <q-img class="col-5" src="../assets/man-pulling-oxen.jpeg" />
      <p>
        {{ lorem }}
      <LoginBtn btn="Learner" /> </p>
  </div>

</template>

<script>
import { defineComponent } from "vue";
import LoginBtn from "../components/LoginBtn.vue"

export default defineComponent({
  name: "CardSections",
  props: ["somePara", "someImg", "someParaBG", "someImgBG"],
  components: {
    LoginBtn,
  },

  setup() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedorem ipsum dolor sit amet, consectetur adipisicing elit, sedorem ipsum dolor sit amet, consectetur adipisicing elit, sedorem ipsum dolor sit amet, consectetur adipisicing elit, sedorem ipsum dolor sit amet, consectetur adipisicing elit, sedorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
    };
  },
});
</script>

<style scoped>
.col-5 {
  display: inline-block;
  max-width: 35%;
}
.card {
  width: 100%;
  margin: auto;
  display: flex;
  background-color: aliceblue;
}
p {
  margin: auto;
  padding: 15px;
  color: gray;
}
</style>
