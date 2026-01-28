import Dropdown from "../components/Dropdown";

function ScriptSection({ handler, state }) {
  return (
    <div>
      <Dropdown
        handler={handler}
        options={[
          "new lead",
          "re quote",
          "no contact",
          "conditional requotes",
          "win back",
        ]}
        label="Lead Type"
        state={state.script}
      />
    </div>
  );
}

export default ScriptSection;
