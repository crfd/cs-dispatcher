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
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@views': resolve(__dirname, 'src/views')
    }
  }
})
