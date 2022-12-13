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
        class="delete is-large is-pulled-left"
        on:click={requestRemovePizza}>
    x
</button>

<style>

    button{
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

</style>