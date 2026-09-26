import { useState } from "react";
function NewVehicleSection({ handleCurrentData }) {
  const initVehicleOptions = {
    year: "",
    make: "",
    model: "",
    rideShare: false,
    businessUse: false,
    collisionDeductible: 500,
    comprehensiveDeductible: 500,
  };
  const [vehicleOptions, setVehicleOptions] = useState(initVehicleOptions);

  const handleFieldChange = (e, field) => {
    setVehicleOptions((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleCheckbox = (e, field) => {
    setVehicleOptions((prev) => ({ ...prev, [field]: !vehicleOptions[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVehicle = { ...vehicleOptions };
    handleCurrentData((prev) => ({
      ...prev,
      auto: {
        ...prev.auto,
        vehicles: [...prev.auto.vehicles, newVehicle],
      },
    }));
    setVehicleOptions(initVehicleOptions);
  };
  return (
    <>
      <h3 className="font-bold text-xl mt-2">New Vehicle</h3>
      <section className="grid grid-cols-2 bg-blue-200 px-2 py-4 rounded-lg">
        <div className="grid grid-cols-5">
          <label className="mr-2">Year</label>
          <input
            className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 col-span-2 mb-1"
            type="number"
            min="1980"
            value={vehicleOptions.year}
            onChange={(e) => handleFieldChange(e, "year")}
          />
        </div>
        <div className="grid grid-cols-5 mb-1">
          <label className="mr-2"> * Make</label>
          <input
            className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 col-span-2"
            type="text"
            value={vehicleOptions.make}
            onChange={(e) => handleFieldChange(e, "make")}
          />
        </div>
        <div className="grid grid-cols-5 mt-2 mb-1">
          <label className="mr-2">Model</label>
          <input
            className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 col-span-2 "
            type="text"
            value={vehicleOptions.model}
            onChange={(e) => handleFieldChange(e, "model")}
          />
        </div>
        <div className="mb-1">
          <label className="mr-2">Ride Share</label>
          <input
            type="checkbox"
            value={vehicleOptions.rideShare}
            onChange={(e) => handleCheckbox(e, "rideShare")}
          />
          <label className="mr-2 ml-6">Business Use</label>
          <input
            type="checkbox"
            value={vehicleOptions.businessUse}
            onChange={(e) => handleCheckbox(e, "businessUse")}
          />
        </div>

        <div className="mb-1">
          <label className="mr-2">Collision Deductible</label>
          <input
            type="number"
            className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 "
            value={vehicleOptions.collisionDeductible}
            onChange={(e) => {
              handleFieldChange(e, "collisionDeductible");
            }}
          />
        </div>
        <div className="mb-1">
          <label className="mr-2">Comprehensive Deductible</label>
          <input
            className="border-2 border-gray-700 px-1 py-0.5 bg-stone-50"
            type="number"
            value={vehicleOptions.comprehensiveDeductible}
            onChange={(e) => handleFieldChange(e, "comprehensiveDeductible")}
          />
        </div>
        <div className="col-span-2 flex justify-center mb-1">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="px-2 py-0.5 bg-blue-600 hover:bg-blue-800 text-stone-50"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default NewVehicleSection;
