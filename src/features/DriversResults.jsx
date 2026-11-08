import ContextModal from "../components/ContextModal";
import { formatDate, formatName } from "../helper/helper";

function DriversResults({ currentData, setCurrentData }) {
  const handleDelete = (e, index) => {
    e.preventDefault();
    const additionalDrivers = currentData.additionalDrivers;
    const newArr = additionalDrivers.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      notification: { ...prev.notification, editModal: false },
      auto: { ...prev.auto, additionalDrivers: newArr },
    }));
  };
  const handleClick = (item, attribute, i) => {
    setCurrentData((prev) => ({
      ...prev,
      notification: {
        ...prev["notification"],
        editItem: item,
        index: i,
        editAttribute: attribute,
        editModal: true,
      },
    }));
  };
  return (
    <div className="px-4 py-8 md:py-0 relative">
      <h3 className="text-xl font-bold mb-4 ">Additional Drivers</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>DL #</th>
            <th>Occupation</th>
            <th>Good Student</th>
            <th>Military</th>
            <th>Excluded</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.additionalDrivers &&
            currentData.additionalDrivers?.map((item, i) => (
              <tr
                key={i}
                onClick={() => {
                  handleClick("auto", "additionalDrivers", i);
                }}
              >
                <td>{i + 1}</td>
                <td>{formatName(item.name) || ""} </td>
                <td>{formatDate(item.dob) || ""}</td>
                <td>{item.driversLicenseNumber}</td>
                <td>{formatName(item.occupation) || ""} </td>
                <td>
                  {item.occupation.toLowerCase() == "student" &&
                  item.goodStudent == true
                    ? "Y"
                    : ""}
                </td>
                <td>{item.military ? "Y" : ""}</td>
                <td>{item.excluded ? "Y" : ""}</td>

                <td>
                  <button
                    className="index_css bg-red-600 hover:bg-red-800 active:bg-red-600 text-stone-50 px-1 py-0.5"
                    onClick={(e) => {
                      e.stopPropagation();
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
      <ContextModal
        message="Include/exclude all drivers over 16"
        rule={currentData.additionalDrivers.length > 0}
      />
    </div>
  );
}

export default DriversResults;
