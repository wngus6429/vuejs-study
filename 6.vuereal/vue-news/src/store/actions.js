import { fetchNewsList, fetchJobs, fetchAskList, fetchUserInfo } from "../api/index";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => context.commit("SET_NEWS", response.data))
      //state.new = response data 안됨 ㅋㅋ 뮤테이션 써야함
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobs()
      .then(({ data }) => context.commit("SET_JOBS", data))
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
};
