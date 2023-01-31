<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <h4 text-align-center>
        Logging in as
        <span>
          <q-select
            color="blue"
            v-model="model"
            :options="options"
            to="/"
            rounded
            class="width=50px text-center"
            text-center
          >
          </q-select>
        </span>
      </h4>
    </div>
  </div>
  <div class="q-pa-md form" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Username*"
        hint="Or email registered with Onita"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) || 'Please enter your username or email',
        ]"
      />

      <q-input
        filled
        v-model="Password"
        label="Password*"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      />

      <q-toggle
        color="red"
        v-model="accept"
        label="I accept the license and terms"
      />

      <div>
        <q-btn label="Log In" type="submit" color="blue" />
        <q-btn label="Reset" type="reset" color="grey" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      //selection
      model: ref(null),

      options: ["Learner", "Teacher", "Parent", "School", "Other"],

      //FORM
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the licence and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>

<style scoped>
div.form {
  margin: 0 auto;
}
h4 {
  margin: auto;
  text-transform: capitalize;
  text-align: center;
}
span {
  width: 50px;
}
</style>
