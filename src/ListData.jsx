import React from "react";

const ListData=(props)=>{
    return(
        <>
        <div className="list">
        <i className="far fa-times-circle" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.val}</li>
        </div>
        </>
    )
}
export default ListData;