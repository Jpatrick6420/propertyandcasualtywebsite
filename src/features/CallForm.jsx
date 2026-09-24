import { useState } from "react";
import NewDriverSection from "../components/NewDriverSection";
import NewVehicleSection from "../components/NewVehicleSection";

import FormResultsSection from "./FormResultsSection";
import ClaimsSection from "./ClaimsSection";
import HomeSection from "./HomeSection";
function CallForm() {
  const initInfo = {
    pni: "",
    pniEducation: "",
    pniProfession: "",
    pniDob: "",
    sni: "",
    sniDob: "",
    sniEducation: "",
    sniProfession: "",
    auto: {
      additionalDrivers: [],
      claims: [],
      currentCoverage: "100/300/100",
      whatIsImportant: "",
      vehicles: [],
    },
    home: {
      //calculate replacement year or age
      roof: "",
      yearBuilt: "",
      plumbingUpdated: false,
      electricalUpdated: false,
      dogs: false,
      dogType: [],
      solar: false,
      goodShape: true,
      businessUse: false,
      swimmingPool: false,
      fenced: true,
      claims: [],
      trampoline: false,
    },
  };

  const [currentData, setCurrentData] = useState(initInfo);

  const handlePniAndSniDetails = (e, field) => {
    setCurrentData((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleAutoDataChange = (e, field) => {
    setCurrentData((prev) => ({
      ...prev,
      auto: { ...prev.auto, [field]: e.target.value },
    }));
  };

  const handleSelect = (e, field) => {
    setCurrentData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      <form className="px-4 py-2 ">
        <h3 className="text-lg text-center">New Form Data</h3>
        <div>
          <label>PNI Name</label>
          <input
            type="text"
            className="ml-2"
            value={currentData.pni}
            onChange={(e) => handlePniAndSniDetails(e, "pni")}
          />
        </div>
        <div>
          <label>PNI Age</label>
          <input
            className="ml-2"
            type="date"
            value={currentData.pniDob}
            onChange={(e) => handlePniAndSniDetails(e, "pniDob")}
          />
          <div>
            <label className="mr-2">Level Of Education</label>
            <select
              onChange={(e) => handleSelect(e, "pniEducation")}
              className="border-2 border-gray-600"
            >
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
            className="ml-2"
            type="text"
            value={currentData.pniProfession}
            onChange={(e) => handlePniAndSniDetails(e, "pniProfession")}
          />
        </div>
        <div>
          <label>SNI Name</label>
          <input
            className="ml-2"
            type="text"
            value={currentData.sni}
            onChange={(e) => handlePniAndSniDetails(e, "sni")}
          />
        </div>
        <div>
          <label>SNI DOB</label>
          <input
            className="ml-2"
            type="date"
            value={currentData.sniDob}
            onChange={(e) => handlePniAndSniDetails(e, "sniDob")}
          />
        </div>

        <div>
          <label className="mr-2">Level Of Education</label>
          <select
            onChange={(e) => handleSelect(e, "sniEducation")}
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
          <label>Sni Profession</label>
          <input
            className="ml-2"
            type="text"
            value={currentData.sniProfession}
            onChange={(e) => handlePniAndSniDetails(e, "sniProfession")}
          />
        </div>
        <h2 className="text-lg font-bold">Auto</h2>
        <div></div>
        <NewDriverSection handleCurrentData={setCurrentData} />
        <NewVehicleSection handleCurrentData={setCurrentData} />
        <div>
          <label>Coverage Options</label>
          <select
            className="my-4 border-2 border-gray-600 ml-2"
            onChange={(e) => handleSelect(e, "coverageOptions")}
            value={currentData.auto.currentCoverage}
          >
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
          className="border-gray-600 border-[1px] px-0.5 py-1 text-xs min-w-lg"
          value={currentData.auto["whatIsImportant"]}
          onChange={(e) => handleAutoDataChange(e, "whatIsImportant")}
        ></textarea>
        <ClaimsSection handleCurrentData={setCurrentData} />
        <h2 className="text-lg font-bold">Home</h2>
        <HomeSection handleCurrentHomeData={setCurrentData} />
      </form>
      <FormResultsSection currentData={currentData} />
    </>
  );
}

export default CallForm;
