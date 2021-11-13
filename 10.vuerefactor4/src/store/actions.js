import {
  // fetchNewsList,
  // fetchJobs,
  // fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from "../api/index";

export default {
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then((response) => {
  //       context.commit("SET_NEWS", response.data);
  //       return response; // 응답을 화면으로 돌려보냄, spinner와 then사용을 위해
  //     })
  //     //state.new = response data 안됨 ㅋㅋ 뮤테이션 써야함
  //     // response가 promise 객체를 반환중이다
  //     // 반환한 객체를 가지고 newView에서 then으로 추가적인 처리 가능
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // FETCH_JOBS(context) {
  //   fetchJobs()
  //     .then(({ data }) => {
  //       context.commit("SET_JOBS", data);
  //       return data;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //       return data;
  //     })
  //     .catch((error) => console.log(error));
  // },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((error) => console.log(error));
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3 이부분 return 안하면 제대로 .then으로서 작동이 안됨
    // console.log(5)가 먼저 움직이게 됨
    return fetchList(pageName)
      .then((response) => {
        // #4
        console.log(4);
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
};
