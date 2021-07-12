<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-container>
              <v-text-field v-model="post.title" label="제목"></v-text-field>
              <v-text-field v-model="post.writer" label="작성자"></v-text-field>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-textarea label="본문내용" v-model="post.content" outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="onSubmit" dark color="green">
            <v-icon>mdi-pencil</v-icon>
            수정하기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    checkInput() {
      if (!this.post.title || !this.post.content || !this.post.writer) {
        return false;
      }
      return true;
    },
    onSubmit() {
      if (this.checkInput()) {
        const { title, writer, content } = this;
        this.$emit('submit', { title, writer, content });
      } else {
        console.log('모든 값을 입력해주세요.');
      }
    },
    mounted() {
      console.log('update@@@ ===>' + this.post.content);
    },
  },
};
</script>

<style></style>
