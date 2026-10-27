import { useState } from "react";
import ClaimsResults from "./ClaimsResults";
import TextInput from "../components/TextInput";
import ClaimsSection from "./ClaimsSection";
import RadioInput from "../components/RadioInput";
import { formatName } from "../helper/helper";
import ContextModal from "../components/ContextModal";
import { calcAge } from "../helper/helper";
function HomeSection({ setCurrentData, currentData, updateItem, addNewItem }) {
  const [dogTypeEntry, setDogTypeEntry] = useState("");

  const handleDogBreedSubmit = (e) => {
    e.preventDefault();
    if (!dogTypeEntry) return;

    addNewItem(e, "home", "dogTypes", formatName(dogTypeEntry));
    setDogTypeEntry("");
  };

  const handleDelete = (e, index) => {
    const dogTypes = currentData.home.dogTypes;
    const newArr = dogTypes.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      home: { ...prev.home, dogTypes: newArr },
    }));
  };
  const handleNotesChange = (e) => {
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
        >
          <ContextModal
            message="Verify type of roof"
            rule={calcAge(Number(currentData.home.roof)) > 19}
          />
        </TextInput>
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
        <RadioInput
          value={currentData.home.dogs}
          options={["yes", "not_asked", "no"]}
          onChange={(e) => updateItem(e, "home", "dogs")}
          name="dogs"
          label="Dogs"
        />

        {currentData.home.dogs === "yes" && (
          <section>
            <div className="grid grid-cols-4">
              <TextInput
                value={dogTypeEntry}
                label="Dogs Types"
                onChange={(e) => {
                  setDogTypeEntry(e.target.value);
                }}
              />

              <div className="md:flex md:items-center relative">
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
                      type="button"
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
        >
          <ContextModal
            message="Leased or Owned?"
            rule={currentData.home.solar != ""}
          />
        </TextInput>
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <RadioInput
          value={currentData.home.goodShape}
          options={["yes", "not_asked", "no"]}
          onChange={(e) => updateItem(e, "home", "goodShape")}
          name="goodShape"
          label="Good Shape"
        >
          <ContextModal
            message="fixed w/in 30 days?"
            rule={currentData.home.goodShape == "no"}
          />
        </RadioInput>
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <RadioInput
          value={currentData.home.businessUse}
          options={["yes", "not_asked", "no"]}
          onChange={(e) => updateItem(e, "home", "businessUse")}
          name="businessUse"
          label="Business Use"
        >
          <ContextModal
            message="How many guests?"
            rule={currentData.home.businessUse == "yes"}
          />
        </RadioInput>
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <RadioInput
          value={currentData.home.swimmingPool}
          options={["yes", "not_asked", "no"]}
          onChange={(e) => updateItem(e, "home", "swimmingPool")}
          name="swimmingPool"
          label="Swimming Pool"
        />
      </div>
      <div className="grid md:grid-cols-8 my-2">
        <RadioInput
          value={currentData.home.trampoline}
          options={["yes", "not_asked", "no"]}
          onChange={(e) => updateItem(e, "home", "trampoline")}
          name="trampoline"
          label="Trampoline"
        />
      </div>
      {(currentData.home.swimmingPool === "yes" ||
        currentData.home.trampoline == "yes") && (
        <div className="grid md:grid-cols-8 my-2">
          <RadioInput
            value={currentData.home.fenced}
            options={["yes", "not_asked", "no"]}
            onChange={(e) => updateItem(e, "home", "fenced")}
            name="fenced"
            label="Fenced"
          />
        </div>
      )}
      <section className="grid md:grid-cols-2">
        <div>
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
