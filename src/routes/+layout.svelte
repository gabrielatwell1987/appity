<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// SkeletonUI
	import { AppBar, AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github.css';

	storeHighlightJs.set(hljs);
</script>

<svelte:head>
	<title>Code Snippets</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h1 class="title text-center">Appity</h1>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>

<style>
	.title {
		font-family: 'Grotesk', sans-serif;
		font-size: clamp(1.5rem, 5vw, 4rem);
		font-weight: 700;
		letter-spacing: 2px;
		line-height: 1.1;
		margin-left: 50%;
	}
</style>
