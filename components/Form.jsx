export default function Form(){

    const ingredients = ["eggs", "milk", "flour", "sugar"];


    const ingredientList = ingredients.map(()=>(
        <li>{ingredients}</li>
    ))


    return(
        <div className = "form_container">
        
        <div className="ingrediet_form">

         <input type="text" 
         className="ingredient_txtfeld"
        placeholder="Enter the ingredents"
        name="ingredients"
        />

       
        <button className="ingredient_button">Add Ingredient</button>
        </div>

        <ul className="ingredient_list">
            {ingredientList}
        </ul>
        
        </div>
        
    )
}