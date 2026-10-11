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

  const handleCheckboxChange = (e, field) => {
    e.preventDefault();
    setDriverDetails((prev) => ({ ...prev, [field]: !driverDetails[field] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!driverDetails.name || !driverDetails.dob) return;
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
    <section>
      <h3 className="font-bold text-xl mt-2">New Driver</h3>
      <section className="bg-amber-200 px-2 py-4 grid md:grid-cols-2 text-sm">
        <div className="mb-1 grid md:grid-cols-2 mr-2">
          <label className="mr-2 lg:text-sm">Enter Driver Name</label>
          <input
            className="border-2 border-gray-600 bg-stone-50"
            type="text"
            value={driverDetails.name}
            onChange={(e) => handleFieldChange(e, "name")}
          />
        </div>
        <div className="mb-1 grid md:grid-cols-2 mr-2">
          <label className="mr-2 lg:text-sm">Date of Birth</label>
          <input
            className="border-2 border-gray-600 bg-stone-50 lg:text-sm"
            type="date"
            value={driverDetails.dob}
            onChange={(e) => handleFieldChange(e, "dob")}
          />
        </div>
        <div className="mb-1 grid md:grid-cols-2 mr-2">
          <label className="mr-2 lg:text-sm">Occupation</label>
          <input
            className="border-2 border-gray-600 bg-stone-50 lg:text-sm"
            type="text"
            value={driverDetails.occupation}
            onChange={(e) => handleFieldChange(e, "occupation")}
          />
        </div>
        {driverDetails.occupation == "student" && (
          <div className="mb-1">
            <label className="mr-2">Good Student</label>
            <input
              className="border-2 border-gray-600 bg-stone-50"
              type="checkbox"
              value={driverDetails.goodStudent}
              onChange={(e) => handleCheckboxChange(e, "goodStudent")}
            />
          </div>
        )}

        <div className="mb-1">
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
        <div className="flex justify-center my-4 col-span-2">
          <button
            className="px-2 py-0.5 bg-amber-600 hover:bg-amber-800 active:bg-amber-600 text-stone-50"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </div>
      </section>
    </section>
  );
}

export default NewDriverSection;
