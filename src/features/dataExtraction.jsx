import { useState } from "react";
import extractText from "../helper_functions/helper";

function DataExtraction() {
  const init = {
    squareFootage: 0,
    basement: 0,
    stories: 0,
    fullBathrooms: 0,
    threeQuarterBaths: 0,
    halfBaths: 0,
    garageFootage: 0,
  };

  const [textInput, setTextInput] = useState("");
  const [stats, setStats] = useState(init);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const toNum = (v) => Number(String(v ?? "").replace(/,/g, "")) || 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    setStats({
      squareFootage: toNum(extractText("Above Grade sqft.", textInput)),
      basement: toNum(extractText("Basement Area", textInput)),
      stories: toNum(extractText("Number of Stories", textInput)),
      fullBathrooms: toNum(extractText("Full Baths", textInput)),
      threeQuarterBaths: toNum(extractText("3/4 Baths", textInput)),
      halfBaths: toNum(extractText("Half Baths", textInput)),
      garageFootage: toNum(extractText("Attached Garage S. Area", textInput)),
    });
    setTextInput("");
  };

  return (
    <>
      <form className="px-4">
        <div>
          <label className="block font-bold text-xl">Insert Text</label>
          <textarea
            id="text"
            value={textInput}
            onChange={(e) => handleChange(e)}
            className="w-2/3 border-2 border-gray-800"
          ></textarea>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="px-4 py-1 bg-blue-400 hover:bg-blue-600 active:bg-blue-400 text-stone-50 my-4"
        >
          Submit
        </button>
      </form>
      <div className="px-4">
        <p className="font-bold">Above Ground: {Number(stats.squareFootage)}</p>
        <p className="font-bold">Basement Sqft: {Number(stats.basement)}</p>
        <p className="font-bold">Stories: {stats.stories}</p>
        <p className="font-bold">Full Bathrooms: {stats.fullBathrooms}</p>
        <p className="font-bold">3/4 Bathrooms: {stats.threeQuarterBaths}</p>
        <p className="font-bold">1/2 Baths: {stats.halfBaths}</p>
        <p className="font-bold">Garage Sqft: {stats.garageFootage}</p>
      </div>
    </>
  );
}

export default DataExtraction;
