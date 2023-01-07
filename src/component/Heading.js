import React from 'react'
import { useState } from 'react'


  






const Heading = () => {
  const[Givevalueuser,setGivevalueuser]=useState()
  const[Givevaluepass,setGivevaluepass]=useState()
 
  const submithandler=(event)=>{
  event.preventDefault();
  setGivevaluepass("")
  setGivevalueuser("")
  
  console.log(Givevalueuser,Givevaluepass);
  
  
}
  
  
  

  
  const Usernamehandler=(e)=>{
   setGivevalueuser(e.target.value) 
  }
  const passhandler=(event)=>{
    setGivevaluepass(event.target.value)
    
  }
  

  
  
 


  return (
    
    <div><form id="signinform" onSubmit={submithandler}>
        <div>
            <label>USERNAME</label>
            <br/>
            <input type="text" value={Givevalueuser}  onChange={Usernamehandler} />
            <br/>
            <br/>
            <label>PASSWORD</label>
            <br/>
            
            <input type="text" value={Givevaluepass} onChange={passhandler}/>
            <br/>
            <br/>
            <button type ='submit' onClick={submithandler}> SUBMIT</button>
                    </div>
        
        </form></div>
  )
}

export default Heading