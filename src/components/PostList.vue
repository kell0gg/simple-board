<template>
  <div>
    <v-row class="ml-5 mr-5">
      <v-col cols="2">
        <v-select v-model="keyword" :items="keywords"></v-select>
      </v-col>
      <v-col col="10">
        <v-text-field color="black" label="검색어를 입력하세요." append-icon="mdi-help-box"></v-text-field>
      </v-col>
    </v-row>
    <v-card class="mt-2 ml-5 mr-5">
      <v-list two-line>
        <v-list-item-group active-class="white--text" multiple>
          <template v-for="(post, index) in posts">
            <v-list-item :to="{ path: '/board/' + post.pno }" :key="post.pno">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold" v-text="post.title"></v-list-item-title>
                <v-row>
                  <v-col class="text--secondary" v-text="post.user" cols="2"></v-col>
                </v-row>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="post.modifiedAt"></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < posts.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-row class="mt-2 ml-5 mr-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-pagination @previous="prev" @next="next" v-model="page" :length="totalPage"></v-pagination>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.fetchPostList({
      page: this.page,
      size: this.size,
    });
    this.fetchTotalPage({
      page: this.page,
      size: this.size,
    });
  },
  mounted() {
    console.log('mount==>' + this.page);
  },
  computed: {
    ...mapState(['posts', 'totalPage']),
  },
  watch: {
    page: function (newPage) {
      this.fetchPostList({
        page: newPage,
        size: this.size,
      });
    },
  },
  methods: {
    ...mapActions(['fetchPostList', 'fetchTotalPage']),
    next() {
      this.page = this.page + 9 < this.totalPage ? this.page + 9 : this.totalPage;
    },
    prev() {
      this.page = this.page - 9 > 0 ? this.page - 9 : 1;
    },
  },
  data() {
    return {
      page: 1,
      size: 5,

      keyword: '제목',
      keywords: ['제목', '본문', '작성자', '제목+본문+작성자'],
    };
  },
};
</script>

<style></style>
