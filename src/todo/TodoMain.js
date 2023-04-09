import React from "react";

function TodoMain(props) {
  return (
    <div
      style={{
        border: "1px solid ",
        maxWidth: "50%",
        margin: "auto",
        marginTop: "15px",
        background: "violet",
      }}
    >
      {props.ele.task}{" "}
      <button>{props.ele.complete ? "Completed" : "Incomplete"}</button>{" "}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoMain;
