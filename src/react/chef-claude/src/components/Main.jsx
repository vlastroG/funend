import {useState} from 'react';
import Ingredients from "./Ingredients.jsx";


export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        setIngredients(ingredients => [...ingredients, newIngredient]);
    }

    return (
        <main>
            <form onSubmit={addIngredient}>
                <input type="text"
                       placeholder="e.g. oregano"
                       aria-label="Add ingredient"
                       name="ingredient"/>
                <button type="submit">Add ingredient</button>
            </form>
            <Ingredients ingredients={ingredients}/>
        </main>
    )
}