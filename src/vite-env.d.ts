/// <reference types="vite/client" />
//配置环境变量  定义变量ts类型
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
