import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // 这个path 用到上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite'; //按需引入插件配置
import Components from 'unplugin-vue-components/vite'; //按需引入插件配置
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; //按需引入插件配置
// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('mode', loadEnv(mode, process.cwd()).VITE_BASE_URL); //127.0.0.1:9000/api
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), //@ 代替src
        '#': path.resolve('./types'), //#替代types
      },
    },
    css: {
      preprocessorOptions: {
        //全局样式表 配置
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
  });
};
