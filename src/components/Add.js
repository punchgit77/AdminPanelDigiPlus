import React, { useState } from 'react'

const Add = ({passData,setData}) => {

const [id,setId] = useState("");
const [name,setName] = useState("");

const handleChange=(e)=>{
      let d = {id: id , firstName:name}
      if(d.id==="" && d.firstName===""){
        alert("fill both the fields");
        
      }
      else if(d.id!=="" && d.firstName!=="") setData([...passData,d]);
      localStorage.setItem("data",JSON.stringify([...passData,d]));

      setName("");
      setId("");

}
const setid=(e)=>{
    setId(e.target.value);
}
const setname=(e)=>{
   setName(e.target.value);
}

  return (
    <div className='inputData'>
        <input type="text" name="id" value={id} onChange={setid} />
        <input type="text" name="name" value={name}  onChange={setname} />
       <button onClick={handleChange}>add</button>
     </div>
  )
}

export default Add