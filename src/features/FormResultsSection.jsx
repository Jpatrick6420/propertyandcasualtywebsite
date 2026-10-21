import { useState } from "react";
import PniResults from "./PniResults";
import DriversResults from "./DriversResults";
import { calcAge, formatDate } from "../helper/helper";
import VehicleResultsSection from "./VehicleResultsSection";
import ClaimsResults from "./ClaimsResults";
import { formatName } from "../helper/helper";
function FormResultsSection({ currentData, setCurrentData }) {
  //   const currentYear = new Date().getFullYear;
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    const textToCopy = `PNI: ${formatName(currentData.pni.name)} | DOB: ${formatDate(currentData.pni.pniDob)} | Education: ${formatName(currentData.pni.pniEducation?.split("_").join(" "))} | Profession: ${formatName(currentData.pni.pniProfession)}
${currentData.sni.name ? `SNI: ${formatName(currentData.sni.name)} | DOB: ${formatDate(currentData.sni.sniDob)} | Education: ${formatName(currentData.sni.sniEducation?.split("_").join(" "))} | Profession: ${formatName(currentData.sni.sniProfession)}` : ""}

AUTO

Additional Drivers:
${
  currentData.auto.additionalDrivers.length
    ? currentData.auto.additionalDrivers
        .map(
          (item, i) =>
            `${i + 1}) Name: ${formatName(item.name)}${item.dob ? ` | DOB: ${formatDate(item.dob)}` : ""}${item.occupation ? ` | Occupation: ${formatName(item.occupation)}` : ""}${
              item.occupation?.toLowerCase() === "student"
                ? ` | Good Student: ${item.goodStudent ? "Yes" : "No"}`
                : ""
            }${item.military ? " | Military: Yes" : ""} ${item.excluded ? " | Excluded: Yes" : ""} `,
        )
        .join("\n")
    : "None"
}

Auto Claims:
${
  currentData.auto.claims.length
    ? currentData.auto.claims
        .map(
          (item, i) =>
            `${i + 1}) ${formatName(item.type)} | ${formatDate(item.date)}`,
        )
        .join("\n")
    : "None"
}

Vehicles:
${
  currentData.auto.vehicles.length
    ? currentData.auto.vehicles
        .map(
          (item, i) =>
            `${i + 1}) ${item.year} ${formatName(item.make)} ${formatName(item.model)}
   Ride Share: ${item.rideShare ? "Yes" : "No"} | Business Use: ${item.businessUse ? "Yes" : "No"}
   Collision: ${formatName(item.collisionDeductible.split("_").join(" "))} | Comprehensive: ${formatName(item.comprehensiveDeductible.split("_").join(" "))}`,
        )
        .join("\n")
    : "None"
}

Current Coverage: ${formatName(currentData.auto.currentCoverage, "_")}
What's Important: ${currentData.auto.whatIsImportant}

HOME FACTS

Year Built: ${currentData.home.yearBuilt}
Roof Age: ${currentData.home.roof} ${calcAge(currentData.home.roof)}
${
  currentData.home.plumbingUpdated
    ? `Plumbing Updated: ${currentData.home.plumbingUpdated} ${calcAge(currentData.home.plumbingUpdated)}`
    : ""
}
${
  currentData.home.electricalUpdated
    ? `Electrical Updated: ${currentData.home.electricalUpdated} ${calcAge(currentData.home.electricalUpdated)}`
    : ""
}
Dog Types: ${
      currentData.home.dogs
        ? currentData.home.dogTypes
            ?.map((dog, i) => `${i + 1}) ${formatName(dog)}`)
            .join(", ")
        : "No"
    }
Solar: ${currentData.home.solar || "No"}
Good Shape: ${formatName(currentData.home.goodShape, "_")}
Business Use: ${formatName(currentData.home.goodShape, "_")}
Swimming Pool: ${formatName(currentData.home.swimmingPool, "_")}
Fenced: ${formatName(currentData.home.fenced, "_")}
Trampoline: ${formatName(currentData.home.trampoline, "_")}

Home Claims:
${
  currentData.home.claims.length
    ? currentData.home.claims
        .map(
          (item, i) =>
            `${i + 1}) ${formatName(item.type)} | ${formatDate(item.date)}`,
        )
        .join("\n")
    : "None"
}

Misc Notes: ${currentData.home.notes || ""}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="mx-4">
      <div className="lg:hidden">
        <PniResults pni={currentData.pni} sni={currentData.sni} />
        <h3 className="font-bold text-xl my-2">Auto</h3>
        <DriversResults currentData={currentData.auto} />

        <p>Current Coverage: {currentData.auto.currentCoverage}</p>
        <ClaimsResults
          currentData={currentData}
          setCurrentData={setCurrentData}
          type="auto"
        />

        <p>What's important: {currentData.auto.whatIsImportant}</p>

        <VehicleResultsSection currentData={currentData.auto} />

        <p>{currentData.currentCoverage}</p>
      </div>
      <div className="lg:hidden">
        <h3 className="font-bold text-xl my-2">Home Facts</h3>
        <p>Year Built: {currentData.home.yearBuilt}</p>
        <p>Roof Age: {calcAge(currentData.home.roof)}</p>
        {currentData.home.plumbingUpdated && (
          <p>Plumbing Updated: {calcAge(currentData.home.plumbingUpdated)}</p>
        )}
        {currentData.home.electricalUpdated && (
          <p>
            Electrical Updated:{" "}
            {calcAge(currentData.home.electricalUpdated)}{" "}
          </p>
        )}
        <ol>
          Dogs:{" "}
          {currentData.home.dogs &&
            currentData.home.dogTypes?.map((dog, i) => (
              <li key={i} className="pl-6">
                {dog}
              </li>
            ))}
        </ol>
        {currentData.home.solar ? (
          <p>Solar: {currentData.home.solar}</p>
        ) : (
          <p>Solar: No</p>
        )}
        {currentData.home.goodShape ? (
          <p>Good Shape: Yes</p>
        ) : (
          <p>Good Shape: No</p>
        )}
        {currentData.home.businessUse ? (
          <p>Business Use: Yes</p>
        ) : (
          <p>Business Use: No</p>
        )}
        {currentData.home.swimmingPool ? (
          <p>Swimming Pool: Yes</p>
        ) : (
          <p>Swimming Pool: No</p>
        )}
        {currentData.home.fenced ? <p>Fenced: Yes</p> : <p>Fenced: No</p>}
        {currentData.home.trampoline ? (
          <p>Trampoline: Yes</p>
        ) : (
          <p>Tampoline: No</p>
        )}
        <ClaimsResults
          currentData={currentData}
          setCurrentData={setCurrentData}
          type="home"
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <button
          className="index_css bg-green-600 hover:bg-green-800 active:bg-green-600 px-2 py-0.5 text-stone-50 hover:cursor-pointer"
          onClick={handleCopy}
        >
          Copy
        </button>
        {isCopied ? (
          <p className="text-xs">Text is Copied</p>
        ) : (
          <p className="text-xs">Copy Text</p>
        )}
      </div>
    </div>
  );
}

export default FormResultsSection;
