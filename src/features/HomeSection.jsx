import { useState } from "react";
import HomeClaimsSection from "./HomeClaimsSection";
import ClaimsResultsSection from "../components/ClaimsResultsSection";
function HomeSection({ handleCurrentHomeData, currentData }) {
  const [dogTypeEntry, setDogTypeEntry] = useState("");
  const handleHomeDataChange = (e, field) => {
    handleCurrentHomeData((prev) => ({
      ...prev,
      home: { ...prev.home, [field]: e.target.value },
    }));
  };
  const handleCheckboxHome = (e, field) => {
    e.preventDefault();
    handleCurrentHomeData((prev) => ({
      ...prev,
      home: { ...prev.home, [field]: !prev.home[field] },
    }));
  };
  const handleDogBreedSubmit = (e) => {
    e.preventDefault();

    handleCurrentHomeData((prev) => ({
      ...prev,
      home: { ...prev.home, dogTypes: [...prev.home.dogTypes, dogTypeEntry] },
    }));
    setDogTypeEntry("");
  };

  return (
    <section>
      <div>
        <label>Year Built</label>
        <input
          className="border-2 border-gray-600 ml-2 px-1 py-0.5"
          type="text"
          value={currentData.home.yearBuilt}
          onChange={(e) => handleHomeDataChange(e, "yearBuilt")}
        />
      </div>
      <div className="my-2">
        <label>Roof</label>
        <input
          className="border-2 border-gray-600 ml-2 px-2 py-0.5"
          type="text"
          value={currentData.home.roof}
          onChange={(e) => handleHomeDataChange(e, "roof")}
        />
      </div>
      <div className="mb-2">
        <label>Plumbing Updated</label>
        <input
          type="text"
          className="ml-2 border-2 border-gray-600 px-1 py-0.5"
          value={currentData.home.plumbingUpdated}
          onChange={(e) => handleHomeDataChange(e, "plumbingUpdated")}
        />
      </div>
      <div>
        <label>Electrical Updated</label>
        <input
          className="ml-2 border-2 border-gray-600 px-1 py-0.5"
          type="text"
          value={currentData.home.electricalUpdated}
          onChange={(e) => handleHomeDataChange(e, "electricalUpdated")}
        />
      </div>
      <div>
        <label>Dogs</label>
        <input
          className="ml-2"
          type="checkbox"
          checked={currentData.home.dogs}
          onChange={(e) => handleCheckboxHome(e, "dogs")}
        />
        {currentData.home.dogs && (
          <section className="grid lg:grid-cols-2">
            <div>
              <label>Dog Types</label>
              <input
                className="border-2 border-gray-600 ml-2 px-1 py-0.5"
                type="text"
                value={dogTypeEntry}
                onChange={(e) => setDogTypeEntry(e.target.value)}
              />
              <div>
                <button
                  className="bg-red-600 px-2 py-0.5 hover:bg-red-800 active:bg-red-600 text-stone-50"
                  onClick={(e) => {
                    handleDogBreedSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <h3 className="underline list-decimal">Dog Types</h3>
              <ol>
                {currentData.home.dogTypes?.map((item, i) => (
                  <li key={i} className="px-4">
                    {`${i + 1})`} {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </div>

      <div>
        <label># Solar Panels</label>
        <input
          className="ml-2 border-2 border-gray-600 px-1 py-0.5"
          type="text"
          value={currentData.home.solar}
          onChange={(e) => handleHomeDataChange(e, "solar")}
        />
      </div>
      <div>
        <label>Good Shape</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.goodShape}
          onChange={(e) => handleCheckboxHome(e, "goodShape")}
        />
      </div>
      <div>
        <label>Business Use</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.businessUse}
          onChange={(e) => handleCheckboxHome(e, "businessUse")}
        />
      </div>
      <div>
        <label>Swimming Pool</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.swimmingPool}
          onChange={(e) => handleCheckboxHome(e, "swimmingPool")}
        />
      </div>
      <div>
        <label className="pr-2">Trampoline</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.trampoline}
          onChange={(e) => handleCheckboxHome(e, "trampoline")}
        />
      </div>
      <div>
        <label className="pr-2">Fenced</label>
        <input
          type="checkbox"
          checked={currentData.home.fenced}
          onChange={(e) => handleCheckboxHome(e, "fenced")}
        />
      </div>
      <section className="grid lg:grid-cols-2">
        <div>
          <HomeClaimsSection handleCurrentData={handleCurrentHomeData} />
        </div>
        <div className="hidden lg:block">
          <ClaimsResultsSection
            currentData={currentData.home}
            label="Home Claims"
          />
        </div>
      </section>
    </section>
  );
}

export default HomeSection;
