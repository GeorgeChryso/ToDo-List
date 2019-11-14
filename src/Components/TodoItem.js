import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {


    // getStyle(todo){
    //     if ( todo.completed){
    //         return {

    //             backgroundColor: `#2266a1`,
    //             textDecoration: 'line-through'
    //         }
    //     }
    //     else{
    //        return {

    //             backgroundColor: `#bf0c06`
    //         }
    //     }
    // }

    //more concise getStyle
    getStyle=(todo)=>{
       return {
        backgroundColor: todo.completed?`#19e062`:`#bf0c06`,
        textDecoration: todo.completed?'line-through':'none',
        borderBottom: `1px black double `,
        padding:`10px`,
        color:'white',
        outlineColor: ' black',
        textAlign: `center`,
        textShadow: `1px 2px black`,
        width: `20em`,
        //left :`10em`,
        position: `auto`,
        marginTop: `1em`,
        borderRadius: '10px 50px',

        marginLeft:` 25em`
        

       }
    }

    //ok with this function i wanna change the completed status from true to false and vice versa
    // but to do that i will have to "climb the ladder", going from TodoItem to Todos to App in order to change
    // the state which is located in the App
    // To do that, I can instead relocate the function to the App.js, and just call it here so I can access the state
    // markCopmlete=()=>{
    //     console.log(this.props)

    // }

    render() {

        const {id ,title}=this.props.todo


        return (
            // <div style={{backgroundColor:'#22a16a'}}> mporw na to kanw kai me external metavliti pou ekana parakatw, tin itemStyle
            //  <div style={itemStyle}> // I kai me sunartisi,des katw
            <div style={this.getStyle(this.props.todo)}> 
                
                <p>
                    <input type="checkbox" 
                        id='checky'
                        style={checkboxStyle}
                        checked={this.props.todo.completed}
                        onChange={
                             this.props.markCopmlete.bind(this, id) // mono me bind douleuei
                            // this.props.markCopmlete.call(this,id) DEN DOULEUEI
                            // this.props.markComplete(id) DEN DOULEUEI
                            //prosoxi  this.props.todo.id  mporei na ginei  this.id// des destructuring epanw
                            
                        } 
                      
                    />   {'  '}
                    
                    {
                     // anti gia {this.props.todo.title} , des epanw destructuring
                        title }
                    
                    <button style={btnStyle} onClick={this.props.removeTd.bind(this,id)}> X </button>

                   
                </p>

            </div>
        )
    }
}


// Good Practice PropTypes
// should be the name of the class
// Ti properties xrisimopiw edw? to todo. ti einai omws to todo?
// prepei na to do apo ekei pou to stelnw, diladi to Todos.js
// einai to object tou kathe todo. ara vazw object.isRequired
TodoItem.propTypes={
    todo: PropTypes.object.isRequired

  }

// mporw kserw gw to style na to vlaw kai se ena function kai na to allazw analoga des parapanw
// const itemStyle={

//     backgroundColor: `#2266a1`
// }

const btnStyle={
    color: '#ff0200',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer', //xeraki putsaki
    float: 'right'
}

const checkboxStyle={
    float: 'left',
    transform: `scale(2)`,
    marginTop: `.5em`,
    marginLeft: `2em`,
    clicked: `true`
}
export default TodoItem
