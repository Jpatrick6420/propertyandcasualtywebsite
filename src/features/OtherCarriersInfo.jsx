import carriers from "../data/otherCariers";

function OtherCarriersInfo() {
  return (
    <div className="px-4">
      {carriers.map((item, i) => {
        return (
          <div
            className="px-10 py-1 border-2 border-gray-700  my-2 bg-blue-200 hover:translate-x-2"
            key={i}
          >
            <h1 className="text-lg font-bold">{item.name}</h1>
            <ul>
              {item.hooks.map((item, i) => {
                return (
                  <li key={i}>
                    {i + 1}) {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default OtherCarriersInfo;
