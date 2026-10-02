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
      {currentData.vehicles?.map((item, idx) => (
        <p key={idx} className="mb-2">
          {" "}
          {idx + 1}) {item.year} {item.make} {item.model} RideShare:{" "}
          {item.rideShare ? "Yes" : "No"} Business Use{" "}
          {item.businessUse ? "Yes" : "No"}
          Collision Deductible: {item.collisionDeductible} <br />
          Comprehensive Deductible: {item.comprehensiveDeductible}
          <button
            onClick={(e) => handleDelete(e, idx)}
            className="bg-red-600 px-1 py-0.5 text-stone-50 hover:bg-red-800 active:bg-red-600"
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default VehicleResultsSection;
