import Ingredient from "./Ingredient.jsx";

export default function Ingredients({ingredients}) {
    if (ingredients && ingredients.length > 0) {
        return (
            <div className="ingredients-container">
                <legend>Ingredients on hand:</legend>
                <ul id="ingredients-list">
                    {ingredients.map((ingredient, index) => <Ingredient ingredient={ingredient}
                                                                        key={index}/>)}
                </ul>
                {ingredients.length >= 5 &&
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>
                }
            </div>
        )
    } else {
        return (<></>);
    }
}