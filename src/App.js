import './App.css';
import React,{useEffect,useState} from 'react'
import Add from './components/Add';
import Modal from './components/Modal';

const API = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

const getLocalStorage = () =>{
   let data = localStorage.getItem("data");
   if(data){
    return JSON.parse(localStorage.getItem("data"));
   }
   else{
    return [];
   }
}

function App() {
  const [data,setData] = useState(getLocalStorage());
  const [user,setUser] = useState(false);
  

  // const getLocalStorage=()=>{
  //    return localStorage.getItem('data',data);
  // }
// const getApiData=async ()=>{
//      const data = await fetch(API).then(res=>res.json())
//      .then(v=>{
//       console.log(v); 
//       setData(v)
    
//     });
//       return data;
// }


useEffect(()=>{
  // getApiData();
  const d = window.localStorage.getItem("data",JSON.stringify(data));

  setData(JSON.parse(d));

},[])

useEffect(()=>{
    // getApiData();
     localStorage.setItem("data",JSON.stringify(data));
    

},[data])


const AddUser=()=>{
  if(user){
    
    setUser(false);


  }
  else{
    setUser(true);
  }
}

const edit=(id)=>{
         

}

const deleteData=(id)=>{
  let items = JSON.parse(localStorage.getItem("data"));
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("data", JSON.stringify(items));
  if (items.length === 0) {
      localStorage.removeItem(id);
    }
    setData(items);
}

  return (
    <div className="App">
          <main className='main'>
          <h1>Admin Panel</h1>
          <button onClick={AddUser}>Add User</button>

          {
            user?<Modal passData={data} setData={setData}/> :""
          }  
                {
                   data.map((item)=>{
                      return <div className='oneperson'>
                               <div className='content'>

                                  <p>{item.id}</p>
                                  <p>{item.firstName}</p>
                                  <div>

                                   <button className='edit' onClick={()=>edit(item.id)}>edit</button>
                                   <button className='delete' onClick={()=>deleteData(item.id)}>del</button>
                                  </div>
                               </div>
                            </div>
                   })
  
                }
          </main>

                
    </div>
  );
}

export default App;
