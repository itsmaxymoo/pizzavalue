<script>

    import TopBar from "./TopBar.svelte";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";

    let pizzaList = [];

    function onAddPizza(event) {
        pizzaList = [...pizzaList, event.detail.pizza];
    }

</script>

<TopBar/>

<section class="section">
    <PizzaListView pizzaList="{pizzaList}"/>
    <AddPizzaCard on:pizza={onAddPizza}/>
</section>
