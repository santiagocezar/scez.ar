//@ts-check
import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite'
import yaml from '@rollup/plugin-yaml'

export default defineConfig({
    vite: {
        plugins: [
            Icons({
                compiler: 'astro',
            }),
            yaml()
        ],
    },
});
