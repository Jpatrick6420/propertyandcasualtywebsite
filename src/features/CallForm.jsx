import { useState } from "react";
import NewDriverSection from "../components/NewDriverSection";
import NewVehicleSection from "../components/NewVehicleSection";

import FormResultsSection from "./FormResultsSection";
import ClaimsSection from "./ClaimsSection";
import HomeSection from "./HomeSection";
import PniResults from "./PniResults";
import DriversResults from "./DriversResults";
import VehicleResultsSection from "../components/VehicleResultsSection";
import ClaimsResultsSection from "../components/ClaimsResultsSection";
import SuggestionSection from "./SuggestionSection";
import ClaimsResults from "./ClaimsResults";
function CallForm() {
  const initInfo = {
    pni: {
      name: "",
      pniEducation: "not_asked",
      pniProfession: "",
      pniDob: "",
    },
    sni: {
      name: "",
      sniDob: "",
      sniEducation: "not_asked",
      sniProfession: "",
    },
    auto: {
      additionalDrivers: [],
      claims: [],
      currentCoverage: "not_confirmed",
      whatIsImportant: "",
      vehicles: [],
    },
    home: {
      //calculate replacement year or age
      roof: "",
      yearBuilt: "",
      plumbingUpdated: "",
      electricalUpdated: "",
      dogs: false,
      dogTypes: [],
      solar: "",
      goodShape: true,
      businessUse: false,
      swimmingPool: false,
      fenced: false,
      claims: [],
      trampoline: false,
    },
  };

  const [currentData, setCurrentData] = useState(initInfo);

  const handlePniAndSniDetails = (e, person, field) => {
    setCurrentData((prev) => ({
      ...prev,
      [person]: { ...prev[person], [field]: e.target.value },
    }));
  };
  const handleAutoDataChange = (e, field) => {
    setCurrentData((prev) => ({
      ...prev,
      auto: { ...prev.auto, [field]: e.target.value },
    }));
  };

  const handleSelect = (e, person, field) => {
    setCurrentData((prev) => ({
      ...prev,
      [person]: { ...prev[person], [field]: e.target.value },
    }));
  };
  const resetForm = () => {
    setCurrentData(initInfo);
  };
  return (
    <>
      <form className="px-4 py-2 ">
        <h3 className="text-3xl font-bold py-4 text-center">Intake Form</h3>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div>
              <label>PNI Name</label>
              <input
                type="text"
                className="ml-2 border-2 border-gray-600 mb-1"
                value={currentData.pni.name}
                onChange={(e) => handlePniAndSniDetails(e, "pni", "name")}
              />
            </div>
            <div>
              <label>PNI DOB</label>
              <input
                className="ml-2 border-2 border-gray-600 mb-1"
                type="date"
                value={currentData.pniDob}
                onChange={(e) => handlePniAndSniDetails(e, "pni", "pniDob")}
              />
              <div>
                <label className="mr-2">Level Of Education</label>
                <select
                  onChange={(e) => handleSelect(e, "pni", "pniEducation")}
                  className="border-2 border-gray-600 mb-1"
                  value={currentData.pni.pniEducation}
                >
                  <option value="not_asked">Not Asked</option>
                  <option value="ged_pending">GED Pending</option>
                  <option value="high_school">High School</option>
                  <option value="some_college">Some College</option>
                  <option value="college_degree">College Degree</option>
                  <option value="docterate">Docterate</option>
                </select>
              </div>
            </div>
            <div>
              <label>Pni Profession</label>
              <input
                className="ml-2 border-2 border-gray-600 mb-1 "
                type="text"
                value={currentData.pni.pniProfession}
                onChange={(e) =>
                  handlePniAndSniDetails(e, "pni", "pniProfession")
                }
              />
            </div>
            <div>
              <label>SNI Name</label>
              <input
                className="ml-2 border-2 border-gray-600 mb-1"
                type="text"
                value={currentData.sni.name}
                onChange={(e) => handlePniAndSniDetails(e, "sni", "name")}
              />
            </div>
            <div>
              <label>SNI DOB</label>
              <input
                className="ml-2 border-2 border-gray-600 mb-1"
                type="date"
                value={currentData.sni.sniDob}
                onChange={(e) => handlePniAndSniDetails(e, "sni", "sniDob")}
              />
            </div>

            <div>
              <label className="mr-2">Level Of Education</label>
              <select
                onChange={(e) => handleSelect(e, "sni", "sniEducation")}
                className="border-2 border-gray-600 mb-1"
                value={currentData.sni.sniEducation}
              >
                <option value="not_asked">Not Asked</option>
                <option value="ged_pending">GED Pending</option>
                <option value="high_school">High School</option>
                <option value="some_college">Some College</option>
                <option value="college_degree">College Degree</option>
                <option value="docterate">Docterate</option>
              </select>
            </div>
            <div>
              <label>Sni Profession</label>
              <input
                className="ml-2 mb-1 border-2 border-gray-600"
                type="text"
                value={currentData.sni.sniProfession}
                onChange={(e) =>
                  handlePniAndSniDetails(e, "sni", "sniProfession")
                }
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <PniResults pni={currentData.pni} sni={currentData.sni} />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold">Auto</h2>
            <NewDriverSection handleCurrentData={setCurrentData} />
          </div>
          <div className="hidden lg:block">
            <DriversResults
              currentData={currentData.auto}
              setCurrentData={setCurrentData}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <NewVehicleSection handleCurrentData={setCurrentData} />
          </div>
          <div className="hidden lg:block">
            <VehicleResultsSection
              setCurrentData={setCurrentData}
              currentData={currentData.auto}
            />
          </div>
        </section>
        <div>
          <label>Coverage Options</label>
          <select
            className="my-4 border-2 border-gray-600 ml-2 mb-1"
            onChange={(e) => handleSelect(e, "auto", "currentCoverage")}
            value={currentData.auto.currentCoverage}
          >
            <option value="not_confirmed">Not Confirmed</option>
            <option value="30/65/25">30/65/25</option>
            <option value="30/65/50">30/65/50</option>
            <option value="50/100/50">50/100/50</option>
            <option value="50/100/100">50/100/100</option>
            <option value="100/300/50">100/300/50</option>
            <option value="100/300/100">100/300/100</option>
            <option value="100/300/250">100/300/250</option>
            <option value="250/500/100">250/500/100</option>
            <option value="250/500/250+">250/500/250+</option>
          </select>
        </div>
        <label>What is Important?</label>
        <br></br>
        <textarea
          className="border-gray-600 border-[1px] px-0.5 py-1 text-xs min-w-lg mb-1"
          value={currentData.auto["whatIsImportant"]}
          onChange={(e) => handleAutoDataChange(e, "whatIsImportant")}
        ></textarea>
        <section className="grid lg:grid-cols-2">
          <div>
            <ClaimsSection handleCurrentData={setCurrentData} />
          </div>
          <div className="hidden lg:block px-4 py-8">
            {/* <ClaimsResultsSection
              currentData={currentData.auto}
              label="Auto Claims"
            /> */}
            <ClaimsResults
              currentData={currentData.auto}
              setCurrentData={setCurrentData}
              type="auto"
            />
          </div>
        </section>
        <h2 className="text-lg font-bold">Home</h2>
        <HomeSection
          handleCurrentHomeData={setCurrentData}
          currentData={currentData}
        />
      </form>
      <div>
        <FormResultsSection
          currentData={currentData}
          setCurrentData={setCurrentData}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-red-600 hover:bg-red-800 active:bg-red-600 py-0.5 px-2 text-stone-50 ml-2 text-xs"
          onClick={resetForm}
        >
          Reset Form
        </button>
      </div>
      <div>
        <SuggestionSection currentData={currentData} />
      </div>
    </>
  );
}

export default CallForm;
