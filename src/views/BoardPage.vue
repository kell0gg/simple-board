<template>
  <div><post-list :pageNum="pageNum" /></div>
</template>

<script>
import PostList from '@/components/PostList';
export default {
  props: {
    pageNum: {
      type: String,
      required: true,
    },
  },
  components: {
    PostList,
  },
};
</script>

<style></style>
