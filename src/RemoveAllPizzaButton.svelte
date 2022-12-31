<script lang="ts">
    import { pizzaList } from './store.js';

    function removeAll(){
        pizzaList.set([]);
    }
</script>

<div class="has-text-centered pt-4">
    <button
            class="button is-danger"
            on:click={removeAll}>
        remove all
    </button>
</div>

<style>
    button{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
</style>