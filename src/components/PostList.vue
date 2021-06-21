<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-select v-model="keyword" :items="keywords"></v-select>
      </v-col>
      <v-col col="10">
        <v-text-field label="검색어를 입력하세요." append-icon="mdi-help-circle"></v-text-field>
      </v-col>
    </v-row>
    <v-card>
      <v-list two-line>
        <v-list-item-group active-class="white--text" multiple>
          <template v-for="(item, index) in items">
            <v-list-item :to="{ path: '/board/' + item.title }" :key="item.title">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>

                  <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>

                  <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                  <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>

                  <v-icon v-else color="yellow darken-3">mdi-star</v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '제목',
      keywords: ['제목', '본문', '작성자', '제목+본문+작성자'],
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: 'me, Scrott, Jennifer',
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
        },
        {
          action: '18hr',
          headline: '작성자달기',
          subtitle:
            'So Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______GSo Long G_______G',
          title: '제목~~~~~~~~~~~',
        },
      ],
    };
  },
};
</script>

<style></style>
