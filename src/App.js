import './App.css';
import React,{useEffect,useState} from 'react'

const API = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

function App() {
const [data,setData] = useState([]);
const getApiData=async ()=>{
     const data = await fetch(API).then(res=>res.json()).then(v=>{
      console.log(v); 
      setData(v)
      localStorage.setItem("data",JSON.stringify(v));
    
    });
      return data;
}


useEffect(()=>{
    getApiData();


},[])

const edit = (e)=>{
  setData(e.target.value);
}

const AddUser=()=>{
  let d = {id:1011,firstName:'tushar'}
      setData([...data,d]);
}

const deleteData=(id)=>{
  

    const removedArr = [...data].filter(todoId => todoId.id !== id);

      setData(removedArr);
}

  return (
    <div className="App">
          <main className='main'>
          <h1>Admin Panel</h1>
                {
                   data.map((item)=>{
                      return <div className='oneperson'>
                               <div className='content'>

                                  <p>{item.id}</p>
                                  <p>{item.firstName}</p>
                                  <div>

                                   <button className='edit'>edit</button>
                                   <button className='delete' onClick={()=>deleteData(item.id)}>del</button>
                                  </div>
                               </div>
                            </div>
                   })
                   
                }

                <button onClick={AddUser}>Add User</button>
          </main>
    </div>
  );
}

export default App;
