<template>
  <div class="music">
    <GithubCorner />
    <div class="ms_player_wrapper">
      <div class="ms_player_close">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </div>
      <div class="player_mid">
        <div class="audio-player">
          <div id="jquery_jplayer_1" class="jp-jplayer"></div>
          <div
            id="jp_container_1"
            class="jp-audio"
            role="application"
            aria-label="media player"
          >
            <div class="player_left">
              <div class="ms_play_song">
                <div class="play_song_name">
                  <a href="javascript:void(0);" id="playlist-text">
                    <div class="jp-now-playing flex-item">
                      <div class="jp-track-name"></div>
                      <div class="jp-artist-name"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="play_song_options">
                <ul>
                  <li>
                    <a href="#">
                      <span class="song_optn_icon">
                        <i class="ms_icon icon_download"></i>
                      </span>
                      download now
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="song_optn_icon">
                        <i class="ms_icon icon_fav"></i>
                      </span>
                      Add To Favourites
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="song_optn_icon">
                        <i class="ms_icon icon_playlist"></i>
                      </span>
                      Add To Playlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="song_optn_icon">
                        <i class="ms_icon icon_share"></i>
                      </span>
                      Share
                    </a>
                  </li>
                </ul>
              </div>
              <span class="play-left-arrow">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </div>
            <!----Right Queue---->
            <div class="jp_queue_wrapper">
              <span class="que_text" id="myPlaylistQueue">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                queue
              </span>
              <div id="playlist-wrap" class="jp-playlist">
                <div class="jp_queue_cls">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                <h2>queue</h2>
                <div class="jp_queue_list_inner">
                  <ul>
                    <li>&nbsp;</li>
                  </ul>
                </div>
                <div class="jp_queue_btn">
                  <a
                    href="javascript:;"
                    class="ms_clear"
                    data-toggle="modal"
                    data-target="#clear_modal"
                    >clear</a
                  >
                  <a
                    href="clear_modal"
                    class="ms_save"
                    data-toggle="modal"
                    data-target="#save_modal"
                    >save</a
                  >
                </div>
              </div>
            </div>
            <div class="jp-type-playlist">
              <div class="jp-gui jp-interface flex-wrap">
                <div class="jp-controls flex-item">
                  <button class="jp-previous" tabindex="0">
                    <i class="ms_play_control"></i>
                  </button>
                  <button class="jp-play" tabindex="0">
                    <i class="ms_play_control"></i>
                  </button>
                  <button class="jp-next" tabindex="0">
                    <i class="ms_play_control"></i>
                  </button>
                </div>
                <div class="jp-progress-container flex-item">
                  <div class="jp-time-holder">
                    <span class="jp-current-time" role="timer" aria-label="time"
                      >&nbsp;</span
                    >
                    <span class="jp-duration" role="timer" aria-label="duration"
                      >&nbsp;</span
                    >
                  </div>
                  <div class="jp-progress">
                    <div class="jp-seek-bar">
                      <div class="jp-play-bar">
                        <div class="bullet"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jp-volume-controls flex-item">
                  <div class="widget knob-container">
                    <div class="knob-wrapper-outer">
                      <div class="knob-wrapper">
                        <div class="knob-mask">
                          <div class="knob d3">
                            <span></span>
                          </div>
                          <div class="handle"></div>
                          <div class="round">
                            <img src="images/svg/volume.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <!-- <input></input>-->
                    </div>
                  </div>
                </div>
                <div class="jp-toggles flex-item">
                  <button class="jp-shuffle" tabindex="0" title="Shuffle">
                    <i class="ms_play_control"></i>
                  </button>
                  <button class="jp-repeat" tabindex="0" title="Repeat">
                    <i class="ms_play_control"></i>
                  </button>
                </div>
                <div class="jp_quality_optn custom_select">
                  <select>
                    <option>quality</option>
                    <option value="1">HD</option>
                    <option value="2">High</option>
                    <option value="3">medium</option>
                    <option value="4">low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--main div-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GithubCorner from "@/components/GithubCorner.vue";

export default {
  name: "About",
  components: {
    GithubCorner,
  },
};
</script>

<style lang="scss"></style>
