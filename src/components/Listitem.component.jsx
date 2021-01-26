import React from 'react';
import './list.styles.css';

import { Trash } from 'react-feather';


function ListItems({todos,deleteItem,completed,checkCompleted}){

    // const checkCompleted=(index)=>{


    // }

    
    const listitems = todos.map( (item,index) =>{
          
        return(
            <div key={item.id} className='list' >
               
                  <input type="checkbox" checked={completed} onClick={()=>checkCompleted(item.id)} />

                    <input type="text" id={item.id}   defaultValue={item.currentitem} className={completed?'completed':''}/> 
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
