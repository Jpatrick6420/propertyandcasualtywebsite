import "./App.css";
import Nav from "./components/Nav";
import ZipCodeSection from "./features/ZipCodeSection.jsx";
import ScriptSection from "./features/ScriptSection.jsx";
import { useState } from "react";
import CurrentInfoSection from "./features/CurrentInfoSection.jsx";
import DataExtraction from "./features/dataExtraction.jsx";
import OtherCarriersInfo from "./features/OtherCarriersInfo.jsx";
import CallForm from "./features/CallForm.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("hooks");
  // const [currentInfo, setCurrentInfo] = useState({
  //   name: "",
  //   phoneNumber: "",
  // });

  return (
    <>
      <Nav handler={setCurrentPage} />
      <ZipCodeSection />
      {/* {currentPage == "callscript" && (
        <CurrentInfoSection
          currentInfo={currentInfo}
          setCurrentInfo={setCurrentInfo}
        />
      )} */}
      {currentPage == "hooks" && <OtherCarriersInfo />}
      {/* {currentPage == "callscript" && <CallForm />} */}
      {currentPage == "assessor" && <DataExtraction />}
      {currentPage == "2" && <CallForm />}
    </>
  );
}

export default App;
