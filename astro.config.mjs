//@ts-check
import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    vite: {
        plugins: [
            Icons({
                compiler: 'astro',
            }),
        ],
    },
});
