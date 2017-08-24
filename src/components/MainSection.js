import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'

 class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: 'SHOW_ALL' }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input id="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount) {
    const  todos = this.props.todos;
    const  filter = this.state;
    const activeCount = todos.length - completedCount
    

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const todos = this.props.todos;
  
    const actions = this.props.actions;
    const filteredTodos = todos
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
     <div>
      <section id="main">
        {this.renderToggleAll(completedCount)}
        <ul id="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
      {this.renderFooter(completedCount)}
      </div>
    )
  }
}


export default MainSection;