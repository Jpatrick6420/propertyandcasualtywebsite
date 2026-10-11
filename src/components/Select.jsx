import { formatName } from "../helpers/helpers";

function Select({
  setCurrentData,
  options,
  startValue,
  label,
  attribute,
  item,
}) {
  return (
    <div className="grid md:grid-cols-2 mr-2 ">
      <label className="underline">{label}</label>
      <select
        onChange={(e) =>
          setCurrentData((prev) => ({
            ...prev,
            [item]: { ...prev[item], [attribute]: e.target.value },
          }))
        }
        className="border-2 border-gray-600 mb-1"
        value={startValue}
      >
        {options.map((option, i) => {
          const formattedOption = formatName(option, "_");
          return (
            <option key={i} value={option}>
              {formattedOption}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
