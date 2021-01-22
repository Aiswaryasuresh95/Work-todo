import React, { Component } from 'react';
import ListItems from './Listitem.component'



class Plan extends Component{
    constructor(){
        super();
        this.state=
        {
           item:[],
           completed:false,
           currentitem:{
               text:'',
               key:''
           }
        };
    }

    handleChange=(event)=> {
        this.setState({currentitem:{
            text:event.target.value,
            key:Date.now()
           
        }});
      }

   addItem=(event)=>{
       event.preventDefault();
       const newitem=this.state.currentitem;
      
       if(newitem.text!=="")
       {
           const items = [...this.state.item,newitem]
           this.setState    ({
               item : items,
               currentitem : {
                   text:'',
                   key:''
               }, 
           },
           ()=>
           {
            console.log(this.state.item);
           })
          }
       }
     

     deleteItem=(key)=>{
         const flitereditems = this.state.item.filter(del => del.key!==key)
         this.setState({
             item:flitereditems
         })
     }
     
    CheckComplete=(key)=>{
        
         this.state.item.forEach(it =>{
             if(it.key===key){
                 this.setState(prevState=>{
                     return{
                         completed:!prevState.completed
                     }
                 },
                 ()=>
                   {
                  console.log(this.state.completed);
                }
                 
                 )

                 
             }
             
         });
         
     }




    render(){
        return(
            <section>
              <div className="Main">
                 <header>
                    <h1>Let's plan your day</h1>
                    <form onSubmit={this.addItem}>
                        <input 
                        type="text" 
                        name="items"
                        value={this.state.currentitem.text}
                        placeholder="Enter Your Work"
                        onChange={this.handleChange}
                         />

                        
                    </form>
                    </header>
                  
                  
                
            </div>
            <ListItems items={this.state.item} deleteItem={this.deleteItem} completed={this.state.completed} CheckComplete={this.CheckComplete}/>

            </section>
        )
    }
}
export default Plan;