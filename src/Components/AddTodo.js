import React, { Component } from 'react'
import PropTypes from  'prop-types'
export class AddTodo extends Component {
    //keep the state of whats being typed
    state={
        title: ``
    }

    // onChange=(e)=>
    //     this.setState(
    //         {
    //             title:e.target.value //PROSOXI EDW gt skata exw .target.value
    //         }
    //     )
    
    // enallaktika
    onChange=(e)=>this.setState( { [e.target.name]: e.target.value}) //prosoxi kai edw, allazoun ta panta

    onSubmit=(e)=>{
        e.preventDefault();//its gonna try to submit to the actual file, we wanna stop that

        //prosoxi edw ektelw edw tin sinartisi, alla tin exw perasei idi apo to App.js
        this.props.addTodo(this.state.title);
        this.setState({ title:''})

    }



    render() {
        return (
           <form onSubmit={this.onSubmit} style={inputTxtStyle}>
            <input 
            style={{}}
            type='text' name='title' placeholder='Add toDo...' 


            value={this.state.title}
            onChange={this.onChange}
            />
            <input type='submit' value='Axios Submit' className='btnsbm' 
            style={inputStyle} />
           </form>
        )
    }
}

export default AddTodo

//Proptypes
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    removeTd : PropTypes.func.isRequired
  }


  const inputTxtStyle={
    borderColor: '#fa8e00',
    padding: '5px 10px',
    marginLeft: `2em`,
    marginTop: '.5em'
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
