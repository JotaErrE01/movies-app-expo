// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tanstackQueryPlugin = require('@tanstack/eslint-plugin-query');

module.exports = defineConfig([
  expoConfig,
  // 2. Configuración para TanStack Query y otras reglas personalizadas
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Asegúrate de aplicar esto a tus archivos de código
    plugins: {
      // La clave es el nombre del plugin, el valor es el objeto importado
      '@tanstack/query': tanstackQueryPlugin,
    },
    rules: {
      // Aquí activas las reglas recomendadas del plugin
      ...tanstackQueryPlugin.configs.recommended.rules,
    },
  },
  
  // 3. Ignorar directorios
  {
    ignores: ['dist/*', '.expo/*'],
  },
]);
