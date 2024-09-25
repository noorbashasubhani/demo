import React from "react";
import './index.css'
import { useState } from 'react';


const Exmple=( props )=>{
    const { details } = props;

    const [inc, setInc]=useState(0)

    const funcinc=()=>{
        setInc(inc+1)
    }

    const decfun=()=>{
        if(inc > 1){
        setInc(inc-1)
        }
    }


    const refunc=()=>{
        setInc(0)
    }
    
    return(
        <div>
            <div className="maindivsdt">
                <div>
            <h1>Details</h1>
            </div>
            <div>
            {
            details.map((items,index)=>(
                <div className="details">
             <p>{index + 1}</p>       
             <p>{items.firstname}</p>
             <p>{items.lastname}</p>
             <p>{items.qualification}</p>
             <hr />
             </div>
            )
            )}
            </div>
            </div>
             <div>
             <button onClick={decfun}>-</button>
                     <span> {inc} </span>
                
                <button onClick={funcinc}>+</button>
                <button onClick={refunc}>Reset</button>
             </div>
             
        </div>
        
    )
}





export default Exmple;