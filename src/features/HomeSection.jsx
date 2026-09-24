import { useState } from "react";
import HomeClaimsSection from "./HomeClaimsSection";
function HomeSection({ handleCurrentHomeData }) {
  const init = {
    yearBuilt: "",
    roof: "",
    plumbingUpdated: false,
    electricalUpdated: false,
    dogs: false,
    dogTypes: [],
    solar: false,
    goodShape: true,
    businessUse: false,
    swimmingPool: false,
    trampoline: false,
    claims: [],
    fenced: true,
  };
  const [dogTypeEntry, setDogTypeEntry] = useState("");
  const [currentHomeFacts, setCurrentHomeFacts] = useState(init);
  const handleHomeDataChange = (e, field) => {
    setCurrentHomeFacts((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleCheckboxHome = (e, field) => {
    e.preventDefault();
    setCurrentHomeFacts((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const handleDogBreedSubmit = (e) => {
    e.preventDefault();
    setCurrentHomeFacts((prev) => ({
      ...prev,
      dogTypes: [...prev.dogTypes, dogTypeEntry],
    }));
    setDogTypeEntry("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const homeDetails = { ...currentHomeFacts };
    handleCurrentHomeData((prev) => ({
      ...prev,
      home: { ...homeDetails },
    }));
  };
  return (
    <section>
      <div>
        <label>Year Built</label>
        <input
          className="border-2 border-gray-600 ml-2 px-1 py-0.5"
          type="text"
          value={currentHomeFacts.yearBuilt}
          onChange={(e) => handleHomeDataChange(e, "yearBuilt")}
        />
      </div>
      <div className="my-2">
        <label>Roof</label>
        <input
          className="border-2 border-gray-600 ml-2 px-2 py-0.5"
          type="text"
          value={currentHomeFacts.roof}
          onChange={(e) => handleHomeDataChange(e, "roof")}
        />
      </div>
      <div>
        <label>Plumbing Updated</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentHomeFacts.plumbingUpdated}
          onChange={(e) => handleCheckboxHome(e, "plumbingUpdated")}
        />
      </div>
      <div>
        <label>Electrical Updated</label>
        <input
          className="ml-2"
          type="checkbox"
          checked={currentHomeFacts.electricalUpdated}
          onChange={(e) => handleCheckboxHome(e, "electricalUpdated")}
        />
      </div>
      <div>
        <label>Dogs</label>
        <input
          className="ml-2"
          type="checkbox"
          checked={currentHomeFacts.dogs}
          onChange={(e) => handleCheckboxHome(e, "dogs")}
        />
        {currentHomeFacts.dogs && (
          <>
            <label>Dog Types</label>
            <input
              className="border-2 border-gray-600 ml-2 px-1 py-0.5"
              type="text"
              value={dogTypeEntry}
              onChange={(e) => setDogTypeEntry(e.target.value)}
            />
            <div>
              <button
                className="bg-red-600 px-2 py-0.5 hover:bg-red-800 active:bg-red-600"
                onClick={(e) => {
                  handleDogBreedSubmit(e);
                }}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>

      <div>
        <label>Solar</label>
        <input
          className="ml-2"
          type="checkbox"
          checked={currentHomeFacts.solar}
          onChange={(e) => handleCheckboxHome(e, "solar")}
        />
      </div>
      <div>
        <label>Good Shape</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentHomeFacts.goodShape}
          onChange={(e) => handleCheckboxHome(e, "goodShape")}
        />
      </div>
      <div>
        <label>Business Use</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentHomeFacts.businessUse}
          onChange={(e) => handleCheckboxHome(e, "businessUse")}
        />
      </div>
      <div>
        <label>Swimming Pool</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentHomeFacts.swimmingPool}
          onChange={(e) => handleCheckboxHome(e, "swimmingPool")}
        />
      </div>
      <div>
        <label className="pr-2">Trampoline</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentHomeFacts.trampoline}
          onChange={(e) => handleCheckboxHome(e, "trampoline")}
        />
      </div>
      <div>
        <label className="pr-2">Fenced</label>
        <input
          type="checkbox"
          checked={currentHomeFacts.fenced}
          onChange={(e) => handleCheckboxHome(e, "fenced")}
        />
      </div>
      <HomeClaimsSection handleCurrentData={setCurrentHomeFacts} />
      <div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="px-2 py-0.5 bg-purple-600 hover:bg-purple-800 text-stone-50"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default HomeSection;
