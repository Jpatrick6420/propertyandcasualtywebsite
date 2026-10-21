import { formatDate, formatName } from "../helper/helper";

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
            <td>{formatName(pni.name)}</td>
            <td>{formatDate(pni.pniDob)}</td>
            <td> {formatName(pni.pniEducation?.split("_").join(" "))}</td>
            <td>{formatName(pni.pniProfession)}</td>
          </tr>
          {sni.name && (
            <tr>
              <td>SNI</td>
              <td>{formatName(sni.name)}</td>
              <td>{formatDate(sni.sniDob)}</td>
              <td> {formatName(sni.sniEducation?.split("_").join(" "))}</td>
              <td>{formatName(sni.sniProfession)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PniResults;
