import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = (props) => {
    return(
        <div>
            {props.stack.map((ing, index) => {
                if (index === 0) {
                    return(
                        <div>
                            <button onClick={props.clearIng}>Remove Last Ingredient</button>
                            <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
                        </div>
                    )
                }
                return <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
            })}
        </div>
    )
}

export default BurgerStack