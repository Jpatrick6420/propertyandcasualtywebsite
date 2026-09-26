import { useState } from "react";
function HomeCliaimsSection({ handleCurrentData }) {
  const initClaim = { type: "", date: "" };
  const [currentClaim, setCurrentClaim] = useState(initClaim);
  const handleFieldChange = (e, field) => {
    setCurrentClaim((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newClaim = { type: currentClaim.type, date: currentClaim.date };
    handleCurrentData((prev) => ({
      ...prev,
      home: { ...prev.home, claims: [...prev.home.claims, newClaim] },
    }));

    setCurrentClaim(initClaim);
  };
  return (
    <>
      <h3 className="font-bold text-xl">Claims</h3>
      <section className="bg-red-200 px-2 py-4 rounded-sm">
        <div className="grid grid-cols-6 mb-2">
          <label className="mr-2">Enter Claim Type</label>
          <input
            className="border-2 border-gray-600 col-span-2 bg-stone-50"
            type="text"
            value={currentClaim.type}
            onChange={(e) => handleFieldChange(e, "type")}
          />
        </div>
        <div className="grid grid-cols-6">
          <label className="mr-2">Enter Date</label>
          <input
            className="border-2 bg-stone-50 border-gray-600 col-span-2"
            type="date"
            value={currentClaim.date}
            onChange={(e) => handleFieldChange(e, "date")}
          />
        </div>
        <div className="flex justify-center my-2">
          <button
            className="px-2 py-0.5 bg-red-600 hover:bg-red-800 active:bg-red-600 text-stone-50 rounded-md"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeCliaimsSection;
