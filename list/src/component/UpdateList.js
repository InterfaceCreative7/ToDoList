import React,{useState} from "react";
import TodoItem from "./TodoItem";

const UpdateList=(props)=>{
    return(
        <div>
            {props.UpdateList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default UpdateList;