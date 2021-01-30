import React from 'react';
import './list.styles.css';

import { Trash } from 'react-feather';




function ListItems({todos,deleteItem,checkCompleted}){

 

    
    const listitems = todos.map( (item,index) =>{
          
        return(
            <div key={item.id} className='list' >
                {console.log(item.completed)}
              
                  <input type="checkbox" defaultChecked={item.completed} onClick={()=>checkCompleted(item.id,index)} id="checkbox" />

                  {item.completed? <input type="text" id={item.id}   defaultValue={item.currentitem} className='completed'/>:
                     <input type="text" id={item.id}   defaultValue={item.currentitem}/> 
                  }
                         
                        
                            <span>
                                  <button className="trash">
                                       <Trash  size="13" color="#ccb9bc" onClick={()=>deleteItem(item.id)}/>
                                 </button>
                           </span>
            </div>)});

         return(
            <div className="todo-list">
                {listitems}  
        </div>)}
 
export default ListItems;
