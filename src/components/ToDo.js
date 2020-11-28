import React from "react";
import { Check } from "react-feather";
import { X } from "react-feather";
import Emoji from "react-emoji-render";

export const TASK_STATUSES = {
  TO_DO: "TO_DO",
  DONE: "DONE",
};

export default (props) => {
  const handleChange = (name, type) => {
    props.remove(name, type);
  };
  const handleDone = (name) => {
    props.complete(name);
  };
  const rlist = props.tasks.map((todo, idx) => (
    <div key={idx}>
      <li className="todo">{todo}</li>
      <Check
        className="check"
        color="white"
        size={17}
        onClick={() => handleDone(todo)}
      />
      <X
        className="cross"
        color="white"
        size={17}
        onClick={() => handleChange(todo, TASK_STATUSES.TO_DO)}
      />
    </div>
  ));
  const dlist = props.done.map((done, idx) => (
    <div key={idx}>
      <li className="done">{done}</li>
      <X
        className="cross"
        color="white"
        size={17}
        onClick={() => handleChange(done, TASK_STATUSES.DONE)}
      />
    </div>
  ));

  return (
    <div>
      <ul>{rlist}</ul>
      {props.done.length && (
        <h1>
          Completed <Emoji text="👏" />
        </h1>
      )}
      <ul>{dlist}</ul>
    </div>
  );
};
