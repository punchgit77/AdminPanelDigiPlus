import React from 'react'
import Add from './Add'

const Modal = ({passData,setData}) => {

   const data = ()=>{
    const clickModal = document.querySelectorAll(".modalBtn");
    const modal = document.querySelector('.modal');
    const cancelX = document.querySelector('.btnX');
    const overlay = document.querySelector('.overlay');




    const removeModal=()=>{
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    const addModal=()=>{
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    for(let i=0;i<clickModal.length;i++){
        
        clickModal[i].addEventListener('click',removeModal);
    }

cancelX.addEventListener('click',addModal);

overlay.addEventListener('click',addModal);

document.addEventListener('keydown',function(e){
    if(e.key==="Escape" && !modal.classList.contains('hidden') ){
        e.preventDefault();
        console.log(e.key);
        addModal();
        
      }
   });
}
    
  return (
    <>
     <button class="modalBtn" id="modalBtn" onClick={()=>data()}>Click to add user 📖</button>
    
        <div class="modal hidden" id="modal">
        <div class="innermodal">
             <button class="btnX" id="btnX">X</button>
             <Add passData={passData} setData={setData}/>
        </div>
        
        </div>
    <div class="overlay hidden" id="overlay"></div>
 </>
  )
}

export default Modal