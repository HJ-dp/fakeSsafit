import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const REST_VIDEO_API = `https://port-0-java-springboot-gj8u2llomt4u6f.sel5.cloudtype.app/api-video/`

export const useVideoStore = defineStore('Video', () => {
  const VideoList = ref([]);
  const seletedVideo = ref([]);
  const Video = ref();

  const getVideoList = function () {
    axios.get(REST_VIDEO_API + 'count')
      .then((res) => {
        VideoList.value = res
      })
  }
  const getVideo = function (id) {
    axios.get(REST_VIDEO_API + "/detaissl/" + id)
      .then((res) => {
        Video.value = res.data
      })
  }

  const getPartVideo = function (p) {
    axios.get(REST_VIDEO_API + "part?part=" + p)
      .then((res) => {
        seletedVideo.value = res.data
      })
  }
  const getPartVideo2 = function (p) {
    axios({
      url: REST_VIDEO_API + p,
      data: {'part':p}
    })
      .then((res) => {
        alert("영원히 탈퇴 되었습니다.");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return { Video, VideoList, getPartVideo2, getVideoList, getVideo, getPartVideo, seletedVideo }
}, { persist: true })
