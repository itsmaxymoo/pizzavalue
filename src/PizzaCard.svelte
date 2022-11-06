<script>
    import {Pizza} from "./pizza.js";
    import RemoveOnePizzaButton from "./RemoveOnePizzaButton.svelte";

    export let pizza = new Pizza(8, 20);
</script>

<div class="box">

    <p class="has-text-centered">

        <span class="is-size-2">{pizza.prettySize}</span>
        <span class="is-size-2 has-text-grey is-italic has-text-weight-light">
            &#8211; {pizza.prettyPrice}
        </span>

        <RemoveOnePizzaButton pizza="{pizza}" on:removepizza/>
    </p>

    <hr/>

    <p class="has-text-centered">
        <span class="is-size-3">{pizza.prettyPizzaPerMoney}</span>
    </p>

</div>