import React from 'react'

class TodoList extends React.Component {
    render() {
        const { todos, receiveTodo } = this.props

        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList