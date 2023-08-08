import type { App, Component } from 'vue';
import VHelloWord from '@/components/HelloWorld.vue';

const components: {
  [propName: string]: Component;
} = {
  'v-hello-word': VHelloWord,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};
