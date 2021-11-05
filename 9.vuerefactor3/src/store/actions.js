import { fetchNewsList, fetchJobs, fetchAskList, fetchList, fetchUserInfo, fetchCommentItem } from "../api/index";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit("SET_NEWS", response.data);
        return response; // 응답을 화면으로 돌려보냄, spinner와 then사용을 위해
      })
      //state.new = response data 안됨 ㅋㅋ 뮤테이션 써야함
      // response가 promise 객체를 반환중이다
      // 반환한 객체를 가지고 newView에서 then으로 추가적인 처리 가능
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS(context) {
    fetchJobs()
      .then(({ data }) => {
        context.commit("SET_JOBS", data);
        return data;
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
        return data;
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((error) => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((error) => console.log(error));
  },
};
