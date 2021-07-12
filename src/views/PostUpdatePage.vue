<template>
  <div>
    <post-update v-if="post" :post="post" @submit="onSubmit" />
    <p v-else>로 딩 중...</p>
  </div>
</template>

<script>
import api from '@/api';

import { mapState, mapActions } from 'vuex';

import PostUpdate from '@/components/PostUpdate';
export default {
  components: {
    PostUpdate,
  },
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(['fetchPost']),
    onSubmit() {
      console.log('hello');
      const { pno } = this.post;
      api
        .put(`/post/update/${pno}`, this.post)
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: 'PostViewPage',
            params: { postId: res.data.pno.toString() },
          });
        })
        .catch((err) => console.log(err));
    },
  },

  mounted() {
    console.log('postId ===>' + this.postId);
  },
  created() {
    console.log('updateCreated@__@');
    this.fetchPost(this.postId).catch((err) => {
      alert(err.response.data.msg);
      this.$router.back();
    });
  },
  computed: {
    ...mapState(['post']),
  },
};
</script>

<style></style>
