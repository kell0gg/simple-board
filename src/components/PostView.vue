<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h3">{{ post.title }}</v-card-title>

          <v-card-subtitle class="text-subtitle-1">
            <v-row>
              <v-col cols="8">{{ post.writer }}</v-col>
              <v-col cols="4">{{ post.modifiedAt }}</v-col>
            </v-row>
          </v-card-subtitle>

          <v-card-text class="text-h6">
            {{ post.content }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-btn dark color="red">
          <v-icon>mdi-pencil</v-icon>
          삭제
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn dark color="green">
          <v-icon>mdi-pencil</v-icon>
          수정
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
