<template>
  <div class="home">
    <GithubCorner />
    <AudioPlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCorner from "@/components/GithubCorner.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  name: "Home",
  components: {
    GithubCorner,
    AudioPlayer
  },
};
</script>
