import { useState } from "react";
import { handleEdit } from "../helper/helper.js";

function EditModal({ item, attribute, index, currentData, setCurrentData }) {
  const driverBase = currentData.auto.additionalDrivers;

  const curIndex = Number(index);
  const vehicle = currentData.auto?.vehicles?.[curIndex];
  const [vehicleOptions, setVehicleOptions] = useState({
    year: vehicle?.year || "",
    make: vehicle?.make || "",
    model: vehicle?.model || "",
    rideShare: vehicle?.rideShare ?? false,
    businessUse: vehicle?.businessUse ?? false,
    comprehensiveDeductible: vehicle?.comprehensiveDeductible || "not_asked",
    collisionDeductible: vehicle?.collisionDeductible || "not_asked",
    vin: vehicle?.vin || "",
  });

  const [driverDetails, setDriverDetails] = useState({
    name: driverBase[curIndex]?.name || "",
    dob: driverBase[curIndex]?.dob || "",
    occupation: driverBase[curIndex]?.occupation || "",
    goodStudent: driverBase[curIndex]?.goodStudent ?? false,
    military: driverBase[curIndex]?.military ?? false,
    excluded: driverBase[curIndex]?.excluded ?? false,
    driversLicenseNumber: driverBase[curIndex]?.driversLicenseNumber || "",
  });
  const handleFieldChange = (e, field) => {
    if (attribute === "additionalDrivers") {
      setDriverDetails((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }

    if (attribute === "vehicles") {
      setVehicleOptions((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };
  const handleCheckboxChange = (field) => {
    if (attribute === "additionalDrivers") {
      setDriverDetails((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    } else if (attribute === "vehicles") {
      setVehicleOptions((prev) => ({
        ...prev,
        [field]: !prev[field],
      }));
    }
  };
  const handleSubmit = (e, item, attribute, idx, value) => {
    handleEdit(item, attribute, idx, value, setCurrentData);
    setCurrentData((prev) => ({
      ...prev,
      notification: { ...prev.notification, editModal: false },
    }));
  };
  if (item === "auto" && attribute == "additionalDrivers") {
    return (
      <section className="fixed top-7 translate-[40%] px-2 shadow-lg shadow-gray-900 z-10 bg-stone-50">
        <h3 className="font-bold text-xl mt-2">New Driver</h3>
        <section className="bg-white-300  rounded-md px-2 py-4 grid md:grid-cols-2 text-sm">
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
              placeholder="ex:student, etc"
            />
          </div>
          {driverDetails.occupation.toLowerCase() == "student" && (
            <div className="mb-1">
              <label className="mr-2">Good Student</label>
              <input
                className="border-2 border-gray-600 bg-stone-50"
                type="checkbox"
                checked={driverDetails.goodStudent}
                onChange={() => handleCheckboxChange("goodStudent")}
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
          <div className="mb-1">
            <label className="mr-2">Excluded</label>
            <input
              type="checkbox"
              checked={driverDetails.excluded}
              onChange={() =>
                setDriverDetails((prev) => ({
                  ...prev,
                  ["excluded"]: !driverDetails["excluded"],
                }))
              }
            />
          </div>
          <details className="flex items-center gap-4">
            <summary>DL #</summary>
            <input
              className="bg-stone-50 border-2 border-gray-900"
              type="text"
              value={driverDetails.driversLicenseNumber}
              onChange={(e) =>
                setDriverDetails((prev) => ({
                  ...prev,
                  driversLicenseNumber: e.target.value,
                }))
              }
            />
          </details>
          <div className="flex justify-center my-4 col-span-2">
            <button
              className="px-2 py-0.5 bg-amber-600 hover:bg-amber-800 active:bg-amber-600 text-stone-50"
              onClick={(e) => {
                handleSubmit(
                  e,
                  "auto",
                  "additionalDrivers",
                  curIndex,
                  driverDetails,
                );
              }}
              type="button"
            >
              Submit
            </button>
          </div>
        </section>
      </section>
    );
  }
  if (item === "auto" && attribute == "vehicles") {
    return (
      <section className="fixed top-7 translate-[40%] px-2 shadow-lg shadow-gray-900 z-10 bg-stone-50">
        <h3 className="font-bold text-xl mt-2">Vehicles</h3>
        <section className="grid grid-cols-2 bg-rose-300 px-2 py-4 rounded-lg text-sm">
          <div className="grid grid-cols-5">
            <label className="mr-2">Year</label>
            <input
              className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 col-span-2 mb-1 lg:text-sm"
              type="number"
              min="1980"
              value={vehicleOptions.year}
              onChange={(e) => handleFieldChange(e, "year")}
              placeholder="Req"
            />
          </div>
          <div className="grid grid-cols-5 mb-1 lg:text-sm">
            <label className="mr-2"> Make</label>
            <input
              className="border-2 bg-stone-50 border-gray-700 px-1 py-0.5 col-span-2 lg:text-sm"
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
              placeholder="Req"
            />
          </div>
          <div className="mb-1 text-xs md:text-sm grid md:grid-cols-2 gap-2">
            <div className="">
              <label className="pr-2">Ride Share</label>
              <input
                type="checkbox"
                checked={vehicleOptions.rideShare}
                onChange={() => handleCheckboxChange("rideShare")}
              />
            </div>
            <div className="">
              <label className="pr-2">Business Use</label>
              <input
                type="checkbox"
                checked={vehicleOptions.businessUse}
                onChange={() => handleCheckboxChange("businessUse")}
              />
            </div>
          </div>

          <div className="mb-1 grid grid-cols-1 lg:grid-cols-2 ">
            <label className="mr-2">Comp Deductible</label>
            <select
              value={vehicleOptions.comprehensiveDeductible}
              onChange={(e) => handleFieldChange(e, "comprehensiveDeductible")}
              className="border-2 border-gray-600 text-sm bg-stone-50 mr-2"
            >
              <option value="not_asked">Not Asked</option>
              <option value="no_comprehensive">No Comprehensive</option>
              <option value="0">0</option>
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
              <option value="750">750</option>
              <option value="1000">1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>

          <div className="mb-1 grid grid-cols-1 lg:grid-cols-2 pr-4 lg:px-0">
            <label className="mr-2 text-sm">Collision Deductible</label>

            <select
              value={vehicleOptions.collisionDeductible}
              onChange={(e) => handleFieldChange(e, "collisionDeductible")}
              className="border-2 border-gray-600 text-sm bg-stone-50 "
            >
              <option value="not_asked">Not Asked</option>
              <option value="no_collision">No Collision</option>
              <option value="0">0</option>
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
              <option value="750">750</option>
              <option value="1000">1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>
          <details className="lg:flex lg:items-center gap-6 ">
            <summary htmlFor="vin_input" className="col-span-2">
              Vin
            </summary>
            <input
              className="bg-stone-50 col-span-3 border-2 border-gray-900"
              id="vin_input"
              type="text"
              value={vehicleOptions.vin}
              onChange={(e) =>
                setVehicleOptions((prev) => ({ ...prev, vin: e.target.value }))
              }
            />
          </details>
          <div className="col-span-2 flex justify-center my-2">
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e, "auto", "vehicles", curIndex, vehicleOptions);
              }}
              className="px-2 py-0.5 bg-rose-600 hover:bg-rose-800 text-stone-50"
            >
              Submit
            </button>
          </div>
        </section>
      </section>
    );
  }
}

export default EditModal;
