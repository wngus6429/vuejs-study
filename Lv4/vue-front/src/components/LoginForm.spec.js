import { shallowMount } from "@vue/test-utils";
// import Vue from "vue";
import LoginForm from "./LoginForm.vue";

describe("LoginForm.vue", () => {
  test("ID는 이메일 형식이 아니면 경고 메시지 출력.", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "test",
        };
      },
    });
    const warningText = wrapper.find(".warning");
    // console.log(warningText);
    expect(warningText.exists()).toBeTruthy();
    // Vue 테스트 유틸에서 제공하는 API
  });
  test("ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화", () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: "",
          password: "",
        };
      },
    });
    const button = wrapper.find("button");
    // button.element.disabled;
    expect(button.element.disabled).toBeTruthy(); //앞에 값이 true인지 false 인지 확인
  });
});

// describe("LoginForm.vue", () => {
//   test("ID는 이메일 형식 이어야 한다.", () => {
//     const wrapper = shallowMount(LoginForm, {
//       data() {
//         return {
//           username: "a@a.com",
//         };
//       },
//     });
//     const idInput = wrapper.find("#username"); // find Html태그 쫒기 가능
//     console.log("인풋 박스의 값", idInput.element.value);
//     console.log(wrapper.vm.isUsernameValid);
//     // console.log(idInput.html());
//   });
// });

// describe("LoginForm.vue", () => {
//   test("컴포넌트가 마운팅되면 username이 존재하고 초기값으로 설정되어 있어야 한다", () => {
//     // const instance = new Vue(LoginForm).$mount();
//     const wrapper = shallowMount(LoginForm);
//     // console.log(instance.username);
//     // expect(instance).toBeTruthy();
//     wrapper.vm.username; //vm이 인스턴스래
//     expect(wrapper.vm.username).toBe("");
//   });
// });
