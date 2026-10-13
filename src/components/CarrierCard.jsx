function CarrierCard({ carrier }) {
  return (
    <li className="text-xs my-4 mx-2 ">
      <h2 className="text-lg font-bold my-4">{carrier.name}</h2>
      <h4 className="text-md font-bold text-green-800">Strengths</h4>
      <ol>
        {carrier.homeowners.strong.map((item, i) => {
          return (
            <li key={i} className="px-4">
              {item}
            </li>
          );
        })}
      </ol>
      {carrier.homeowners.weak.length > 1 && (
        <>
          <h4 className="text-md font-bold text-red-500">Weaknesses</h4>
          <ol className="px-4">
            {carrier.homeowners.weak.map((weakness, i) => {
              return <li key={i}>{weakness}</li>;
            })}
          </ol>
        </>
      )}
      <details>
        <summary className="text-md font-bold text-orange-600">
          Restrictions
        </summary>
        <ol className="px-4">
          {carrier.homeowners.coverage?.restrictions?.map((item, i) => {
            return (
              <li key={i}>
                {i + 1 + ") "}
                {item}
              </li>
            );
          })}
        </ol>
      </details>
      <details>
        <summary className="text-md font-bold">Ineligible</summary>
        <ol>
          {carrier.homeowners.underwriting.ineligiblePropertyTypes?.map(
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
        <summary className="text-md font-bold">Ineligible Risk Types</summary>
        <ol>
          {carrier.homeowners.underwriting.ineligibleRiskTypes?.map(
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
}

export default CarrierCard;
