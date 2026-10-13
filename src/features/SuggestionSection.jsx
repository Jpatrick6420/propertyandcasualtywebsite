import CarrierCard from "../components/CarrierCard";
import carrierAppetite from "../data/carrierData";
function SuggestionSection({ currentData }) {
  const roofAge = currentData.home.roof;

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
      <h3>Carrier Appetite RCV</h3>

      <h3 className="text-xl text-green-600 font-bold underline">
        Preferred Carriers-RCV Roof
      </h3>
      <ol>
        {newArray.map((carrier, i) => {
          return <CarrierCard carrier={carrier} key={i} />;
        })}
      </ol>
      <h3 className="text-xl text-teal-600 font-bold underline">
        Worth Checking
      </h3>
      <ol>
        {worthChecking.map((carrier, i) => {
          return <CarrierCard carrier={carrier} key={i} />;
        })}
      </ol>
    </section>
  );
}

export default SuggestionSection;
