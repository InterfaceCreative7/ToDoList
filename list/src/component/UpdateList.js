import React,{useState} from "react";
import TodoItem from "./TodoItem";

const UpdateList=(props)=>{
    
    return(
        <div>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default UpdateList;