import React from "react";

const TodoItem=(props)=>{
    return(
        <div>
            {props.item}
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;