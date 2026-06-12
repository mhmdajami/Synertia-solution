import { build } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

await build({
  root: new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"),
  base: "./",
  plugins: [react(), tailwindcss()],
});
