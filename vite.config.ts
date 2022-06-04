import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Path configuration see:
// https://divotion.com/blog/how-to-configure-import-aliases-in-vite-typescript-and-jest

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@icons': resolve(__dirname, 'src/assets/icons'),
      '@components': resolve(__dirname, 'src/components'),
      '@crfd': resolve(__dirname, 'src/components/CRFD'),
      '@hydrogen': resolve(__dirname, 'src/components/Hydrogen'),
      '@controller': resolve(__dirname, 'src/controller'),
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@models': resolve(__dirname, 'src/models'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@views': resolve(__dirname, 'src/views')
    }
  }
})
