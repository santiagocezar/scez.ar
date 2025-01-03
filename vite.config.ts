import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { plugin as md, Mode } from 'vite-plugin-markdown'

export default defineConfig({
	plugins: [
		md({
			mode: [Mode.HTML]
		}),
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
