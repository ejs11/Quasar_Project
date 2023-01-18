<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="q-px-xl">
      <q-toolbar>
        <q-toolbar-title
          class="q-pa-xl no-margin text-red text-weight-bold text-uppercase text bg-white"
        >
          <q-avatar>
            <img src="../assets/onita-logo.png" />
          </q-avatar>

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

        <q-btn
          flat
          dense
          round
          class="bg-red-5 hide-drawer"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="hidden">
          <q-tabs class="text-red">
            <q-route-tab to="/page1" label="Page One" />
            <q-route-tab to="/page2" label="Page Two" />
            <q-route-tab to="/page3" label="Page Three" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>
    <!--
    <q-drawer class="hide-drawer" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="q-ma-a bg-blue-5 text-right text-white">
          <q-btn dense flat icon="close" @click="toggleLeftDrawer" />
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
  -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-grey-8 text-white" elevated>
      <q-toolbar>
        <q-toolbar-title
          ><q-section>
            <div class="footer q-pa-xl" justify-content-center>
              <a href="http://">Lorem</a>
              <a href="http://">Loremipsum.</a>
              <a href="http://">Loreum.</a>
              <a href="http://">Loremum.</a>
              <a href="http://">Lorepsum.</a>
            </div>
          </q-section></q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Join Us",
    icon: "people",
    color: "red",
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
    // EssentialLink,
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
@media only screen and (min-width: 600px) {
  .hide-drawer {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .hidden {
    display: none;
  }
}
.footer{
  background-color: rgb(6, 1, 26);
  display: flex;
  justify-content: center;
}
.footer a {
  text-decoration: none;
  font-family: serif ;
  color: white;
  font-size: medium;
}
.footer a+a:before {
  content: "/";
  padding: 10px;
}
</style>
