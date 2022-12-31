<script lang="ts">
    import { pizzaList } from './store';

    export let pizza = null;

    function removePizza() {
        pizzaList.set($pizzaList.filter(p => !p.equals(pizza)));
    }
</script>

<button
        class="delete is-large is-pulled-left"
        on:click={removePizza} />

<style>

    button{
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

</style>