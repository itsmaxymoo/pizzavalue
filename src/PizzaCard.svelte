<script lang="ts">
    import {Pizza} from "./lib/pizza.js";
    import RemoveOnePizzaButton from "./RemoveOnePizzaButton.svelte";

    export let pizza = new Pizza(8, 20);
</script>

<div class="box">

    <RemoveOnePizzaButton pizza="{pizza}"/>

    <p class="has-text-centered">

        <span class="is-size-2">{pizza.size}"</span>
        <span class="is-size-2 has-text-grey is-italic has-text-weight-light">
            &#8211; ${pizza.price}
        </span>
    </p>

    <hr class="mt-2 mb-2"/>

    <p class="has-text-centered">
        <span class="is-size-3">{pizza.areaPerMoney.toFixed(2)} in² per dollar</span>
    </p>

    <p class="has-text-centered pt-1">
        <span class="is-size-4 has-text-weight-light">{pizza.surfaceArea.toFixed(2)} in²</span>
    </p>

</div>
