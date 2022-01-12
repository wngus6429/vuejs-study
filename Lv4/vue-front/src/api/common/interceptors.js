import store from "@/store/index";

export function setInterceptors(instance) {
  //axios.post('localhost: 뭐시기 해줘야 하는데 위에 인스턴스 쓰니까)
  //요청을 했을떄
  instance.interceptors.request.use(
    // 보내기전에
    function(config) {
      // Do something before request is sent
      console.log(config);
      config.headers.Authorization = store.state.token;
      // headers.Authorization안에 추가
      // 이 방법으로 매 API 요청마다 일일이 실어주지 않아도됨
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
}
