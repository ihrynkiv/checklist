import React from "react";
const DEFAULT_TITLE = 'PR Review CheckList'

const Form = ({reviews = [], active = 0}) => {
    const title = reviews?.[active - 1]?.name || DEFAULT_TITLE
    const url = reviews?.[active - 1]?.url || ''
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
            {
                url ?  <a target="_blank" href={url}>{title}</a> : title
            }
        </label>
      </h2>
    </form>
  );
}

export default Form;
