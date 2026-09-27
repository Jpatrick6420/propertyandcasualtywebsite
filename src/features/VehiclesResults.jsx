function VehiclesResults({ currentData }) {
  return (
    <>
      <p>Vehicles:</p>
      {currentData.vehicles?.map((item, i) => (
        <p key={i}>
          Year: {item.year} Make: {item.make} Model: {item.model}{" "}
          {item.rideShare ? "Ride Share: Yes" : "Ride Share: No"}
          {item.businessUse ? "Business Use: Yes" : "Business Use: No"}
          Collision: {item.collisionDeductible} Comprehensive:{" "}
          {item.comprehensiveDeductible}
        </p>
      ))}
    </>
  );
}

export default VehiclesResults;
