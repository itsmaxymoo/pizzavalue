import { writable } from "svelte/store";
import { Pizza } from "./pizza";


const pizzaValueKey = "pizzaValue";


function _loadPizzaList() {
    try {
        // Try to load and parse pizzaList
        let ls = localStorage.getItem(pizzaValueKey)
        let parsed = JSON.parse(ls);

        // Throw parsing error if relevant - return empty array
        if (!parsed || !Array.isArray(parsed)) throw new TypeError;

        // Convert regular json array to array of pizzas
        for (let i = 0; i < parsed.length; i++) {
            parsed[i] = Pizza.fromJSON(parsed[i]);
        }

        return parsed;
    }
    catch {
        return [];
    }
}


export const pizzaList = writable(_loadPizzaList());
pizzaList.subscribe(value => {
    localStorage.setItem(pizzaValueKey, JSON.stringify(value));
});