import { defineConfig } from "cypress";
import app from "./index.js";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:run", async (details) => {
        /* ... */
        await app.listen(3000);
      });
    },
  },
});
