import "./App.css";
import Nav from "./components/Nav";
import ZipCodeSection from "./features/ZipCodeSection.jsx";
import ScriptSection from "./features/ScriptSection.jsx";
import { useState } from "react";
import CurrentInfoSection from "./features/CurrentInfoSection.jsx";

function App2() {
  const [currentPage, setCurrentPage] = useState("callscript");
  const [currentInfo, setCurrentInfo] = useState({
    name: "",
    phoneNumber: "",
  });

  return (
    <>
      <Nav handler={setCurrentPage} />

      <ZipCodeSection />

      <CurrentInfoSection
        currentInfo={currentInfo}
        setCurrentInfo={setCurrentInfo}
      />

      {currentPage == "callscript" && <ScriptSection info={currentInfo} />}
    </>
  );
}

export default App2;
