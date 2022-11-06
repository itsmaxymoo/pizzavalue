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

</script>


<TopBar/>

<section class="section container">
    <PizzaListView pizzaList="{pizzaList}"/>
    <AddPizzaCard on:pizza={onAddPizza}/>
    <RemoveAllPizzaButton on:click={onDeleteAll}/>
</section>
