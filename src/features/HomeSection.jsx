import { useState } from "react";
import ClaimsResults from "./ClaimsResults";
import TextInput from "../components/TextInput";
import ClaimsSection from "./ClaimsSection";
function HomeSection({
  setCurrentData,
  currentData,
  updateItem,
  addNewItem,
  handleCheckbox,
}) {
  const [dogTypeEntry, setDogTypeEntry] = useState("");

  const handleDogBreedSubmit = (e) => {
    e.preventDefault();
    if (!dogTypeEntry) return;

    addNewItem(e, "home", "dogTypes", dogTypeEntry);
    setDogTypeEntry("");
  };

  const handleDelete = (e, index) => {
    e.preventDefault();

    const dogTypes = currentData.home.dogTypes;
    const newArr = dogTypes.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      home: { ...prev.home, dogTypes: newArr },
    }));
  };
  const handleNotesChange = (e) => {
    e.preventDefault();
    updateItem(e, "home", "notes");
  };
  return (
    <section>
      <div className="grid md:grid-cols-4">
        <TextInput
          label="Year Built"
          value={currentData.home.yearBuilt}
          onChange={(e) => updateItem(e, "home", "yearBuilt")}
        />
      </div>
      <div className="grid md:grid-cols-4 my-2">
        <TextInput
          label="Roof"
          value={currentData.home.roof}
          onChange={(e) => updateItem(e, "home", "roof")}
        />
      </div>
      <div className="grid md:grid-cols-4 my-2">
        <TextInput
          label="Plumbing Updated"
          value={currentData.home.plumbingUpdated}
          onChange={(e) => updateItem(e, "home", "plumbingUpdated")}
        />
      </div>
      <div className="grid md:grid-cols-4 my-2">
        <TextInput
          label="Electrical Updated"
          value={currentData.home.electricalUpdated}
          onChange={(e) => updateItem(e, "home", "electricalUpdated")}
        />
      </div>
      <div>
        <div className="grid md:grid-cols-8   mb-2 ">
          <label className="text-sm">Dogs</label>
          <input
            className="ml-2"
            type="checkbox"
            checked={currentData.home.dogs}
            onChange={() => handleCheckbox("home", "dogs")}
          />
        </div>

        {currentData.home.dogs && (
          <section>
            <div className="grid grid-cols-4">
              <TextInput
                value={dogTypeEntry}
                label="Dogs Types"
                onChange={(e) => {
                  setDogTypeEntry(e.target.value);
                }}
              />

              <div className="md:flex md:items-center">
                <button
                  className="bg-red-600 px-2 mb-4 md:mb-0 py-0.5 hover:bg-red-800 active:bg-red-600 text-stone-50"
                  onClick={(e) => {
                    handleDogBreedSubmit(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="hidden lg:block mb-4">
              <h3 className="underline list-decimal text-sm">Dog Types</h3>
              <ol className="text-xs">
                {currentData.home.dogTypes?.map((item, i) => (
                  <li key={i} className="px-4 ">
                    {`${i + 1})`} {item}
                    {"  "}
                    <button
                      className=" bg-red-600 px-1 py-0.5 md:ml-2 text-stone-50 hover:bg-red-800 active:bg-red-600"
                      onClick={(e) => handleDelete(e, i)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </div>

      <div className="grid md:grid-cols-4 my-2">
        <TextInput
          value={currentData.home.solar}
          label="# Solar Panels"
          onChange={(e) => updateItem(e, "home", "solar")}
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <label>Good Shape</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.goodShape}
          onChange={() => handleCheckbox("home", "goodShape")}
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <label>Business Use</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.businessUse}
          onChange={() => handleCheckbox("home", "businessUse")}
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <label>Swimming Pool</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.swimmingPool}
          onChange={() => handleCheckbox("home", "swimmingPool")}
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <label className="pr-2">Trampoline</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.trampoline}
          onChange={() => handleCheckbox("home", "trampoline")}
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <label className="pr-2">Fenced</label>
        <input
          type="checkbox"
          className="ml-2"
          checked={currentData.home.fenced}
          onChange={() => handleCheckbox("home", "fenced")}
        />
      </div>
      <section className="grid md:grid-cols-2">
        <div>
          {/* <HomeClaimsSection handleCurrentData={setCurrentData} /> */}
          <ClaimsSection addNewItem={addNewItem} risk="home" />
        </div>
        <div className="hidden lg:block">
          <ClaimsResults
            currentData={currentData.home}
            setCurrentData={setCurrentData}
            type="home"
          />
        </div>
      </section>
      <div>
        <label>Notes</label>
        <br />

        <textarea
          className=" px-2 py-0.5 border-2 text-sm border-gray-600 min-w-[50%]"
          value={currentData.home.notes}
          onChange={(e) => handleNotesChange(e)}
        ></textarea>
      </div>
    </section>
  );
}

export default HomeSection;
