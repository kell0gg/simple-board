<template>
  <post-create @submit="onSubmit" />
</template>

<script>
import api from '@/api';
import PostCreate from '@/components/PostCreate';
export default {
  components: {
    PostCreate,
  },
  methods: {
    onSubmit(postInfo) {
      console.log(postInfo.content);
      api
        .post('/register', postInfo)
        .then((res) => {
          console.log(res);
          this.$router.push({
            name: 'PostViewPage',
            params: { postId: res.data.pno.toString() },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
