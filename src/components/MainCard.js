import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  insert,
  logIn,
} from "../redux/actions/rootActions";
function MainCard() {
  // ! reading the state
  const localState = useSelector((state) => state);
  // ! dispatch function
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <h1>logged {localState.loggedIn ? "in" : "out"}</h1>
      <h1>This is header {localState.counter}</h1>
      <h3>Insert data using the input box</h3>
      {localState.posts.map((post, key) => (
        <h2 key={key}>{post}</h2>
      ))}

      <label htmlFor="postInput">
        <input
          type="text"
          name="postInput"
          placeholder="insert post"
          value={inputData}
          onChange={(ev) => setInputData(ev.target.value)}
          onKeyDown={(ev) =>
            ev.key === "Enter"
              ? dispatch(insert({ inputData })) && setInputData("")
              : null
          }
        />
      </label>
      <input
        type="submit"
        value="Insert"
        onClick={() => {
          dispatch(insert({ inputData }));
          setInputData("");
        }}
      />
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
      <button onClick={() => dispatch(logIn())}>login</button>
    </div>
  );
}

export default MainCard;
