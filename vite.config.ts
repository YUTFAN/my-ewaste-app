import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-ewaste-app/', // 👈 仓库名，前后要有 /
  plugins: [react()],
});
