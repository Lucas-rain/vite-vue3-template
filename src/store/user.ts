import { defineStore } from 'pinia';

//defineStore 第一个参数是id 必须且唯一

export const useUserStore = defineStore('user', {
  //state 返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: 'zhangsan',
        age: 23,
      },
      token: 'S1',
    };
  },
  getters: {
    newName: (state) => state.userInfo.name + 'vip',
  },
  actions: {
    //更新整个对象
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo;
    },
    updateAge(age: number) {
      this.userInfo.age = age;
    },
    updateToken(token: string) {
      this.token = token;
    },
  },
});
