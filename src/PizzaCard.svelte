<script lang="ts">
    import {Pizza} from "./lib/pizza.js";
    import RemoveOnePizzaButton from "./RemoveOnePizzaButton.svelte";

    export let pizza = new Pizza(8, 20);
    export let rank = 1;
</script>

<div class="box rank-overlay" style="--rank: {rank}">

    <RemoveOnePizzaButton pizza="{pizza}"/>

    <p class="has-text-centered">

        <span class="is-size-2">{pizza.size}"</span>
        <span class="is-size-2 has-text-grey is-italic has-text-weight-light">
            &#8211; ${pizza.price}
        </span>
    </p>

    <hr/>

    <p class="has-text-centered">
        <span class="is-size-3">{pizza.areaPerMoney.toFixed(2)} in² per dollar</span>
    </p>

</div>

<style>
    .rank-overlay {
        background-color: rgba(255, 200, 200, calc(1 - var(--rank)));
    }
</style>