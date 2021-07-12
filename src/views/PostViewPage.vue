<template>
  <div class="post-view-page">
    <post-view v-if="post" :post="post"></post-view>
    <p v-else>로 딩 중...</p>
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-btn :to="{ path: '/board/1' }" dark color="blue">
            <v-icon>mdi-pencil</v-icon>
            목록
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn @click="deletePost()" dark color="red">
            <v-icon>mdi-pencil</v-icon>
            삭제
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn :to="{ path: '/post/update/' + this.postId }" dark color="green">
            <v-icon>mdi-pencil</v-icon>
            수정
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '@/api';

import { mapState, mapActions } from 'vuex';

import PostView from '@/components/PostView';
export default {
  components: {
    PostView,
  },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(['fetchPost']),
    deletePost() {
      console.log('delete');
      api
        .delete(`/post/delete/${this.postId}`)
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: 'BoardPage',
            params: { pageNum: '1' },
          });
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    console.log('postId ===>' + this.postId);
  },
  created() {
    this.fetchPost(this.postId).catch((err) => {
      alert(err.response.data.msg);
      this.$router.push({
        name: 'BoardPage',
        params: { pageNum: '1' },
      });
    });
  },
  computed: {
    ...mapState(['post']),
  },
};
</script>

<style></style>
