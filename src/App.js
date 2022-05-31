import React, {useState, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import { GlobalHotKeys } from "react-hotkeys";

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import {CHECK_LIST, CHECK_LIST_TYPES, CHECK_STATE_ARR} from "./constants";
import {Counter} from "./components/Counter";
import {ThemeToggle} from "./components/ThemeToggle";
import {Navigation} from "./components/Navigation";
import {Navbar} from "./components/Navbar";

const TABS_MAP = {
  Style: task => task.type === CHECK_LIST_TYPES.STYLE,
  Solution: task => task.type === CHECK_LIST_TYPES.SOLUTION,
  Tests: task => task.type === CHECK_LIST_TYPES.TESTS,
};

const TABS_NAMES = Object.keys(TABS_MAP);

const keyMap = {
  CLEAR_REVIEW: ["del", "backspace"],
  DELETE_REVIEW: ["c", "b"],
  NAVIGATION: ["alt+1", "alt+2", "alt+3", "alt+4", "alt+5", "alt+6", "alt+7", "alt+8", "alt+9", "alt+0"],
  RIGHT: ["right", "d", "l"],
  LEFT: ["left", "a", "h"],
  CHECK_ITEM: ["1", "2", "3", "4", "5"]
}

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

      localStorage.setItem('activeReview', (alreadyExist + 1) || data.length)
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

  function toggleTaskCompleted(id, e) {
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

    if (e && e.target) {
      e.target.blur()
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

  const clearHandler = (activeId) => {
    console.log('clear666')
    const reviews = JSON.parse(localStorage.getItem('reviews'))
    const currentReview = reviews?.[activeId || (active - 1)]
    if (currentReview) {
      currentReview.state = CHECK_LIST
      localStorage.setItem('reviews', JSON.stringify(reviews))
      setReviews(reviews)
    } else {
      localStorage.setItem('defaultState', JSON.stringify(CHECK_LIST))
    }
    setTasks(CHECK_LIST)
  }

  useEffect(() => {
    navigate('/checklist')
  }, [navigate])

  const deleteHandler = (activeId = active, reviewsList = reviews) => {
    console.log('test = ', activeId)
    if (!activeId) return

    const newReviews = [...reviewsList]
    newReviews.splice(activeId - 1, 1)

    const newActive = activeId <= newReviews.length ? activeId : newReviews.length
    localStorage.setItem('activeReview', newActive.toString())
    localStorage.setItem('reviews', JSON.stringify(newReviews))

    setActive(() => newActive)
    setReviews(() => newReviews)
  }

  const handlers = {
    CLEAR_REVIEW: () => {
      clearHandler(localStorage.getItem('activeReview') - 1)
      console.log('clear')
    },
    DELETE_REVIEW: () => {
      console.log('delete')
      console.log('= ',  +localStorage.getItem('activeReview'))
      const activeId = +localStorage.getItem('activeReview') || 0
      const reviewsList = localStorage.getItem('reviews') || reviews || []
      deleteHandler(activeId, reviewsList)
    },
    NAVIGATION: (e) => {
      const activeId = +e.code.match(/\d+/g)
      if (isNaN(activeId)) return null
      const newActive = activeId <= reviews?.length ? activeId : (reviews?.length || 0)
      localStorage.setItem('activeReview', newActive.toString())
      setActive(newActive)
    },
    RIGHT: () => {
      const currentTab = localStorage.getItem('tab') || tab
      const activeTabIndex = TABS_NAMES.indexOf(currentTab)
      const newTab = TABS_NAMES[(activeTabIndex + 1) % TABS_NAMES.length]

      localStorage.setItem('tab', newTab)
      setTab(newTab)
    },
    LEFT: () => {
      const currentTab = localStorage.getItem('tab') || tab
      const activeTabIndex = TABS_NAMES.indexOf(currentTab)
      const newTab = TABS_NAMES[activeTabIndex - 1 < 0 ? TABS_NAMES.length - 1 : activeTabIndex - 1]

      localStorage.setItem('tab', newTab)
      setTab(newTab)
    },
    CHECK_ITEM: (e) => {
      const num = +e.code.match(/\d+/g)
      if (isNaN(num)) return null

      const checkbox = document.querySelectorAll('.todo')?.[num - 1]?.querySelector('input[type="checkbox"]')
      checkbox && checkbox.click()
    }
  };

  return (
        <div className="todoapp stack-large" key={window.location.href}>
          <GlobalHotKeys handlers={handlers} keyMap={keyMap}/>
          <Form reviews={reviews} active={active}/>
          <div className="filters btn-group stack-exception">
            { filterList }
          </div>
          <h2 id="list-heading" tabIndex="-1">
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
                onDelete={deleteHandler}
                onChange={(activeId) => {
                  setActive(activeId)
                  localStorage.setItem('activeReview', activeId)
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
