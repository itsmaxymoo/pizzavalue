<script>

    import TopBar from "./TopBar.svelte";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";
    import RemoveAllPizzaButton from "./RemoveAllPizzaButton.svelte";

    let pizzaList = [];

    function onAddPizza(event) {
        pizzaList = [...pizzaList, event.detail.pizza];
    }

    function onDeleteAll() {
        pizzaList = [];
    }

    function onDeleteOne(event) {
        pizzaList = pizzaList.filter(pizza => !pizza.equals(event.detail.pizza));
    }

</script>


<TopBar/>

<section class="section container">
    <PizzaListView pizzaList="{pizzaList}" on:removepizza={onDeleteOne}/>
    <AddPizzaCard on:pizza={onAddPizza}/>
    <RemoveAllPizzaButton on:click={onDeleteAll}/>
</section>
