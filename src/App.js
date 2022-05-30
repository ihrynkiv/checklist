import React, { useState, useRef, useEffect } from "react";
import {useNavigate, useSearchParams} from "react-router-dom"

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import {CHECK_LIST, CHECK_LIST_TYPES, CHECK_STATE_ARR} from "./constants";
import {Counter} from "./components/Counter";
import {ThemeToggle} from "./components/ThemeToggle";
import {Navigation} from "./components/Navigation";
import {Navbar} from "./components/Navbar";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TABS_MAP = {
  Style: task => task.type === CHECK_LIST_TYPES.STYLE,
  Solution: task => task.type === CHECK_LIST_TYPES.SOLUTION,
  Tests: task => task.type === CHECK_LIST_TYPES.TESTS,
};

const TABS_NAMES = Object.keys(TABS_MAP);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('defaultState')));

  const [tab, setTab] = useState(window.localStorage.getItem('tab') || CHECK_LIST_TYPES.STYLE);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams()
  const name = searchParams.get("name")
  const url = searchParams.get("url")
  const author = searchParams.get("author")
  const repo = searchParams.get("repo")

  const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem('reviews')) || [])
  const [active, setActive] = useState(+localStorage.getItem('activeReview') || 0)

  useEffect(() => {
    if (name && url ) {
      const dataJSON = localStorage.getItem('reviews') || JSON.stringify([])
      const data = JSON.parse(dataJSON)

      const alreadyExist = data.findIndex(item => item.name === name  && (item.url.includes(url) || url.includes(item.url)))
      if(alreadyExist === -1) {
        data.push({name, url, author, repo, state: CHECK_LIST})
        localStorage.setItem('reviews', JSON.stringify(data))
      }
      localStorage.setItem('activeReview', (alreadyExist + 1))
      setTasks(JSON.parse(localStorage.getItem('reviews'))?.[alreadyExist + 1])
      setActive((alreadyExist + 1)  || data.length)
      setReviews(data)
    }
  }, [author, name, repo, url])


  useEffect(() => {
    const defaultState = JSON.parse(localStorage.getItem('defaultState'))
    if (reviews?.[active - 1]){
      setTasks(reviews[active - 1]?.state || CHECK_LIST)
    } else if (active === 0 && defaultState){
      setTasks(defaultState)
    }
  }, [reviews, active, setTasks])

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completedId: (task.completedId + 1) % CHECK_STATE_ARR.length}
      }
      return task;
    });
    setTasks(updatedTasks);
    const reviews = JSON.parse(localStorage.getItem('reviews'))
    const currentReview = reviews?.[active - 1]
    if (currentReview) {
      currentReview.state = updatedTasks
      localStorage.setItem('reviews', JSON.stringify(reviews))
      setReviews(reviews)
    } else {
      localStorage.setItem('defaultState', JSON.stringify(updatedTasks))
    }
  }

  const taskList = tasks
  .filter(TABS_MAP[tab])
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completedId}
      key={`${active}-${task.id}`}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  const filterList = TABS_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === tab}
      setFilter={setTab}
    />
  ));

  const inProgressItems = taskList.filter(task => !task.props.completed)
  const itemsNoun = inProgressItems.length !== 1 ? 'items' : 'item';
  const headingText = `${inProgressItems.length} ${itemsNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  const clearHandler = () => {
    const reviews = JSON.parse(localStorage.getItem('reviews'))
    const currentReview = reviews?.[active - 1]
    if (currentReview) {
      currentReview.state = CHECK_LIST
      localStorage.setItem('reviews', JSON.stringify(reviews))
      setReviews(reviews)
    } else {
      localStorage.setItem('defaultState', JSON.stringify({ CHECK_LIST }))
    }
    setTasks(CHECK_LIST)
  }

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);


  useEffect(() => {
    navigate('/checklist')
  }, [navigate])

  const handleDelete = () => {
    const newReviews = [...reviews]
    newReviews.splice(active - 1, 1)

    localStorage.setItem('activeReview', '0')
    localStorage.setItem('reviews', JSON.stringify(newReviews))

    setActive(() => 0)
    setReviews(() => newReviews)
  }

  return (
    <div className="todoapp stack-large" key={window.location.href}>
      <Form reviews={reviews} active={active}/>
      <div className="filters btn-group stack-exception">
        { filterList }
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        { taskList }
      </ul>
      {!!reviews.length &&
          <Navigation
            reviews={reviews}
            active={active}
            onDelete={handleDelete}
            onChange={(activeId) => {
              localStorage.setItem('activeReview', activeId)
              setActive(activeId)
            }}
          />
      }
      <Navbar reviews={reviews} active={active}/>
      <Counter tasks={tasks} onClear={clearHandler}/>
      <ThemeToggle/>
    </div>
  );
}

export default App;
