import { formatName } from "../helper/helper";

function RadioInput({ value, options, onChange, name, label }) {
  return (
    <div className="my-2">
      <h3 className="text-lg font-bold">{label}</h3>

      {options.map((option) => {
        return (
          <div key={option} className="flex items-center">
            <label className="text-[10px] flex items-center gap-2 ">
              {formatName(option, "_")}
              <input
                type="radio"
                className="text-[10px]"
                name={name}
                value={option}
                checked={option == value}
                onChange={onChange}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
