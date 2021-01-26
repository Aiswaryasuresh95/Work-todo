import React,{useState} from 'react';
import ListItems from './Listitem.component'
import {v4 as uuidv4} from "uuid";


const Plan =() =>{
   
    const [todos, settodos] = useState([]);
    const [currentitem,setCurrentItem]=useState('');
    const [completed, setcompleted] = useState(false);


   const handleChange=(event)=> {
       setCurrentItem(event.target.value);
      }

   const  handleSubmit=(event)=>{
       event.preventDefault();
       if(currentitem!==""){
        const item={id:uuidv4(),currentitem};
        settodos([...todos,item]);
        setCurrentItem('');
        console.log(todos);
       }
     
       }
     

     const deleteItem=(id)=>{
         const flitereditems =todos.filter(del=>del.id!==id);
        settodos([...flitereditems]);
     }

     const checkCompleted=(id)=>{
         todos.forEach(item=>{
             if(item.id===id){
                 setcompleted(!completed);
                 console.log(completed);
             }
         })
     }
        

        return(
            <section>
              <div className="Main">
                 <header>
                    <h1>Let's plan your day</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        name="items"
                        value={currentitem}
                        placeholder="Enter Your Work"
                        onChange={handleChange}
                         />

                        
                      </form>
                    </header>
                  
                  
                
            </div>
            <ListItems todos={todos} deleteItem={deleteItem} completed={completed} checkCompleted={checkCompleted}/>

            </section>
        )
    }

export default Plan;