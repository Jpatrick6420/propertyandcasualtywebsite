import TextInput from "../components/TextInput";
import Select from "../components/Select";

function PniSection({ currentData, updateItem }) {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="pni-section text-sm grid md:grid-col-2 ">
        <TextInput
          value={currentData.pni.name}
          label="PNI Name"
          onChange={(e) => updateItem(e, "pni", "name")}
        />
        <div>
          <div className="grid md:grid-cols-2 mr-2  ">
            <label>PNI DOB</label>
            <input
              className="ml-2 border-2 border-gray-600 mb-1"
              type="date"
              value={currentData.pni.pniDob}
              onChange={(e) => updateItem(e, "pni", "pniDob")}
            />
          </div>
        </div>
        <div className=" ">
          <Select
            value={currentData.pni.pniEducation}
            options={[
              "not_asked",
              "ged_pending",
              "high_school",
              "some_college",
              "associates",
              "bachelors_degree",
              "masters",
              "docterate",
            ]}
            label="Level Of Education"
            onChange={(e) => updateItem(e, "pni", "pniEducation")}
          />
        </div>
        <TextInput
          value={currentData.pni.pniProfession}
          label="Profession"
          onChange={(e) => updateItem(e, "pni", "pniProfession")}
          decoration="underline"
        />
      </div>
      <div className="sni-section text-sm grid md:grid-col-2">
        <div className="grid md:grid-cols-2 mr-2">
          <label>SNI Name</label>
          <input
            className="ml-2 border-2 border-gray-600 mb-1"
            type="text"
            value={currentData.sni.name}
            onChange={(e) => updateItem(e, "sni", "name")}
          />
        </div>
        <div className="grid md:grid-cols-2 mr-2">
          <label>SNI DOB</label>
          <input
            className="ml-2 border-2 border-gray-600 mb-1"
            type="date"
            value={currentData.sni.sniDob}
            onChange={(e) => updateItem(e, "sni", "sniDob")}
          />
        </div>

        <Select
          value={currentData.sni.sniEducation}
          options={[
            "not_asked",
            "ged_pending",
            "high_school",
            "some_college",
            "associates",
            "bachelors_degree",
            "masters",
            "docterate",
          ]}
          label="Level Of Education"
          onChange={(e) => updateItem(e, "sni", "sniEducation")}
        />
        <TextInput
          value={currentData.sni.sniProfession}
          label="Profession"
          onChange={(e) => updateItem(e, "sni", "sniProfession")}
          decoration="underline"
        />
      </div>
    </div>
  );
}

export default PniSection;
