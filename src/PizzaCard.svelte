<script>
    import {Pizza} from "./pizza.js";
    import RemoveOnePizzaButton from "./RemoveOnePizzaButton.svelte";

    export let pizza = new Pizza(8, 20);
    export let rank = 1;
</script>

<div class="box rank-overlay" style="--rank: {rank}">

    <RemoveOnePizzaButton pizza="{pizza}" on:removepizza/>

    <p class="has-text-centered">

        <span class="is-size-2">{pizza.prettySize}</span>
        <span class="is-size-2 has-text-grey is-italic has-text-weight-light">
            &#8211; {pizza.prettyPrice}
        </span>
    </p>

    <hr/>

    <p class="has-text-centered">
        <span class="is-size-3">{pizza.prettyPizzaPerMoney}</span>
    </p>

</div>

<style>
    .rank-overlay {
        background-color: rgba(255, 200, 200, calc(1 - var(--rank)));
    }
</style>