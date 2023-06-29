<script>
    import {CodeBlock} from '@skeletonlabs/skeleton';
    import {deleteSnippet, toggleFavorite} from '../snippetstore';

    export let snippet = {
        title: "",
        language: "",
        code: "",
        favorite: false
    };

    export let index;
</script>

<div class="card rounded">
    <header class="card-header">
        {snippet.title}
        <div class="float-right">
            <button type="button" class="btn btn-sm variant-filled-secondary rounded" on:click={() => toggleFavorite(index)}>{snippet.favorite ? "Unfavorite" : "Favorite"}</button>
            <button type="button" class="btn btn-sm variant-filled-error rounded" on:click={() => deleteSnippet(index)}>X</button>
        </div>
    </header>
    <section class="p-4">
        <CodeBlock language={snippet.language} code={snippet.code} />
    </section>
</div>