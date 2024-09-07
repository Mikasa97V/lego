import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  plugins: [react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './WorkSpace': './src/components/WorkSpace/WorkSpace',
        './Header': './src/components/Header/Header',
        './Layout': './src/components/Layout/Layout',
        './Authorization': './src/components/Authorization/Authorization',
        './Button': './src/components/Button/Button',
        './Modal': './src/components/Modal/Modal',
        './Spin': './src/components/Spin/Spin',
      },
      shared: ['react', 'react-dom']
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(pathSrc, 'assets')],
      symbolId: '#icon-[name]',
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    open: true,
  }
})
