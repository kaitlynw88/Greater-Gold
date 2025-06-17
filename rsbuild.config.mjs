import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title: "Greater Gold",
        favicon: "./src/assets/greaterGoldFav.png",
        icons: [{ src: "./src/assets/greaterGoldFav.png", size: 192 }],
    },
});

