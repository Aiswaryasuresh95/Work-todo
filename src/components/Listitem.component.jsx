import React from 'react';
import './list.styles.css';
import ShowList from './showlist';





function ListItems({todos,deleteItem}){

   
   
    return(
        <div>
            {todos.map((item)=>{
                return(
                <ShowList item={item.currentitem} id={item.id} key={item.id} deleteItem={deleteItem}/>
                )
            })}

        </div>
    )
    }

    export default ListItems;

        

       