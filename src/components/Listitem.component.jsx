import React from 'react';
import './list.styles.css';

import { Trash } from 'react-feather';


function ListItems(props){
    const item = props.items;
    // const date = moment().format("DD MM YYYY");
    
    const listitems = item.map( list =>{
          
        return(
            <div key={list.key} className={props.completed?'list completed':'list'} >
               
                  {props.completed? <input type="checkbox" Checked={`${props.completed}`} onClick={(e)=>props.CheckComplete(list.key,e.target.value)}/>
                  :
                 <input type="checkbox"  onClick={()=>props.CheckComplete(list.key)}/>}

       

                    <input type="text" id={item.key}  defaultValue={list.text} /> 
                <span>
                    <button className="trash">
                          <Trash  size="13" color="#ccb9bc" onClick={()=>props.deleteItem(list.key)}/>
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
