import { formatDate } from "../helpers/helpers";

function PniResults({ pni, sni }) {
  return (
    <div className="grid grid-cols-1">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>Education</th>
            <th>profession</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PNI</td>
            <td>{pni.name}</td>
            <td>{formatDate(pni.pniDob)}</td>
            <td> {pni.pniEducation?.split("_").join(" ")}</td>
            <td>{pni.pniProfession}</td>
          </tr>
          {sni.name && (
            <tr>
              <td>SNI</td>
              <td>{sni.name}</td>
              <td>{formatDate(sni.sniDob)}</td>
              <td> {sni.sniEducation?.split("_").join(" ")}</td>
              <td>{sni.sniProfession}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PniResults;
