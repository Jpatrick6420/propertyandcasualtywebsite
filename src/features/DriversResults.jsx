import { formatDate } from "../helpers/helpers";

function DriversResults({ currentData, setCurrentData }) {
  const handleDelete = (e, index) => {
    e.preventDefault();

    const additionalDrivers = currentData.additionalDrivers;
    const newArr = additionalDrivers.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      auto: { ...prev.auto, additionalDrivers: newArr },
    }));
  };
  return (
    <div className="px-4 py-8">
      <h3 className="text-xl font-bold mb-4">Additional Drivers</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Good Student</th>
            <th>Military</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.additionalDrivers &&
            currentData.additionalDrivers?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1})</td>
                <td>{item.name} </td>
                <td>{formatDate(item.dob)}</td>
                <td>{item.occupation} </td>
                <td>
                  {item.occupation?.toLowerCase() == "student"
                    ? item.goodStudent
                    : ""}
                </td>
                <td>{item.military ? "Yes" : ""}</td>
                <td>
                  <button
                    className="bg-red-600 hover:bg-red-800 active:bg-red-600 text-stone-50 px-1 py-0.5"
                    onClick={(e) => {
                      handleDelete(e, i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DriversResults;
