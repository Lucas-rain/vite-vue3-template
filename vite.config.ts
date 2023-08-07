import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression'; //打包生成.gz插件仅需在打包时使用
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
      {
        ...viteCompression(),
        apply: 'build', //仅在打包时应用打包.gz文件
      },
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
    //配置端口和代理
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: '要代理的地址',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    //打包配置
    build: {
      rollupOptions: {
        output: {
          //分包 通过（）=>import()形式加载的组件会自动分包，第三方插件需手动分包
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            elementIcons: ['@element-plus/icons-vue'],
          },
          //js和css文件夹分离 配置
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  });
};
