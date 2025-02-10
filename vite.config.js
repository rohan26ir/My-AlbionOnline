import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,  // You can adjust this value based on your needs
    rollupOptions: {
      output: {
        // Manual chunks configuration
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate third-party libraries into a 'vendor' chunk
          }
        }
      }
    }
  }
});
