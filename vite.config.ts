import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/ndzy-todos/',
  build: {
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes('node_modules')) {
            // 让每个插件都打包成独立的文件
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
      plugins: [
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz',
          deleteOriginFile: false,
        }),
      ],
    },
  },
  plugins: [react()],
});
