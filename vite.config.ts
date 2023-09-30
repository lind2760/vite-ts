import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 手动指定项目根目录位置
  root: path.join(__dirname, 'src')
})
