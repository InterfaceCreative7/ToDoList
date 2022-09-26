import React,{useState} from "react";
import UpdateList from "./UpdateList";


const Input=()=>{

    const [value,setValue]=useState('');
    const [info,updateInfo]=useState([]);
    const [count,setCount]=useState(0);
    const onChange=(e)=>{
        setValue(e.target.value); //value에 담김
    }

    const onClick=(event)=>{
        event.preventDefault();
        updateInfo([...info,value]);
        setCount(count+1);
        

    }


    return(
        <div>
        <h3>할 일 입력:{count}개</h3>
        <input onChange={onChange} ></input>
        <button onClick={onClick}>추가</button>
        <UpdateList todoList={info}/>
        </div>

    )
    
}

export default Input;