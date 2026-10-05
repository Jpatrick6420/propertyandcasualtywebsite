function VehicleResultsSection({ currentData, setCurrentData }) {
  const handleDelete = (e, index) => {
    e.preventDefault();

    const vehicles = currentData.vehicles;
    const newArr = vehicles.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      auto: { ...prev.auto, vehicles: newArr },
    }));
  };

  return (
    <div className="px-4 py-8">
      <h3 className="font-bold text-xl">Vehicles</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Rideshare</th>
            <th>Business</th>
            <th>Col Ded</th>
            <th>Comp Ded</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.vehicles?.map((item, idx) => (
            <tr key={idx} className="mb-2">
              <td>{idx + 1})</td>
              <td>{item.year} </td>
              <td>{item.make}</td>
              <td>{item.model}</td>
              <td>{item.rideShare ? "Yes" : "No"}</td>
              <td>{item.businessUse ? "Yes  " : "No  "}</td>
              <td>{item.collisionDeductible.split("_").join(" ")}</td>
              <td>{item.comprehensiveDeductible.split("_").join(" ")}</td>
              <td>
                <button
                  onClick={(e) => handleDelete(e, idx)}
                  className="bg-red-600 ml-2 px-1 py-0.5 text-stone-50 hover:bg-red-800 active:bg-red-600"
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

export default VehicleResultsSection;
