function VehiclesResults({ currentData }) {
  return (
    <>
      <h3 className="text-xl font-bold">Vehicles</h3>
      {currentData.vehicles?.map((item, i) => (
        <p key={i}>
          Year: {item.year} Make: {item.make} Model: {item.model}{" "}
          {item.rideShare ? "Ride Share: Yes" : "Ride Share: No"}
          {item.businessUse ? "Business Use: Yes" : "Business Use: No"}
          Collision: {item.collisionDeductible.split("_").join(" ")}{" "}
          Comprehensive: {item.comprehensiveDeductible.split("_").join(" ")}
        </p>
      ))}
    </>
  );
}

export default VehiclesResults;
