<script>

    import {Pizza} from "./pizza.js";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // New pizza struct
    let np = {
        size: '',
        price: '',
        errorMissingSize: false,
        errorMissingPrice: false
    };

    // For outside binding
    let newPizza = null;

    function addPizza() {
        np.size = parseFloat(np.size);
        np.price = parseFloat(np.price);

        // Data validation
        np.errorMissingSize = false;
        np.errorMissingPrice = false;
        if (np.size <= 0 || isNaN(np.size)) {
            np.errorMissingSize = true;
        }
        if (np.price <= 0 || isNaN(np.price)) {
            np.errorMissingPrice = true;
        }

        // If neither values have errors
        if (!(np.errorMissingSize || np.errorMissingPrice)) {
            // Create pizza
            newPizza = new Pizza(np.size, np.price);

            // Reset fields
            np.size = '';
            np.price = '';

            // Dispatch event to parents
            dispatch('pizza', {
                pizza: newPizza
            });
        }
    }

</script>

<div class="box">

    <p class="has-text-centered mb-3">
        <span class="is-size-3">
            Add Pizza
        </span>
    </p>

    <div class="field has-text-centered">
        <div class="field-body">

            <div class="field has-addons">
                <p class="control has-icons-right is-expanded">
                    <input class={"input" + (np.errorMissingSize ? " is-danger" : "")}
                           type="number"
                           placeholder="size"
                           min="0"
                           bind:value={np.size}
                           required/>
                    <span class="icon is-right has-text-grey-dark">"</span>
                </p>

                <p class="control has-icons-left is-expanded">
                    <span class="icon is-left has-text-grey-dark">$</span>
                    <input class={"input" + (np.errorMissingPrice ? " is-danger" : "")}
                           type="number"
                           placeholder="price"
                           min="0"
                           bind:value={np.price}
                           required/>
                </p>

                <p class="control">
                    <button class="button is-info" on:click={addPizza}>+</button>
                </p>
            </div>

        </div>
    </div>

</div>

<style>
    /* Hide number up/down selector */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>