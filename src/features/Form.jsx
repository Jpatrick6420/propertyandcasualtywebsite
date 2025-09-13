import CheckboxInput from "../components/CheckboxInput";
import TextInput from "../components/TextInput";
import { useState } from "react";

function Form() {
  const initFormData = {
    isNewRoof: false,
    yearRoofWasReplaced: "",
    currentCarrier: "",
    insuranceTimeFrame: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const [tempData, setTempData] = useState(initFormData);
  const handleRoofReplacement = (e) => {
    const checked = e.target.checked;
    setTempData((prev) => ({
      ...prev,
      isNewRoof: checked,
      yearRoofWasReplaced: checked ? prev.yearRoofWasReplaced : "",
    }));
  };
  const handleYearOfRoofReplacement = (e) => {
    setTempData((prev) => ({
      ...prev,
      yearRoofWasReplaced: e.target.value,
    }));
  };
  const handleCurrentCarrierInput = (e) => {
    setTempData((prev) => ({
      ...prev,
      currentCarrier: e.target.value,
    }));
  };
  const handleInsuranceTimeFrame = (e) => {
    setTempData((prev) => ({
      ...prev,
      insuranceTimeFrame: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(tempData);
    console.log(formData);
  };
  return (
    <form>
      <CheckboxInput
        label="Has the roof been replaced?"
        handler={handleRoofReplacement}
        isChecked={tempData.isNewRoof}
      />
      {tempData.isNewRoof && (
        <TextInput
          label="When was the roof replaced?"
          handler={handleYearOfRoofReplacement}
          value={tempData.yearRoofWasReplaced}
        />
      )}
      <TextInput
        label="Who is your currentCarrier?"
        handler={handleCurrentCarrierInput}
        value={tempData.currentCarrier}
      />
      <TextInput
        label=" When are you looking to get Insurance?"
        handler={handleInsuranceTimeFrame}
        value={tempData.insuranceTimeFrame}
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
