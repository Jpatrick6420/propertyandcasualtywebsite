import { formatName } from "../helper/helper";

function RadioInput({ value, options, onChange, name }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <>
            <label>{formatName(option)}</label>
            <input
              key={option}
              type="radio"
              name={name}
              id={option}
              checked={value == option ? true : false}
            />
          </>
        );
      })}
    </div>
  );
}

export default RadioInput;
