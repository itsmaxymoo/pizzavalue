<script lang="ts">
    import PizzaCard from "./PizzaCard.svelte";
    import {Pizza} from "./lib/pizza.js";
    import { pizzaList } from './store.js';

    // Sort pizzaList on update
    $: {
        $pizzaList;
        pizzaList.set($pizzaList.sort(Pizza.compare));
    }
</script>

{#if $pizzaList.length > 0}

    {#if $pizzaList.length > 1}
        <p class="has-text-centered has-text-grey-dark is-italic mt-0 mb-4">Best value ⤵</p>
    {/if}

    {#each $pizzaList as pizza}

        <PizzaCard pizza="{pizza}"/>

    {/each}

    {#if $pizzaList.length > 1}
        <p class="has-text-centered has-text-grey-dark is-italic mt-0 pt-0 mb-6">Worst value ⤴</p>
    {/if}

{:else}

    <p class="has-text-centered has-text-grey-dark is-italic mt-4 mb-6">Add some pizzas! ⤵</p>

{/if}
