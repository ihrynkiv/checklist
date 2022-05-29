import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import {CHECK_LIST_TYPES, CHECK_STATE_ARR} from "./constants";
import {Counter} from "./components/Counter";
import {Switch} from "./components/Switch";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  Style: task => task.type === CHECK_LIST_TYPES.STYLE,
  Solution: task => task.type === CHECK_LIST_TYPES.SOLUTION,
  Tests: task => task.type === CHECK_LIST_TYPES.TESTS,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Style');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completedId: (task.completedId + 1) % CHECK_STATE_ARR.length}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completedId}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const inProgressItems = taskList.filter(task => !task.props.completed)
  const itemsNoun = inProgressItems.length !== 1 ? 'items' : 'item';
  const headingText = `${inProgressItems.length} ${itemsNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <Form/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" className="noselect" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Counter tasks={tasks}/>
      <Switch/>
    </div>
  );
}

export default App;
