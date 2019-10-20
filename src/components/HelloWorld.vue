<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Videos
        </h1>
        
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <v-layout justify-center>
          <div
            v-for="video in videos"
            v-bind:key="video"
          >
            <video-card 
              v-bind:video=video
            />
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VideoCard from './VideoCard';
export default {
  components: {
    VideoCard
  },
  data: () => ({
    videos: [
      {
        title: 'Video 1',
        language: 'English',
        description: 'The Video Lesson #1',
        image_url: 'https://i.ytimg.com/an_webp/C0DPdy98e4c/mqdefault_6s.webp?du=3000&sqp=COL3su0F&rs=AOn4CLAtAMm5st9iY6gI6onfcK-EKai56Q',
        video_url: 'https://www.youtube.com/embed/C0DPdy98e4c',
      },
      {
        title: 'Video 2',
        language: 'English',
        description: 'The Video Lesson #2',
        image_url: 'https://i.ytimg.com/an_webp/C0DPdy98e4c/mqdefault_6s.webp?du=3000&sqp=COL3su0F&rs=AOn4CLAtAMm5st9iY6gI6onfcK-EKai56Q',
        video_url: 'https://www.youtube.com/embed/C0DPdy98e4c',
      },
      {
        title: 'Video 3',
        language: 'English',
        description: 'The Video Lesson #3',
        image_url: 'https://i.ytimg.com/an_webp/C0DPdy98e4c/mqdefault_6s.webp?du=3000&sqp=COL3su0F&rs=AOn4CLAtAMm5st9iY6gI6onfcK-EKai56Q',
        video_url: 'https://www.youtube.com/embed/C0DPdy98e4c',
      },
    ],
  }),
};
</script>
