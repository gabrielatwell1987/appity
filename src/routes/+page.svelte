<script>
	import CodeSnippetCard from '$lib/CodeSnippetCard.svelte';
	import {snippetStore, addSnippet} from '../snippetstore';

	export let data;

	let formData = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6 text-3xl">Code Snippet Creator</h3>
		<div class="card p-4 w-full text-token space-y-4 rounded">
			<label class="label">
				<span>Snippet Title</span>
				<input type="text" class="input rounded" placeholder="Enter title here..." bind:value={formData.title}>
			</label>
			<label class="label">
				<span>Programming Language</span>
				<select class="select rounded"  bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="javascript">JavaScript</option>
				</select>
			</label>
			<label class="label">
				<span>Main Snippet</span>
				<textarea rows="4" class="textarea rounded" placeholder="Enter your code snippet here..." bind:value={formData.code}></textarea>
			</label>
			<button type="button" class="btn btn-sm variant-filled-primary rounded" on:click={() => addSnippet(formData)}>Create Snippet</button>
		</div>
		<div class="text-center py-6">
			<h2 class="text-3xl">Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
