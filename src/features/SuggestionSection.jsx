import carrierAppetite from "../data/carrierData";
function SuggestionSection({ currentData }) {
  return (
    <section className="px-4">
      <h3>Carrier Appetite Home</h3>
      <ol>
        {carrierAppetite.map((carrier, i) => {
          return (
            <li key={i} className="text-xs my-4 mx-2 ">
              <h2 className="text-lg font-bold my-4">{carrier.name}</h2>
              <h4 className="text-md font-bold text-green-800">Strengths</h4>
              <ol>
                {carrierAppetite[i].homeowners.strong.map((item, i) => {
                  return (
                    <li key={i} className="px-4">
                      {item}
                    </li>
                  );
                })}
              </ol>
              <h4 className="text-md font-bold text-red-500">Weak</h4>
              <ol className="px-4">
                {carrierAppetite[i].homeowners.weak.map((weakness, i) => {
                  return <li key={i}>{weakness}</li>;
                })}
              </ol>
              <details>
                <summary className="text-md font-bold text-orange-600">
                  Restrictions
                </summary>
                <ol className="px-4">
                  {carrierAppetite[i].homeowners.coverage?.restrictions?.map(
                    (item, i) => {
                      return (
                        <li key={i}>
                          {i + 1 + ") "}
                          {item}
                        </li>
                      );
                    },
                  )}
                </ol>
              </details>
              <details>
                <summary className="text-md font-bold">Ineligible</summary>
                <ol>
                  {carrierAppetite[
                    i
                  ].homeowners.underwriting.ineligiblePropertyTypes?.map(
                    (item, i) => {
                      return (
                        <li key={i} className="px-4">
                          {item}
                        </li>
                      );
                    },
                  )}
                </ol>
              </details>
              <details>
                <summary className="text-md font-bold">
                  Ineligible Risk Types
                </summary>
                <ol>
                  {carrierAppetite[
                    i
                  ].homeowners.underwriting.ineligibleRiskTypes?.map(
                    (item, i) => {
                      return (
                        <li key={i} className="px-4">
                          {item}
                        </li>
                      );
                    },
                  )}
                </ol>
              </details>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default SuggestionSection;
