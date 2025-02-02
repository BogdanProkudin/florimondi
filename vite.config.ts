import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "core-js/actual/structured-clone";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/florimondi/",
  define: {},
});
