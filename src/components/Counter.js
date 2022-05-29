import React from 'react'

export const Counter = ({tasks}) => {
    const completedTasks = tasks.filter(task => task.completedId)

    return (
        <div className="counter">
            {completedTasks.length} / {tasks.length}
        </div>
    )
}