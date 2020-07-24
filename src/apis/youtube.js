import axios from "axios";
const KEY = "AIzaSyAvE4gpwZ0XT_akj84hVM3auU9UaR-I-iM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
