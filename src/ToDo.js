import React from 'react';
const ToDo=(props)=>{
    // const deleteItems =() =>{
    //     console.log("deleted");
    // };
return (
    <div>
    <div  style={{width:"100%",margin:"auto",display:'flex',justifyContent:"center",paddingBottom:"20px"}}>
        <div className="todo_style">
    <i class="fa fa-edit p-4" onClick={()=>{props.onEdit(props.id)}}></i>
    <i class="fa fa-trash p-4" onClick={()=>{props.onselect(props.id)}}></i>
    </div>
<p style={{margin:"0px"}}>{props.text}</p>
</div>
</div>
);

};
export default ToDo;