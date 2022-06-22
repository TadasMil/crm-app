/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

require('dotenv').config({ path: `./.env` })

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  // https://vitejs.dev/config/

  return defineConfig({
    plugins: [vue()],
    test: {
      globals: true,
      include: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      environment: 'jsdom',
      snapshotFormat: {
        printBasicPrototype: true,
      },
    },
  })
}
