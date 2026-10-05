import { formatDate } from "../helpers/helpers";

function ClaimsResults({ currentData, setCurrentData, type }) {
  const handleDelete = (e, index) => {
    e.preventDefault();

    const claims = currentData.claims;
    const newArr = claims.filter((item, i) => i != index);
    setCurrentData((prev) => ({
      ...prev,
      [type]: { ...prev[type], claims: newArr },
    }));
  };
  return (
    <>
      <h3 className="text-xl font-bold mt-4 ml-2">Claims</h3>
      {currentData.claims?.map((item, i) => (
        <p key={i}>
          {item.type} {formatDate(item.date)}
          <button
            className="bg-red-600 px-1 py-0.5 text-stone-50 hover:bg-red-800 active:bg-red-600"
            onClick={(e) => handleDelete(e, i)}
          >
            Delete
          </button>
        </p>
      ))}
    </>
  );
}

export default ClaimsResults;
