import { useState } from "react";
import NewDriverSection from "./NewDriverSection";
import NewVehicleSection from "./NewVehicleSection";

import FormResultsSection from "./FormResultsSection";
import ClaimsSection from "./ClaimsSection";
import HomeSection from "./HomeSection";
import PniResults from "./PniResults";
import DriversResults from "./DriversResults";
import VehicleResultsSection from "./VehicleResultsSection";
// import SuggestionSection from "./SuggestionSection";
import ClaimsResults from "./ClaimsResults";
import SuggestionSection from "./SuggestionSection";
import Select from "../components/Select";
import TextInput from "../components/TextInput";
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
      addresses: [],
      notes: "",
    },
    otherRisks: {
      umbrella: false,
      otherAddresses: [],
      motorHomes: [],
      offRoad: [],
      motorcycles: [],
    },
  };

  const [currentData, setCurrentData] = useState(initInfo);

  const resetForm = () => {
    setCurrentData(initInfo);
  };
  const updateItem = (e, item, attribute) => {
    e.preventDefault();
    setCurrentData((prev) => ({
      ...prev,
      [item]: { ...prev[item], [attribute]: e.target.value },
    }));
  };
  const addNewItem = (e, item, attribute, newItem = "") => {
    e.preventDefault();
    setCurrentData((prev) => ({
      ...prev,
      [item]: {
        ...prev[item],
        [attribute]: [...prev[item][attribute], newItem || e.target.value],
      },
    }));
  };
  const handleCheckbox = (risk, attribute) => {
    setCurrentData((prev) => ({
      ...prev,
      [risk]: { ...prev[risk], [attribute]: !prev[risk][attribute] },
    }));
  };
  return (
    <>
      <form className="px-4 py-2 ">
        <h3 className="text-3xl font-bold py-4 text-center bg-gradient-to-bl from-red-600  to-yellow-400 bg-clip-text text-transparent">
          Intake Form
        </h3>
        <section className="grid  md:grid-cols-2">
          <div className="grid md:grid-cols-2 ">
            <div className="pni-section text-sm grid md:grid-col-2 ">
              <TextInput
                value={currentData.pni.name}
                label="PNI Name"
                onChange={(e) => updateItem(e, "pni", "name")}
              />
              <div>
                <div className="grid md:grid-cols-2 mr-2  ">
                  <label>PNI DOB</label>
                  <input
                    className="ml-2 border-2 border-gray-600 mb-1"
                    type="date"
                    value={currentData.pniDob}
                    onChange={(e) => updateItem(e, "pni", "pniDob")}
                  />
                </div>
              </div>
              <div className=" ">
                <Select
                  value={currentData.pni.pniEducation}
                  options={[
                    "not_asked",
                    "ged_pending",
                    "high_school",
                    "some_college",
                    "college_degree",
                    "docterate",
                  ]}
                  label="Level Of Education"
                  onChange={(e) => updateItem(e, "pni", "pniEducation")}
                />
              </div>
              <TextInput
                value={currentData.pni.pniProfession}
                label="Profession"
                onChange={(e) => updateItem(e, "pni", "pniProfession")}
                decoration="underline"
              />
            </div>
            <div className="sni-section text-sm grid md:grid-col-2">
              <div className="grid md:grid-cols-2 mr-2">
                <label>SNI Name</label>
                <input
                  className="ml-2 border-2 border-gray-600 mb-1"
                  type="text"
                  value={currentData.sni.name}
                  onChange={(e) => updateItem(e, "sni", "name")}
                />
              </div>
              <div className="grid md:grid-cols-2 mr-2">
                <label>SNI DOB</label>
                <input
                  className="ml-2 border-2 border-gray-600 mb-1"
                  type="date"
                  value={currentData.sni.sniDob}
                  onChange={(e) => updateItem(e, "sni", "sniDob")}
                />
              </div>

              <Select
                value={currentData.sni.sniEducation}
                options={[
                  "not_asked",
                  "ged_pending",
                  "high_school",
                  "some_college",
                  "college_degree",
                  "docterate",
                ]}
                label="Level Of Education"
                onChange={(e) => updateItem(e, "sni", "sniEducation")}
              />
              <TextInput
                value={currentData.sni.sniProfession}
                label="Profession"
                onChange={(e) => updateItem(e, "sni", "sniProfession")}
                decoration="underline"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <PniResults pni={currentData.pni} sni={currentData.sni} />
          </div>
        </section>
        <h2 className="text-lg font-bold py-2">Auto</h2>
        <section className="grid md:grid-cols-2">
          <div>
            <NewDriverSection addNewItem={addNewItem} />
          </div>
          <div className="hidden lg:block">
            <DriversResults
              currentData={currentData.auto}
              setCurrentData={setCurrentData}
            />
          </div>
        </section>
        <section className="grid md:grid-cols-2">
          <div>
            <NewVehicleSection addNewItem={addNewItem} />
          </div>
          <div className="hidden lg:block">
            <VehicleResultsSection
              setCurrentData={setCurrentData}
              currentData={currentData.auto}
            />
          </div>
        </section>

        <Select
          value={currentData.auto.currentCoverage}
          label="currentCoverage"
          options={[
            "not_confirmed",
            "30/65/25",
            "30/65/50",
            "50/100/50",
            "50/100/100",
            "100/300/50",
            "100/300/100",
            "250/500/50",
            "250/500/50",
            "250/500/100",
            "250/500/250",
            "500/500/100",
            "500/500/500",
            "other",
          ]}
          onChange={(e) => updateItem(e, "auto", "currentCoverage")}
          columns="5"
        />
        <label>What is Important?</label>
        <br></br>
        <textarea
          className="border-gray-600 border-[1px] px-0.5 py-1 text-xs min-w-lg mb-1"
          value={currentData.auto["whatIsImportant"]}
          onChange={(e) => updateItem(e, "auto", "whatIsImportant")}
        ></textarea>
        <section className="grid md:grid-cols-2">
          <div>
            <ClaimsSection
              handleCurrentData={setCurrentData}
              addNewItem={addNewItem}
              risk="auto"
            />
          </div>
          <div className="hidden lg:block px-4 py-8 md:py-0">
            <ClaimsResults
              currentData={currentData.auto}
              setCurrentData={setCurrentData}
              type="auto"
            />
          </div>
        </section>
        <h2 className="text-lg font-bold">Home</h2>
        <HomeSection
          setCurrentData={setCurrentData}
          currentData={currentData}
          updateItem={updateItem}
          addNewItem={addNewItem}
          handleCheckbox={handleCheckbox}
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
