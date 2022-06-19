// Path configuration see:
// https://divotion.com/blog/how-to-configure-import-aliases-in-vite-typescript-and-jest

import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import components from 'unplugin-vue-components/vite'
import { visualizer } from 'rollup-plugin-visualizer'

import icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdown(),
    icons({
      compiler: 'vue3',
      customCollections: {
        crfd: FileSystemIconLoader('./src/assets/icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    components({
      dts: true,
      dirs: ['src/components', 'src/views', 'src/layouts', 'src/pages'],
      resolvers: [
        IconsResolver({
          customCollections: ['crfd']
        })
      ]
    }),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@icons': resolve(__dirname, 'src/assets/icons'),
      '@controller': resolve(__dirname, 'src/controller'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@models': resolve(__dirname, 'src/models'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@store': resolve(__dirname, 'src/store.ts')
    }
  }
})
