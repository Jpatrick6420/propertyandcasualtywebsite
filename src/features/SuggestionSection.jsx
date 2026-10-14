import CarrierCard from "../components/CarrierCard";
import carrierAppetite from "../data/carrierData";
import { calcAge } from "../helper/helper";
function SuggestionSection({ currentData }) {
  const roofAge =
    calcAge(currentData.home.roof) || calcAge(currentData.home.yearBuilt);

  const newArray = carrierAppetite.filter((carrier) => {
    return carrier.homeowners.maxRoofRcv >= roofAge;
  });

  const worthChecking = carrierAppetite.filter((carrier) => {
    return (
      carrier.homeowners.maxRoofAge >= roofAge &&
      !newArray.some((item) => item.name == carrier.name)
    );
  });

  return (
    <section className="px-4">
      <p className={"text-[10px]"}>
        Last updated:{" "}
        {new Date("10/10/2026").toDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "short",
        })}
      </p>
      <h3 className="text-xl text-green-600 font-bold underline">
        Preferred Carriers-RCV Roof
      </h3>
      <ol>
        {newArray.map((carrier, i) => {
          return <CarrierCard carrier={carrier} key={i} />;
        })}
      </ol>
      {worthChecking.length > 0 && (
        <h3 className="text-xl text-teal-600 font-bold underline">
          Worth Checking
        </h3>
      )}
      <ol>
        {worthChecking.map((carrier, i) => {
          return <CarrierCard carrier={carrier} key={i} />;
        })}
      </ol>
    </section>
  );
}

export default SuggestionSection;
