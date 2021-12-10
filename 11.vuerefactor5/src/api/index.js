import axios from "axios";
//axios는 프로미스 기반이다.

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobs() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobs, fetchList, fetchUserInfo, fetchCommentItem };
