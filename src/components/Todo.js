import React from "react";

export default function Todo(props) {
  return (
      <li className="todo">
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                checked={!!props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label" htmlFor={props.id} data-completed={props.completed}>
                {props.name}
              </label>
            </div>
        </div>
      </li>
  );
}
