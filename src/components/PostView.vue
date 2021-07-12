<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h3">{{ post.title }}</v-card-title>

          <v-card-subtitle class="text-subtitle-1">
            <v-row>
              <v-col cols="6">{{ post.writer }}</v-col>
              <v-col cols="6">{{ post.modifiedAt }}</v-col>
            </v-row>
          </v-card-subtitle>

          <v-card-text>
            <v-textarea height="350px" class="text-h6" flat solo readonly v-model="post.content"></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
