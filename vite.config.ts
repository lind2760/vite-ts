import { ConfigEnv, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
// import visualizer from "rollup-plugin-visualizer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { createHtmlPlugin } from "vite-plugin-html";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
const config: UserConfigExport = {
  server: {
    host: "localhost",
    port: 8000,
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
          libDirectory: "es",
        },
      ],
    }),
  ],
  // 手动指定项目根目录位置
  // root: path.join(__dirname, "index"),
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.join(__dirname, "./src/"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
    modules: {
      // 样式小驼峰转化,
      //css: goods-list => tsx: goodsList
      localsConvention: "camelCase",
    },
  },
};

export default ({ command, mode }: ConfigEnv) => {
  const envFiles = [
    /** mode local file */ `.env.${mode}.local`,
    /** mode file */ `.env.${mode}`,
    /** local file */ `.env.local`,
    /** default file */ `.env`,
  ];
  const { plugins = [], build = {} } = config;
  const {
    rollupOptions = {
      plugins: [],
    },
  } = build;
  console.log(rollupOptions);
  for (const file of envFiles) {
    try {
      fs.accessSync(file, fs.constants.F_OK);
      const envConfig = dotenv.parse(fs.readFileSync(file));
      for (const k in envConfig) {
        if (Object.prototype.hasOwnProperty.call(envConfig, k)) {
          process.env[k] = envConfig[k];
        }
      }
    } catch (error) {
      console.log("配置文件不存在，忽略");
    }
  }

  const isBuild = command === "build";
  // const base = isBuild ? process.env.VITE_STATIC_CDN : '//localhost:3000/'

  config.base = process.env.VITE_STATIC_CDN;

  if (isBuild) {
    // 压缩 Html 插件
    config.plugins = [
      ...plugins,
      createHtmlPlugin({
        minify: true,
      }),
    ];
    config.define = {
      "process.env.NODE_ENV": '"production"',
    };
  }
  //
  // if (process.env.VISUALIZER) {
  //   const { plugins = [] } = rollupOptions;
  //   rollupOptions.plugins = [
  //     ...plugins,
  //     visualizer({
  //       open: true,
  //       gzipSize: true,
  //       brotliSize: true,
  //     }),
  //   ];
  // }

  // 在这里无法使用 import.meta.env 变量
  if (command === "serve") {
    // config.server = {
    //   host: "0.0.0.0",
    //   // 反向代理
    //   proxy: {
    //     api: {
    //       target: process.env.VITE_API_HOST,
    //       changeOrigin: true,
    //       rewrite: (path: unknown) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // };
  }
  console.log(config.server);
  return config;
};
