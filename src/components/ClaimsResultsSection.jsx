import { formatDate } from "../helpers/helpers";

function ClaimsResultsSection({ currentData, label = "Claims" }) {
  return (
    <>
      <ol className="px-4 py-2 space-y-2 font-bold text-xl">{label}</ol>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.claims?.map((item, i) => (
            <tr key={i}>
              <td>{item.type}</td>
              <td>{formatDate(item.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ClaimsResultsSection;
