import { useState } from "react";
function NewDriverSection({ handleCurrentData }) {
  const initDriverDetails = {
    name: "",
    dob: "",
    occupation: "",
    goodStudent: false,
    education: "some_college",
    military: false,
  };
  const [driverDetails, setDriverDetails] = useState(initDriverDetails);

  const handleFieldChange = (e, field) => {
    setDriverDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleSelect = (e) => {
    setDriverDetails((prev) => ({ ...prev, education: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = { ...driverDetails };
    handleCurrentData((prev) => ({
      ...prev,
      auto: {
        ...prev.auto,
        additionalDrivers: [...prev.auto.additionalDrivers, newDriver],
      },
    }));
    setDriverDetails(initDriverDetails);
  };
  return (
    <>
      <h3 className="font-bold text-xl mt-2">New Driver</h3>
      <section className="bg-amber-200 px-2 py-4">
        <div>
          <label className="mr-2">Enter Driver Name</label>
          <input
            className="border-2 border-gray-600"
            type="text"
            value={driverDetails.name}
            onChange={(e) => handleFieldChange(e, "name")}
          />
        </div>
        <div>
          <label className="mr-2">Enter Driver Date of Birth</label>
          <input
            className="border-2 border-gray-600"
            type="date"
            value={driverDetails.dob}
            onChange={(e) => handleFieldChange(e, "dob")}
          />
        </div>
        <div>
          <label className="mr-2">Enter Driver Occupation</label>
          <input
            className="border-2 border-gray-600"
            type="text"
            value={driverDetails.occupation}
            onChange={(e) => handleFieldChange(e, "occupation")}
          />
        </div>
        {driverDetails.occupation == "student" && (
          <div>
            <label className="mr-2">Good Student</label>
            <input
              className="border-2 border-gray-600"
              type="checkbox"
              value={driverDetails.goodStudent}
              onChange={(e) => handleFieldChange(e, "goodStudent")}
            />
          </div>
        )}
        <div>
          <label className="mr-2">Level Of Education</label>
          <select
            onChange={(e) => handleSelect(e)}
            className="border-2 border-gray-600"
          >
            <option value="ged_pending">GED Pending</option>
            <option value="high_school">High School</option>
            <option value="some_college">Some College</option>
            <option value="college_degree">College Degree</option>
            <option value="docterate">Docterate</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Military</label>
          <input
            type="checkbox"
            checked={driverDetails.military}
            onChange={() =>
              setDriverDetails((prev) => ({
                ...prev,
                ["military"]: !driverDetails["military"],
              }))
            }
          />
        </div>
        <div className="flex justify-center my-2">
          <button
            className="px-2 py-0.5 bg-amber-600 hover:bg-amber-800 active:bg-amber-600"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default NewDriverSection;
