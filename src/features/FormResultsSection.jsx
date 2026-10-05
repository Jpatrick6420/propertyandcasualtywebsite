import { useState } from "react";
import PniResults from "./PniResults";
import DriversResults from "./DriversResults";
import VehiclesResults from "./VehiclesResults";
import { calcAge, formatDate } from "../helpers/helpers";
import VehicleResultsSection from "../components/VehicleResultsSection";
import ClaimsResultsSection from "../components/ClaimsResultsSection";

function FormResultsSection({ currentData }) {
  //   const currentYear = new Date().getFullYear;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = `
    Pni : ${currentData.pni.name} DOB: ${formatDate(currentData.pni.pniDob)} Education: ${currentData.pni.pniEducation?.split("_").join(" ")} Profession: ${currentData.pni.pniProfession}
    ${currentData.sni.name && `Sni: ${currentData.sni.name}. DOB: ${formatDate(currentData.sniDob)}`} Education: ${currentData.sniEducation?.split("_").join(" ")} Profession: ${currentData.sniProfession}

    Auto
    
    ${currentData.auto.additionalDrivers ? "Additional Drivers:  " : ""}
    ${
      currentData.auto.additionalDrivers &&
      currentData.auto.additionalDrivers?.map(
        (item, i) =>
          `${i + 1}) Name: ${item.name} ${item.dob ? `DOB: ${formatDate(item.dob)}` : ""} ${item.occupation ? `DOB: ${item.occupation}` : ""}
            ${
              item.occupation?.toLowerCase() == "student"
                ? ` Good Student: ${item.goodStudent ? "Yes" : "No"}  `
                : ""
            }
           
            ${item.military ? "Military: Yes" : ""}`,
      )
    }
      ${currentData.auto.claims ? "Auto Claims  " : ""}
      ${currentData.auto.claims?.map(
        (item, i) => ` ${i + 1})  ${item.type} ${formatDate(item.date)}\n`,
      )}
     ${currentData.auto.vehicles ? "Vehicles  " : ""}
      ${currentData.auto.vehicles?.map(
        (item, i) =>
          ` ${i + 1}) Year: ${item.year}  Make: ${item.make}   Model: ${item.model}\n
          ${item.rideShare ? "Ride Share: Yes " : "Ride Share: No  "}
          ${item.businessUse ? "Business Use: Yes  " : "Business Use: No  "}
          Collision: ${item.collisionDeductible.split("_").join(" ")} 
          Comprehensive: ${item.comprehensiveDeductible.split("_").join(" ")}`,
      )}
      Current Coverage: ${currentData.auto.currentCoverage}
      What's important: ${currentData.auto.whatIsImportant}
      
      Home Facts
      
      Year Built: ${currentData.home.yearBuilt}
      Roof Age: ${currentData.home.roof}  ${calcAge(currentData.home.roof)}
      ${currentData.home.plumbingUpdated ? `Plumbing Updated: ${currentData.home.plumbingUpdated}  ${calcAge(currentData.home.plumbingUpdated)}  ` : ""}
      ${currentData.home.electricalUpdated ? `Electrical Updated: ${currentData.home.electricalUpdated ? "Yes " : "Not known "} ${calcAge(currentData.home.electricalUpdated)}` : ""}
      Dog Types:
      ${
        currentData.home.dogs
          ? currentData.home.dogTypes?.map((dog, i) => `${i + 1} ${dog}\n`)
          : "No"
      }
      ${currentData.home.solar ? `Solar: ${currentData.home.solar} ` : "Solar: No "}
      ${currentData.home.goodShape ? "Good Shape: Yes  " : "Good Shape: No  "}
      ${currentData.home.businessUse ? "Business Use: Yes  " : "Business Use: No "}
      ${
        currentData.home.swimmingPool
          ? "Swimming Pool: Yes "
          : "Swimming Pool: No "
      }
      ${currentData.home.fenced ? "Fenced: Yes " : "Fenced: No "}
      ${currentData.home.trampoline ? "Trampoline: Yes " : "Trampoline: No "}
        
      Home Claims

      ${currentData.home.claims?.map((item, i) => `${i + 1}) ${item.type} ${formatDate(item.date)} `)}\n
      Misc Notes: ${currentData.home?.notes}`;
    try {
      // Use the native Clipboard API
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      // Reset the "Copied!" state after 2 seconds
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
        <ClaimsResultsSection
          currentData={currentData.auto}
          label="Auto Claims"
        />

        <p>What's important: {currentData.auto.whatIsImportant}</p>
        <h3 className="font-bold text-xl pt-4">Vehicles </h3>
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
        <ClaimsResultsSection
          currentData={currentData.home}
          label="Home Claims"
        />
      </div>
      <div className="flex justify-center flex-col items-center">
        <button
          className="bg-green-600 hover:bg-green-800 active:bg-green-600 px-2 py-0.5 text-stone-50 hover:cursor-pointer"
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
