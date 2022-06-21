import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default () => {
  require('dotenv').config({ path: `./.env` })
  // https://vitejs.dev/config/

  return defineConfig({
    plugins: [vue()],
  })
}
