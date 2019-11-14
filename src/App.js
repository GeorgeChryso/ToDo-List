import React,{Component} from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/layout/header'
import AddTodo from './Components/AddTodo'
// import uuid from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './Components/pages/About'
import axios from 'axios';


class App extends Component {

  //this is how i ADD state
   state={
     todos:[ 
      //  {id:uuid.v4(),title:`take out the trash`,completed:false},
      //  {id:2,title:`Dinner with Hara`,completed:false},
      //  {id:3,title:`Meeting with Boss`,completed:false},
      //  {id:4,title:`NA NTYTHOUME`,completed:false},

      ]
   }


   //for http requests
   componentDidMount(){
     //get it through the axios library
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res=>this.setState({todos:res.data}))
   }



   //so this essentially is meant to change the completed status, 
   // however I m gonna use this in the TodoItem.js
   // so i somehow need to send it there. First I append it as a prop to Todos.js
   // with markComplete={this.markComplete}, then i transfer it with
   // markComplete={this.props.markComplete} inside the Todos.js, as it is now a prop of Todos.js
   // After that it becomes a prop of TodoItem.js. so i can access it with this.props.markComplete again
   markCopmlete=(id)=>{
      console.log(`THE ID CHANGED IS ${id}`)
      // etsi allazw to state
      this.setState(
        {todos:this.state.todos.map(todo=>
           { //diladi gia na allaksw to state ousiastika epanaprosidorizw olo to object tou state.

              // if(todo.id===id){
              //   return{
              //     id:id,
              //     title:todo.title,
              //     completed: !todo.completed
              //   }
              // }
              // else{
              //   return todo
              // }

              // pio grigora
              if(todo.id===id){ todo.completed=!todo.completed}
              return todo
           }
         )
        })
    }
  
   removeTd=(id)=>{
    // this.setState(
    //   {todos:this.state.todos.filter(todo=>todo.id!==id)
    //   })

    //me axios library
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=>this.setState(
          {todos:this.state.todos.filter(todo=>todo.id!==id)
          }))

   }

   addNew=()=>{
     let newEle={
       id:this.state.todos.length+1,
       title:document.getElementById('texty').value,
       completed:false//
     }
     if(newEle.title.length>20|| !newEle.title.length){
        console.log('PLEASE TYPE A PROPER MESSAGE')
        return false
     }
      this.setState(
      {todos:[...this.state.todos,newEle]
      })
      return false
   }

   clearAll=()=>{
     this.setState({
       todos:[]
     })
   }

   checkAll=()=>{
   
      this.state.todos.forEach(d=>{
        if(!d.completed){
        this.markCopmlete(d.id)}
       })
   }

   unCheckAll=()=>{
    this.state.todos.forEach(d=>{
      if(d.completed){
      this.markCopmlete(d.id)}
     })
 }

   addTodo=(title)=>{
     if(!title.length||title.length>20)return

     // manually
    //  let newTodo={
    //     id:uuid.v4(),
    //     title:title,
    //     completed:false

    //  }

    // this.setState({
    //   todos: [...this.state.todos,newTodo]
    // })
    

    // me http me axios
     axios.post('https://jsonplaceholder.typicode.com/todos',
     {
      title:title,
      completed:false
     }).then(res=> this.setState({
      todos: [...this.state.todos,res.data]
    }))
  }


    render(){
      // this is how i can access state
      console.log(this.state.todos)
      
      return (//JSX CODE
        <Router>
            <div className="App" style={containerStyle}>


            <div className='wrapper'>
                  <h1 style={titleStyle} > MY TODO LIST </h1>
                  <Header />

                  <form method='POST' style={ { marginTop:'1em'}}> 
                      <input type='button' 
                      value='Clear All' 
                      style={inputStyle}
                      onClick={this.clearAll}
                      />
                      <input type='button' 
                      value='Check All' 
                      style={inputStyle}
                      onClick={this.checkAll}
                      />
                      <input type='button' 
                      value='Uncheck All' 
                      style={inputStyle}
                      onClick={this.unCheckAll}
                      />
                  </form>
                  

                  <form style={formStyle}> 
                      <input placeholder='My todo'type='text' id='texty' style={inputTxtStyle} />
                      <input type='button' 
                        value='Add new' 
                        style={inputStyle}
                        onClick={this.addNew}
                      />
                  </form>

                  <Route exact path='/'
                  render={props=>(
                    <React.Fragment>
                      <AddTodo addTodo={this.addTodo} />

                      <Todos  todos={this.state.todos} markCopmlete={this.markCopmlete} removeTd={this.removeTd} />
                    </React.Fragment>
                    )}
                    />
                  <Route path='/about' 
                    component={
                      About
                    } 
                  />
                   
                 

              </div>
            </div>

        </Router>
          );
    }
}

const formStyle={
  marginTop:'1em'
}

const containerStyle={
  backgroundColor: `#1f0c03`,
  textAlign:`center`,
  height: `40em`,
  border: `1px solid black`,
}

const titleStyle={
  textAlign:`center`,
  color: `white`,
  textShadow: `1px 1px black `,
  background:'black',

}

const inputStyle={
    backgroundColor: '#fa8e00',
    textShadow: `1px 1px black `,
    color: `white`,
    border: 'none',
    padding: '5px 10px',
    borderRadius: '10%',
    cursor: 'pointer', //xeraki putsaki
    marginLeft: `2em`,

}


const inputTxtStyle={
  borderColor: '#fa8e00',
  padding: '5px 10px',
  marginLeft: `2em`

}
export default App;
