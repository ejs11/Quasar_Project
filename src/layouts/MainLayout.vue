<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-px-xl">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="bg-red-5"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          class="q-pa-xl no-margin text-red text-weight-bold text-uppercase text bg-white"
        >
          Onita
        </q-toolbar-title>

        <div>
          <q-btn
            label="Sign in"
            type="submit"
            color="blue"
            tag="a"
            link="https://onita.app/signin"
            class="text-yellow q-mr-sm text-capitalize"
          />
          <q-btn
            label="Get Started"
            type="submit"
            color="primary"
            class="text-red q-px-lg q-py-md q-mx-md"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

      <q-list>
        <q-item-label header class="q-ma-a bg-blue-5 text-right text-white"> <q-btn dense flat  icon="close" @click="toggleLeftDrawer" /> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>


</template>




<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Join Us",
    icon: "people",
    color: 'red',
    link: "https://onita.app/signup",
  },
  {
    title: "Sign in",
    icon: "person",
    link: "https://onita.app/signin",
  },
  {
    title: "Support",
    caption: "",
    icon: "live_help",
    link: "https://",
  },

];

export default defineComponent({
  name: "MainLayout",



  components: {
    EssentialLink,
  },



  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>







<style>
.q-py-md {
  border-radius: 29px;
}
</style>
