import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // Apply these settings to all files
    languageOptions: {
      globals: {
        ...globals.node, // Fixes 'process'
        ...globals.jest  // Fixes 'describe' and 'it'
      }
    }
  },
  pluginJs.configs.recommended,
];