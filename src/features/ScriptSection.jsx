import { useState } from "react";
import Dropdown from "../components/Dropdown";
import {
  conditionalRequotes,
  newLeads,
  requoteNoContact,
  requoteTexts,
  winbackScript,
} from "../data/scripts";
import List from "./List";

function ScriptSection({ info, campaign }) {
  const [script, setScript] = useState("newlead");
  return (
    <div className="px-4">
      <Dropdown
        handler={setScript}
        options={[
          "new lead",
          "re quote",
          "no contact",
          "conditional requotes",
          "win back",
        ]}
        label="Lead Type"
        state={script}
      />
      <ul className="px-4 py-1">
        {script == "newlead" &&
          newLeads[campaign].map((item, i) => (
            <List items={item} key={i} info={info} />
          ))}
        {script == "requote" &&
          requoteTexts[campaign].map((item, i) => (
            <List key={i} items={item} info={info} />
          ))}
        {script == "nocontact" &&
          requoteNoContact[campaign].map((item, i) => (
            <List key={i} items={item} info={info} />
          ))}
        {script == "conditionalrequotes" &&
          conditionalRequotes[campaign].map((item, i) => (
            <List key={i} items={item} info={info} />
          ))}
        {script == "winback" &&
          winbackScript[campaign].map((item, i) => (
            <List key={i} items={item} info={info} />
          ))}
      </ul>
    </div>
  );
}

export default ScriptSection;
