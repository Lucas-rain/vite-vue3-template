import { createApp } from 'vue';
import router from './router/index';
import store from './store';
import './style.css';
import App from './App.vue';

/*注意：按需引入时element-plus不需要在main.ts中引入，插件会自动挂载处理，可以在全局直接使用
里在main.ts中引入element-plus样式与图标
*/
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(store);
app.mount('#app');
