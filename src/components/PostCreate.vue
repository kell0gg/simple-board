<template>
  <div>
    <v-container fluid>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-container>
              <v-text-field :rules="inputRules" v-model="title" label="제목"></v-text-field>
              <v-text-field :rules="inputRules" v-model="writer" label="작성자"></v-text-field>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-textarea :rules="inputRules" label="본문내용" v-model="content" outlined></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="onSubmit" dark color="green">
            <v-icon>mdi-pencil</v-icon>
            글쓰기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputRules: [(v) => !!v || '필수 입력사항입니다.'],
    title: '',
    content: '',
    writer: '',
  }),
  methods: {
    checkInput() {
      if (!this.title || !this.content || !this.writer) {
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
  },
};
</script>

<style></style>
