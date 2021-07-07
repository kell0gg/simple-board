<template>
  <v-app>
    <v-navigation-drawer clipped-left temporary v-model="drawer" app class="cyan darken-3">
      <v-list>
        <v-list-item :to="{ path: '/board/1' }">
          <v-list-item-action>
            <pencil-icon dark />
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-content>질문 게시판</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ path: '/temp2' }">
          <v-list-item-action>
            <book-icon />
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-content>사용자 매뉴얼</v-list-item-content>
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

    <v-app-bar app clipped-left class="cyan darken-3">
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
import PencilIcon from '@/components/icon/PencilIcon';
import BookIcon from '@/components/icon/BookIcon';
export default {
  name: 'App',
  components: {
    ExtensionPanel,
    PencilIcon,
    BookIcon,
  },
  data: () => ({
    drawer: false,
  }),
  mtheods: {},
};
</script>
