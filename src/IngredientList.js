import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
    return(
        <div className="ingListDiv">
            {props.ingredients.map((ing, index) => {
                return <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} stackBurger={props.stackBurger} />
            })}
            {/* <Ingredient /> */}
        </div>
    )
}

export default IngredientList