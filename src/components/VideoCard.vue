<template>
  <v-card
    max-width="344"
    class="mx-auto video-card"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{video.title}}</v-list-item-title>
        <v-list-item-subtitle>{{video.language}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <div class="iframe-container">
      <iframe width="560" height="315" :src="video.video_url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <v-card-text>
      {{video.description}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ['video'],
  data: () => ({
    video: {
        title: '',
        language: '',
        description: '',
        image_url: '',
        video_url: '',
      }
  }),
};
</script>

<style scoped>
    .iframe-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;
    }
    .iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    v-card .video-card {
      margin: 20px;
    }
</style>
