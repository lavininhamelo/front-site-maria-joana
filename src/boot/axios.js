import Vue from 'vue'
import axios from 'axios'
const api = "http://localhost:3000"
axios.create({
  baseURL: `${api}`
});

Vue.prototype.$axios = axios

