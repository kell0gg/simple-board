<template>
  <div class="ml-5 mr-5">
    <v-row>
      <v-col cols="2">
        <v-select name="keyword" v-model="keyword" item-text="value" :items="keywords" return-object></v-select>
      </v-col>
      <v-col cols="8">
        <v-text-field
          @click:append="searchPosts"
          @keyup.enter="searchPosts"
          color="black"
          v-model="searchKeyword"
          label="검색어를 입력하세요."
          append-icon="mdi-help-box"
        ></v-text-field>
      </v-col>
      <v-col class="mt-4" cols="2">
        <v-btn :to="{ path: '/post/create' }" primary>글쓰기</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list two-line>
            <v-list-item-group active-class="white--text" multiple>
              <template v-for="(post, index) in posts">
                <v-list-item :to="{ path: '/post/' + post.pno }" :key="post.pno">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold" v-text="post.title"></v-list-item-title>
                    <v-row>
                      <v-col class="text--secondary" v-text="post.writer" cols="6"></v-col>
                    </v-row>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text v-text="post.modifiedAt"></v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-divider v-if="index < posts.length - 1" :key="index + 'post'"></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-2 ml-5 mr-5">
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-pagination v-model="page" :length="totalPage"></v-pagination>
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
    this.fetchTotalPage();
  },
  mounted() {
    console.log('pageNum ==>' + this.pageNum);
    this.page = parseInt(this.pageNum);
  },
  props: {
    pageNum: {
      type: String,
      required: true,
    },
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
    searchPosts() {
      console.log('hello');
      this.fetchPostList({
        page: this.page,
        size: this.size,
        searchKeyword: this.searchKeyword,
        type: this.keyword.key,
      });
      console.log('hell__O');
    },
  },
  data() {
    return {
      page: 1,
      size: 10,

      keyword: { key: 'title', value: '제목' },
      keywords: [
        { key: 'title', value: '제목' },
        { key: 'writer', value: '글쓴이' },
        { key: 'content', value: '본문' },
      ],
      searchKeyword: '',
    };
  },
};
</script>

<style></style>
