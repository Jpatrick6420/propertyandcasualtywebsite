import { useState } from "react";
function FormResultsSection({ currentData }) {
  //   const currentYear = new Date().getFullYear;
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    const textToCopy = `
    Pni : ${currentData.pni} DOB: ${currentData.pniDob}
    ${currentData.sni && `Sni: ${currentData.sni}. DOB: ${currentData.sniDob}`}
    Auto
    
    ${currentData.auto.additionalDrivers ? "Additional Drivers" : ""}
    ${
      currentData.auto.additionalDrivers &&
      currentData.auto.additionalDrivers?.map(
        (item, i) =>
          `${i + 1} Name: ${item.name} DOB: ${item.dob} Occupation: ${item.occupation}\n
            ${
              item.occupation?.toLowerCase() == "student"
                ? item.goodStudent
                : ""
            }
            Education: ${item.education.split("_").join(" ")}
            ${item.military ? "Military: Yes" : ""}`,
      )
    }
      ${currentData.auto.claims ? "Claims" : ""}
      ${currentData.auto.claims?.map(
        (item, i) => ` ${i + 1}  ${item.type} ${item.date}\n`,
      )}
     ${currentData.auto.vehicles ? "Vehicles" : ""}
      ${currentData.auto.vehicles?.map(
        (item, i) =>
          ` ${i + 1} Year: ${item.year} Make: ${item.make} Model: ${item.model}\n
          ${item.rideShare ? "Ride Share: Yes" : "Ride Share: No"}
          ${item.businessUse ? "Business Use: Yes" : "Business Use: No"}
          Collision: ${item.collisionDeductible} Comprehensive:
          ${item.comprehensiveDeductible}\n`,
      )}
      Current Coverage: ${currentData.auto.currentCoverage}
      What's important: ${currentData.auto.whatIsImportant}
      ${currentData.auto.vehicles?.map(
        (item, i) =>
          `${i + 1} ${item.year} ${item.make} ${item.model} RideShare:
          ${item.rideShare ? "Yes" : "No"} 
          Business Use: ${item.businessUse ? "Yes" : "No"}
          Collision Deductible: ${item.collisionDeductible} \n
          Comprehensive Deductible: ${item.comprehensiveDeductible}\n
       `,
      )}
      ${currentData.currentCoverage}
      
      Home Facts
      
      Year Built: ${currentData.home.yearBuilt}
      Roof Age: ${currentData.home.roof}
      ${currentData.home.plumbingUpdated && "Plumbing Updated: Yes"}
      ${currentData.home.electricalUpdated && "Electrical Updated: Yes"}
      Dog Types:\n ${
        currentData.home.dogs &&
        currentData.home.dogTypes?.map((dog, i) => `${i + 1} ${dog}`)
      }
      ${currentData.home.solar ? "Solar: Yes" : "Solar: No"}
      ${currentData.home.goodShape ? "Good Shape: Yes" : "Good Shape: No"}
      ${currentData.home.businessUse ? "Business Use: Yes" : "Business Use: No"}
      ${
        currentData.home.swimmingPool
          ? "Swimming Pool: Yes"
          : "Swimming Pool: No"
      }
      ${currentData.home.fenced ? "Fenced: Yes" : "Fenced: No"}
      ${currentData.home.trampoline ? "Trampoline: Yes" : "Trampoline: No"}
        
      Home Claims

      ${currentData.home.claims?.map((item, i) => `${i + 1} ${item.type} ${item.date}`)}\n`;
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
    <div>
      <p>
        Pni : {currentData.pni} {currentData.pniDob}
      </p>
      {currentData.sni && (
        <p>
          Sni: {currentData.sni} DOB: {currentData.sniDob}
        </p>
      )}
      <h3>Auto</h3>
      <p>Additional Drivers</p>
      {currentData.auto.additionalDrivers &&
        currentData.auto.additionalDrivers?.map((item, i) => (
          <p key={i}>
            Name: {item.name} DOB: {item.dob} Occupation: {item.occupation}{" "}
            {item.occupation?.toLowerCase() == "student"
              ? item.goodStudent
              : ""}{" "}
            Education: {item.education.split("_").join(" ")}{" "}
            {item.military ? "Military: Yes" : ""}
          </p>
        ))}

      <p>Vehicles:</p>
      {currentData.auto.vehicles?.map((item, i) => (
        <p key={i}>
          Year: {item.year} Make: {item.make} Model: {item.model}{" "}
          {item.rideShare ? "Ride Share: Yes" : "Ride Share: No"}
          {item.businessUse ? "Business Use: Yes" : "Business Use: No"}
          Collision: {item.collisionDeductible} Comprehensive:{" "}
          {item.comprehensiveDeductible}
        </p>
      ))}
      <p>Current Coverage: {currentData.auto.currentCoverage}</p>
      <p>Claims</p>
      {currentData.auto.claims?.map((item, i) => (
        <p key={i}>
          {item.type} {item.date}
        </p>
      ))}
      <p>What's important: {currentData.auto.whatIsImportant}</p>
      {currentData.auto.vehicles?.map((item, i) => (
        <p key={i}>
          {item.year} {item.make} {item.model} RideShare:{" "}
          {item.rideShare ? "Yes" : "No"} Business Use{" "}
          {item.businessUse ? "Yes" : "No"}
          Collision Deductible: {item.collisionDeductible} <br />
          Comprehensive Deductible: {item.comprehensiveDeductible}
        </p>
      ))}
      <p>{currentData.currentCoverage}</p>
      <h3 className="font-bold text-xl">Home Facts</h3>
      <p>Year Built: {currentData.home.yearBuilt}</p>
      <p>Roof Age: {currentData.home.roof}</p>
      {currentData.home.plumbingUpdated && <p>Plumbing Updated: Yes</p>}
      {currentData.home.electricalUpdated && <p>Electrical Updated: Yes</p>}
      {currentData.home.dogs &&
        currentData.home.dogTypes?.map((dog, i) => <p key={i}>{dog}</p>)}
      {currentData.home.solar ? <p>Solar: Yes</p> : <p>Solar: No</p>}
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
      <p>Home Claims</p>
      {currentData.home.claims?.map((item, i) => (
        <p key={i}>
          {item.type} {item.date}
        </p>
      ))}
      <div className="flex justify-center">
        <button
          className="bg-green-600 hover:bg-green-800 active:bg-green-600 px-2 py-0.5"
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
