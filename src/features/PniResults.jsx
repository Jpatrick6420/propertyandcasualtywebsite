import { formatDate } from "../helpers/helpers";

function PniResults({ pni, sni }) {
  return (
    <div className="grid grid-cols-1">
      <p>
        Pni : {pni.name} {formatDate(pni.pniDob)} Education:{" "}
        {pni.pniEducation?.split("_").join(" ")} Profession: {pni.pniProfession}
      </p>
      {sni.name && (
        <p>
          Sni: {sni.name} DOB: {formatDate(sni.sniDob)} Education:{" "}
          {sni.sniEducation?.split("_").join(" ")} Profession:{" "}
          {sni.sniProfession}
        </p>
      )}
    </div>
  );
}

export default PniResults;
