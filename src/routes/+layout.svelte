<script lang="ts">
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	let { children } = $props();
	import "$lib/styles/reset.css";
	import "$lib/styles/global.css";
</script>

<svelte:head>
	<title>Santiago Cézar</title>
	<meta name="description" content="mi página personal! hola!" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&family=Montserrat:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
