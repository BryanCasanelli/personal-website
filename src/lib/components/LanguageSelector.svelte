<script lang="ts">
    import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
    import { i18n } from '$lib/i18n';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import * as m from '$lib/paraglide/messages.js';
    import {availableLanguageTags, languageTag} from '$lib/paraglide/runtime.js';
    
    // Flag to toggle the dropdown
    let isOpen = false;

    // Dictionary of languages
    const languages = availableLanguageTags.reduce((acc, lang) => {
        acc[lang] = m[`language_${lang}`]();
        return acc;
    }, {} as Record<string, string>);

    // Helper function to switch to a new language
    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route($page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
        isOpen = false;
    }

</script>

<div class="relative">
    <button 
        on:click={() => isOpen = !isOpen}
        class="flex items-center gap-2 px-3 py-2 rounded hover:bg-surface-500"
    >
        {languages[languageTag()]}
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
    </button>

    {#if isOpen}
        <div class="absolute right-0 mt-2 bg-surface-500 rounded shadow-xl">
            {#each Object.entries(languages) as [code, name]}
                <button
                    class="block w-full text-left px-4 py-2 hover:bg-surface-400"
                    on:click={() => switchToLanguage(code as AvailableLanguageTag)}
                >
                    {name}
                </button>
            {/each}
        </div>
    {/if}
</div>