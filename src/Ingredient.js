import React from 'react'

const Ingredient = (props) => {
    return(
        <div>
            <div className="ing" style={{backgroundColor: props.color}} onClick={(e) => props.stackBurger(e)}>{props.name}</div>
        </div>
    )
}

export default Ingredient