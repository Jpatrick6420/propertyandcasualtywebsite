function VehicleResultsSection({ currentData }) {
  return (
    <div className="px-4 py-8">
      {currentData.vehicles?.map((item, i) => (
        <p key={i} className="mb-2">
          {" "}
          {i + 1}) {item.year} {item.make} {item.model} RideShare:{" "}
          {item.rideShare ? "Yes" : "No"} Business Use{" "}
          {item.businessUse ? "Yes" : "No"}
          Collision Deductible: {item.collisionDeductible} <br />
          Comprehensive Deductible: {item.comprehensiveDeductible}
        </p>
      ))}
    </div>
  );
}

export default VehicleResultsSection;
