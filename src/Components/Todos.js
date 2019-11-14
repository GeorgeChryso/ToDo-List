import React,{Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
// basically all the todos

class Todos extends Component {
 
 


    render(){
      console.log(this.props.todos)// this is what I sent from App.js
      return this.props.todos.map(tod=>
        (

          <TodoItem
            key={tod.id} 
            todo={tod} 
            markCopmlete={this.props.markCopmlete}
            removeTd={this.props.removeTd}
            style={contStyle}

          />
          
        )
      )
          
    }
}

// Good Practice PropTypes edw vazw ta properties pou xrisimopoiei to current component, diladi to Todos,
// ti properties xrisimopoiw edw? apo to this.props.todos, to todos pou einai ena array of objects, ara ekei vazw PropTypes.array.isRequired
Todos.propTypes={
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  removeTd : PropTypes.func.isRequired
}

const contStyle={
  display:'block',
  textAlign:`center`,
  overflow: `auto`,
  verticalAlign: `middle`,
  position: `relatve`,
  marginLeft: `auto`,
  marginRight: `auto`,

}
export default Todos;
