import carrierAppetite from "../data/carrierData";
function SuggestionSection({ currentData }) {
  return (
    <section>
      <h3>Carrier Appetite</h3>
      <ol>
        {carrierAppetite.map((item, i) => {
          return (
            <li key={i} className="text-xs my-4 mx-2">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <h4 className="text-md font-bold">Strengths</h4>
              <ol>
                {carrierAppetite[i].homeowners.strong.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ol>
              <h4 className="text-md font-bold">Weak</h4>
              <ol>
                {carrierAppetite[i].homeowners.weak.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ol>
              <h4 className="text-md font-bold">Ineligible</h4>
              <ol>
                {carrierAppetite[
                  i
                ].homeowners.underwriting.ineligiblePropertyTypes?.map(
                  (item, i) => {
                    return <li key={i}>{item}</li>;
                  },
                )}
              </ol>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default SuggestionSection;
