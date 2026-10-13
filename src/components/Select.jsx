import { formatName } from "../helper/helper";

function Select({ onChange, options, value, label, columns = "2" }) {
  return (
    <div className={`grid md:grid-cols-${columns} mr-2 `}>
      <label>{label}</label>
      <select
        onChange={onChange}
        className="border-2 border-gray-600 mb-1"
        value={value}
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
