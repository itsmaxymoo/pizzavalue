<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let pizza = null;

    function requestRemovePizza() {
        dispatch('removepizza', {
            pizza: pizza
        });
    }
</script>

<button
        class="button is-danger is-outlined"
        on:click={requestRemovePizza}>
    x
</button>