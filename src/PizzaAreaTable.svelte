<script type="ts">
    import { Pizza } from "./lib/pizza";


	export let thisPizza = new Pizza(1, 1);
	export let pizzas = [];
	let expanded = false;

	function accordion(){
		expanded = !expanded;
	}
</script>

<div class="box p-1 m-1 mt-2">
	<div class="columns is-mobile is-gapless mb-0">
		<div class="column is-1"></div>
		
		<div class="column is-10">
			<p class="has-text-centered pt-1">
				<span class="is-size-4 has-text-weight-light" class:is-underlined={expanded}>{thisPizza.surfaceArea.toFixed(0)} in²</span>
			</p>
		</div>
		<div class="column is-1 has-text-right">
			{#if pizzas.length > 1}
				<button class="button is-warning" on:click={accordion}>
					<span>{#if !expanded}↓{:else}↑{/if}</span>
				</button>
			{/if}
		</div>
	</div>

	<div class="columns is-mobile is-centered is-gapless">
		<column is-12 is-6-desktop>
			<div hidden={!expanded}>
				<div class="table-container">
					<table class="table is-centered is-striped">
						<thead>
							<tr>
								<th class="has-text-centered">Area equivalent to</th>
							</tr>
						</thead>
						<tbody>
							{#each pizzas as pizza}
								<tr>
									<td>
										<span class="has-text-weight-semibold">
											{(thisPizza.surfaceArea / pizza.surfaceArea).toFixed(1)}x
										</span>
										${pizza.price}, {pizza.size}" pizza
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</column>
	</div>
</div>
