<script>

    import TopBar from "./TopBar.svelte";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";
    import DeleteAllButton from "./RemoveAllButton.svelte";

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
    <DeleteAllButton on:click={onDeleteAll}/>
</section>
