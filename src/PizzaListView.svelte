<script>
    import PizzaCard from "./PizzaCard.svelte";

    export let pizzaList = [];
</script>

<section class="section">

    {#if pizzaList.length > 0}

        {#each pizzaList as pizza}

            <PizzaCard pizza="{pizza}"/>

        {/each}

    {:else}

        <p class="has-text-centered has-text-grey-dark is-italic">Add some pizzas!</p>

    {/if}

</section>