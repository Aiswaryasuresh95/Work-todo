import React, { Component } from 'react';
import ListItems from './listitemcomponent'



class Plan extends Component{
    constructor(){
        super();
        this.state=
        {
           item:[],
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
           this.setState({
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
     





    render(){
        return(
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

                        <button type="submit">ADD</button>
                    </form>
                  
                  
                  <ListItems items={this.state.item} deleteItem={this.deleteItem} />
                  
                </header>
            </div>
        )
    }
}
export default Plan;