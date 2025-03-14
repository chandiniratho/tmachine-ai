import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/tmachine-ai/",  // 🔥 Important for GitHub Pages
});
