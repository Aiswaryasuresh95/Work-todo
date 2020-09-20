import React from 'react';
import './list.styles.css';

import { Trash } from 'react-feather';


function ListItems({items,deleteItem,completed,CheckComplete}){
    const item = items;
    // const date = moment().format("DD MM YYYY");
    
    const listitems = item.map( list =>{
          
        return(
            <div key={list.key} className={completed?'list completed':'list'} >
               
                  {completed? <input type="checkbox" Checked={`${completed}`} onClick={(e)=>CheckComplete(list.key,e.target.value)}/>
                  :
                 <input type="checkbox"  onClick={()=>CheckComplete(list.key)}/>}

       

                    <input type="text" id={item.key}  defaultValue={list.text} /> 
                <span>
                    <button className="trash">
                          <Trash  size="13" color="#ccb9bc" onClick={()=>deleteItem(list.key)}/>
                    </button>
                 </span>
                
            

            </div>
        )


    }
        )
    return(
        <div className="todo-list">
           
          {listitems}  
        </div>
    )

}
 
export default ListItems;
