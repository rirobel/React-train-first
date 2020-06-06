import React from "react";

function TodoItem(props) {
  return (
    <div>
      <h3>The task to do : {props.item.task} </h3>
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={() => {
          props.handlecheck(props.item.id);
        }}
      />
    </div>
  );
}

export default TodoItem;
