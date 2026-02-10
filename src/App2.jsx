import "./App.css";
import Nav from "./components/Nav";
import ZipCodeSection from "./features/ZipCodeSection.jsx";
import ScriptSection from "./features/ScriptSection.jsx";
import { useEffect, useState } from "react";
import CurrentInfoSection from "./features/CurrentInfoSection.jsx";
import DataExtraction from "./features/dataExtraction.jsx";
import OtherCarriersInfo from "./features/OtherCarriersInfo.jsx";

function App2() {
  const [currentPage, setCurrentPage] = useState("callscript");
  const [currentInfo, setCurrentInfo] = useState({
    name: "",
    phoneNumber: "",
  });
  const [campaign, setCampaign] = useState(1);
  const checkSeason = () => {
    const time = new Date();
    const month = time.getMonth();
    if (0 <= month < 5) {
      setCampaign(0);
    } else if (4 < month < 9) {
      setCampaign(1);
    } else {
      setCampaign(2);
    }
  };
  useEffect(checkSeason, []);

  return (
    <>
      <Nav handler={setCurrentPage} />

      <ZipCodeSection />

      {currentPage == "callscript" && (
        <CurrentInfoSection
          currentInfo={currentInfo}
          setCurrentInfo={setCurrentInfo}
        />
      )}
      {currentPage == "hooks" && <OtherCarriersInfo />}
      {currentPage == "callscript" && (
        <ScriptSection info={currentInfo} campaign={campaign} />
      )}
      {currentPage == "assessor" && <DataExtraction />}
    </>
  );
}

export default App2;
