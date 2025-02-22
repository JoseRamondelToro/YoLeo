import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  server: {
    hmr: {
      overlay: false,
      force: true,
      protocol: "ws", // Cambia el protocolo a WebSocket estándar
      port: 5173, // El puerto donde se está ejecutando Vite
    },
  },
};
