import React, { useState } from "react";
import ListData from './ListData';
const App=()=>{
    const [text,setText]=useState("")
    const getText=(event)=>{
      setText(event.target.value);
    }
    const [data,setData]=useState([])
    const clickMe=()=>{
      setData((prevData)=>{
        return [...prevData,text];
        
      })
      setText("");
    }
    const deleteItems=(id)=>{
      setData((oldItems)=>{
          return oldItems.filter((arrEle,index)=>{
            return index!==id;
          })
      });
    }
    const onKey=(e)=>{
      if(e.key==="Enter"){
        setData((prevData)=>{
          return [...prevData,text];
          
        })
        setText("");
      }
    }
    return (
      <>
      <div className="master">
      <div className="main-container">
        <div className="inner-container">
          <div>
            <h1>ToDo List</h1>
            </div>
            
        </div>
        <div>
        <input type="text" placeholder="Add ToDos" onKeyDown={onKey} onChange={getText} value={text}/>
        <button onClick={clickMe} >+</button>
        <div className="list-items">
        <ul>
              {data.map((todo,i)=>{
                return <ListData key={i} id={i} val={todo} onSelect={deleteItems}/>
              })}
        </ul>
        </div>
        </div>
      </div>
      
      </div>
      </>
    )
}
export default App;