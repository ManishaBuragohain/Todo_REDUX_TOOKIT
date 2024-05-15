import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/Slice";

const Add = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (content) {
      dispatch(addTodo(content));
      setContent("");
    }
  };

  return (
    <div className="add-container">
      <input
        placeholder="Add to do"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="addtodo"
      />
      <button onClick={handleAdd}>Add to Todo</button>
    </div>
  );
};

export default Add;
