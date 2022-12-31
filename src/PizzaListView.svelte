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

    {#each $pizzaList as pizza}

        <PizzaCard pizza="{pizza}"/>

    {/each}

{:else}

    <p class="has-text-centered has-text-grey-dark is-italic mt-4 mb-6">Add some pizzas! ⤵</p>

{/if}
