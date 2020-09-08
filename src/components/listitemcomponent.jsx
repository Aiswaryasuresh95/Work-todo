import React from 'react';
import './liststyles.css';

import { Trash } from 'react-feather';


function ListItems(props){
    const item = props.items;
    // const date = moment().format("DD MM YYYY");
    
    const listitems = item.map( list =>{
          
        return(
            <div key={list.key} className="list" >
                <p>
                    {/* <input type="text" id={item.key}  value={item.text}/>  */}
                    {list.text}
                    <span>
                    <button className="trash">
                    <Trash  size="13" color="#ccb9bc" onClick={()=>props.deleteItem(list.key)}/>
                    </button>
                    </span>
                </p>

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
