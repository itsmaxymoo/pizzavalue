<script>
    import PizzaCard from "./PizzaCard.svelte";
    import {Pizza} from "./pizza.js";

    // This value should be bound by the parent for ease of updating
    export let pizzaList = [];

    // Sort pizzaList on update
    $: {
        pizzaList;
        pizzaList.sort(Pizza.compare);
    }
</script>

{#if pizzaList.length > 0}

    {#each pizzaList as pizza}

        <PizzaCard pizza="{pizza}"/>

    {/each}

{:else}

    <p class="has-text-centered has-text-grey-dark is-italic">Add some pizzas!</p>

{/if}
