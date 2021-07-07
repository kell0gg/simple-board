<template>
  <div class="post-view-page">
    <post-view v-if="post" :post="post"></post-view>
    <p v-else>로 딩 중...</p>
  </div>
</template>

<script>
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
  },
  mounted() {
    console.log('postId ===>' + this.postId);
  },
  created() {
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
