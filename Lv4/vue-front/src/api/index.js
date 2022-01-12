import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: { 예시로 봤던거라 삭제
    //   Authorization: store.state.token,
    // },
  });
  return setInterceptors(instance);
}
// createInstance의 결과는 12줄의 결과겟지

const instance = createInstance();

function registerUser(userData) {
  return instance.post("signup", userData);
}

function loginUser(userData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
