import { useReducer } from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./features/List.jsx";
import ZipCodeSection from "./features/ZipCodeSection.jsx";
import ScriptSection from "./features/ScriptSection.jsx";
import {
  requoteNoContact,
  requoteTexts,
  newLeads,
  conditionalRequotes,
  winbackScript,
} from "./data/scripts.js";

const initState = { script: "newlead" };
const SET_CALL_TYPE = "SET_CALL_TYPE";

function reducer(state, action) {
  switch (action.type) {
    case SET_CALL_TYPE:
      return { ...state, script: action.payload };
    default:
      return state;
  }
}

function App2() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <Nav />
      <ZipCodeSection />
      <ScriptSection handler={dispatch} state={state.script} />
      <ul>
        {state.script == "newlead" &&
          newLeads.map((item, i) => <List items={item} key={i} />)}
        {state.script == "requote" &&
          requoteTexts.map((item, i) => <List key={i} items={item} />)}
        {state.script == "nocontact" &&
          requoteNoContact.map((item, i) => <List key={i} items={item} />)}
        {state.script == "conditionalrequotes" &&
          conditionalRequotes.map((item, i) => <List key={i} items={item} />)}
        {state.script == "winback" &&
          winbackScript.map((item, i) => <List key={i} items={item} />)}
      </ul>
    </>
  );
}

export default App2;
