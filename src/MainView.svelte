<script>

    import TopBar from "./TopBar.svelte";
    import {Pizza} from "./pizza.js";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";

    let pizzaList = [new Pizza(8, 16), new Pizza(8, 160), new Pizza(8, 1)];

</script>

<TopBar/>

<section class="section">
    <PizzaListView bind:pizzaList={pizzaList}/>
    <AddPizzaCard/>
</section>
