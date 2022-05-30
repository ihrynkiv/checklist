import React from 'react'

export const Counter = ({tasks, onClear}) => {
    const completedTasks = tasks.filter(task => task.completedId)

    return (
        <div className="counter">
            <div>{completedTasks.length} / {tasks.length}</div>
            <div className='btn btn__clear' onClick={onClear}>Clear</div>
        </div>
    )
}