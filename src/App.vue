<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped class="light-blue darken-4">
      <v-list>
        <v-list-item :to="{ path: '/board' }">
          <v-list-item-action>
            <v-icon class="white--text">mdi-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-content>MENU_1</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: '/board' }">
          <v-list-item-action>
            <v-icon class="white--text">mdi-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-content>MENU_2</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon class="white--text">mdi-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-content><extension-panel /></v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="light-blue darken-4">
      <v-app-bar-nav-icon class="white" @click.stop="drawer = !drawer" temporary></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text" style="cursor: pointer" @click="$router.push('/').catch(() => {})">HELLO_HOME</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ExtensionPanel from '@/components/menu/ExtensionPanel';
export default {
  name: 'App',
  components: {
    ExtensionPanel,
  },
  data: () => ({
    drawer: false,
  }),
  mtheods: {},
};
</script>
