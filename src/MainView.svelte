<script>

    import TopBar from "./TopBar.svelte";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";
    import RemoveAllPizzaButton from "./RemoveAllPizzaButton.svelte";
    import { pizzaList } from './store.js';

    function onAddPizza(event) {
        pizzaList.set([...$pizzaList, event.detail.pizza]);
    }

    function onDeleteAll() {
        pizzaList.set([]);
    }

    function onDeleteOne(event) {
        pizzaList.set($pizzaList.filter(pizza => !pizza.equals(event.detail.pizza)));
    }

</script>


<main class="is-unselectable">

    <TopBar/>

    <section class="section container">
        <PizzaListView pizzaList="{$pizzaList}" on:removepizza={onDeleteOne}/>
        <AddPizzaCard on:pizza={onAddPizza}/>
        <RemoveAllPizzaButton on:click={onDeleteAll}/>
    </section>

</main>