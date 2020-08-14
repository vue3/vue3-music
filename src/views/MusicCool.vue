<template>
  <GithubCorner />
  <div class="music-cool">
    <div class="container">
      <img id="bg" />
      <canvas ref="canvasRef" id="canvas" width="800" height="800"></canvas>
      <audio ref="audioRef" id="audio" :src="mp3url" preload="auto"></audio>
    </div>
    <!-- <div class="controller">
      <div>
        <button @click="play">
          播放音乐
        </button>
        <button onclick="audio.pause()">暂停音乐</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
} from "vue";
// @ is an alias to /src
import GithubCorner from "@/components/GithubCorner.vue";
import mp3 from "@/music-files/一曲相思-阿悠悠.mp3";
import bg from "@/music-files/WX20200812-203119.png";
import Vudio from "@/utils/vudio";

var colors = [
  [
    [0, "#f00"],
    [0.3, "#f00"],
    [0.3, "#f90"],
    [0.7, "#f90"],
    [0.7, "#ff0"],
    [1, "#ff0"],
  ],
  "#ff0",
  ["#06f", "#09f", " #0Cf", "#0ff"],
  ["#fb6d6b", "#c10056", " #a50053", "#51074b"],
  [
    [0, "#ff422d"],
    [0.5, "#ff422d"],
    [0.5, "#6072ff"],
    [1, "#6072ff"],
  ],
];
var types = ["waveform", "circlebar", "lighting", "circlewave"];
var prettify = false;

export default defineComponent({
  name: "About",
  components: {
    GithubCorner,
  },
  setup() {
    const wrapper = ref(null);
    const canvas = ref(null);
    let vudio;
    onMounted(() => {
      vudio = new Vudio(wrapper.value, canvas.value, {
        effect: "circlewave",
        accuracy: 128,
        width: 800,
        height: 800,
        circlewave: {
          maxHeight: 100,
          circleRadius: 200,
          fadeSide: true,
          shadowBlur: 4,
          shadowColor: "rgba(244,244,244,.5)",
          coverImg: bg,
        },
      });
      vudio.dance();
    });
    function play() {
      wrapper.value.play();
      vudio.dance();
    }
    return {
      audioRef: wrapper,
      canvasRef: canvas,
      mp3url: mp3,
      play: play,
    };
  },
});
</script>

<style lang="scss">
.music-cool {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #31002d;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: url("./cover.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(50px);
}
#canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
  width: 600px;
  height: 600px;
}
#audioFile {
  position: absolute;
  width: 100%;
  height: 88px;
  opacity: 0;
}
.label {
  position: absolute;
  text-align: center;
  height: 85px;
  width: 100%;
  color: #eee;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  opacity: 0.3;
  border-radius: 8px;
  border: 1px dashed #ccc;
}
.controller {
  position: absolute;
  z-index: 5;
  bottom: 40px;
  left: 0;
  width: 100%;
  height: 40px;
  text-align: center;
}
.controller div {
  display: inline-block;
  height: 40px;
  margin: 0 10px;
}
.controller button {
  display: block;
  float: left;
  height: 40px;
  margin: 0 1px;
  padding: 0 20px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
}
.controller button:hover {
  opacity: 0.6;
}
.color-1 {
  background-image: linear-gradient(
    #f00 0%,
    #f00 30%,
    #f90 30%,
    #f90 70%,
    #ff0 70%,
    #ff0 100%
  );
}
button.color-2 {
  background-color: #ff0;
}
.color-3 {
  background-image: linear-gradient(#00f, #06f, #09f, #0ff);
}
.color-4 {
  background-image: linear-gradient(#fb6d6b, #c10056, #a50053, #51074b);
}
.color-5 {
  background-image: linear-gradient(
    #ff422d 0%,
    #ff422d 50%,
    #6072ff 50%,
    #6072ff 100%
  );
}
</style>
