<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="min-h-screen bg-surface-600 text-white">
		<div class="p-4 flex justify-end">
            <LanguageSelector />
        </div>
		{@render children()}
	</div>
</ParaglideJS>
