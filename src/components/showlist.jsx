import React,{useState} from 'react';
import './list.styles.css';
import { Trash } from 'react-feather';


const ShowList = ({item,id,deleteItem}) =>{

    const [complete,setcomplete]=useState(false)

    const handleCheckbox =() =>{
        setcomplete(!complete);
    }

    return(
        <div key={id} className='list' >
             <input type="checkbox" checked={complete} onChange={handleCheckbox}/>

             <input type="text"    defaultValue={item} className={complete ? 'completed' : null}/> 

             <span>
              <button className="trash">
                <Trash  size="13" color="#ccb9bc" onClick={()=>{deleteItem(id)}}/>
             </button>
             </span>

        </div>
    )


}



export default ShowList;