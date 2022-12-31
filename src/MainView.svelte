<script>

    import TopBar from "./TopBar.svelte";
    import PizzaListView from "./PizzaListView.svelte";
    import AddPizzaCard from "./AddPizzaCard.svelte";
    import RemoveAllPizzaButton from "./RemoveAllPizzaButton.svelte";
    import Footer from "./Footer.svelte";

</script>


<main class="is-unselectable">

    <TopBar/>

    <section class="section container">
        <PizzaListView/>
        <AddPizzaCard/>
        <RemoveAllPizzaButton/>
    </section>

    <Footer/>

</main>