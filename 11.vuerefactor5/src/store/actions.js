import { fetchNewsList, fetchJobs, fetchAskList, fetchList, fetchUserInfo, fetchCommentItem } from "../api/index";

export default {
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    console.log(response);
    return response; // 비동기 순서 처리 때문에 return 해줘야함. .then().catch() 이런식으로
  },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobs();
      context.commit("SET_JOBS", response.data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASK", response.data);
    console.log(response);
    return response;
    // api에서 trycatch
  },
  // async FETCH_ASK({ commit }) {
  //   const { data } = await fetchAskList();
  //   commit("SET_ASK", data);
  //   console.log(data);
  //   return data;
  // },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
  async FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((error) => console.log(error));
  },
  // #2
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    console.log(response);
    return response;
  },
};
