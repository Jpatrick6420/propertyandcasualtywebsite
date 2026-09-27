function DriversResults({ currentData }) {
  return (
    <div className="px-4 py-8">
      <h3 className="text-xl font-bold mb-4">Additional Drivers</h3>
      {currentData.additionalDrivers &&
        currentData.additionalDrivers?.map((item, i) => (
          <p key={i} className="mb-2">
            {i + 1}) Name: {item.name} DOB: {item.dob} Occupation:{" "}
            {item.occupation}{" "}
            {item.occupation?.toLowerCase() == "student"
              ? item.goodStudent
              : ""}{" "}
            {item.military ? "Military: Yes" : ""}
          </p>
        ))}
    </div>
  );
}

export default DriversResults;
