import React,{useState} from 'react';

import ToDo from "./ToDo";

const App=()=>{
  const[inputList, setInputList]= useState("")
  const[Items,setItems] = useState([]);
  const[toggleButton, setToggleButton] = useState(true)
  const[isEditId, setIsEditId] = useState("")
  const itemEvent =(event) =>{
    setInputList(event.target.value);

  };
  const listOfItems=() =>{
    const inputData = { id: new Date().getTime().toString(), name:inputList}
    if(!inputList){
      alert("plz fill any data")

    }
    else if(inputList && !toggleButton){
    setItems(
      Items.map((data)=>{
        if(data.id == isEditId){
          return {...data, name:inputList}
        }
        return data;
      })
    )
    setToggleButton(true)
    setInputList("")
    setIsEditId(null)

    }
    else{
      setItems((oldItems) =>{
        return[...oldItems,inputData]
    });
    localStorage.setItem("data",JSON.stringify(Items))
  setInputList(" ");
    }
   
  };
  const deleteItems =(id) =>{

    setItems((oldItems) =>{
      return oldItems.filter((arrElem,index) =>{
        console.log(arrElem,"element")
        return arrElem.id !==id;
        
      })
    
    })
};

const editItems = (id)=>{
  setItems((arraydata)=>{
    return arraydata.map((item,index)=>{
      console.log(item,"item")
      if(item.id==id){
        setInputList(item.name)
        setToggleButton(false)
        setIsEditId(id)
      }
      return item;
    })
  })
}
let data = localStorage.getItem("data")
console.log(JSON.parse(data),"data")
let parsedData = JSON.parse(data)

return(
  <>
    <div className="main_div">
    <div className="center_div">
      <br/>
      <p className="textC">ToDo List</p>
      {console.log(Items,"jhkjhk")}
      <br/>
      <div  style={{width:"100%",margin:"auto",display:'flex',justifyContent:"center",paddingBottom:"20px"}}>
      <input type="text" placeholder="Add Items" name="inputList" value={inputList} onChange={itemEvent}/>
      {
        toggleButton ?
        <i className="fa fa-plus add-btn" onClick={listOfItems} /> 
        :
        <i className="fa fa-edit" onClick={listOfItems} /> 

      }
      </div>

        {/* {<li>{inputList}</li>} */}

        
       {( Items).map((itemval,index) => {
         return<ToDo 
         
         id={itemval.id}
         text ={itemval.name} 
         onselect={deleteItems}
         onEdit={editItems}
         />;
          // return <li>{itemval}</li>

         }) }
        

        
     
    </div>
    </div>

  </>
);
};

export default App;