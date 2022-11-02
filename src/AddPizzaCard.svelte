<script>

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
                    <input class="input" type="number" placeholder="size" min="0" required/>
                    <span class="icon is-right has-text-grey-dark">"</span>
                </p>

                <p class="control has-icons-left is-expanded">
                    <span class="icon is-left has-text-grey-dark">$</span>
                    <input class="input" type="number" placeholder="price" min="0" required/>
                </p>

                <p class="control">
                    <button class="button is-info">+</button>
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