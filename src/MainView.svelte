<script>

    import TopBar from "./TopBar.svelte";
    import {Pizza} from "./pizza.js";
    import PizzaListView from "./PizzaListView.svelte";

    let pizzaList = [new Pizza(8, 16), new Pizza(8, 160), new Pizza(8, 1)];

</script>

<TopBar/>
<PizzaListView bind:pizzaList={pizzaList} />
