import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import {
  weberCountyZipCodes,
  utahCountyZipCodes,
  saltLakeCountyZipCodes,
  boxElderCountyZipCodes,
  tooeleCountyZipCodes,
  davisCountyZipCodes,
} from "./data/zip_code_list.js";

function App() {
  const openGoogleMaps = (address) => {
    const query = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  const openZillowDirect = (address) => {
    // Zillow URLs use hyphens, not plus signs or spaces
    const slug = encodeURIComponent(address.replace(/\s+/g, "-"));
    const url = `https://www.zillow.com/homes/${slug}_rb/`;
    window.open(url, "_blank");
  };

  const openZillowAndGoogle = async (address) => {
    openGoogleMaps(address);
    openZillowDirect(address);
    await navigator.clipboard.writeText(currentAddress);
    setCurrentAddress("");
  };

  const [currentAddress, setCurrentAddress] = useState("");
  const [currentZip, setCurrentZip] = useState("");

  const zipCodeInput = (address) => {
    const match = address.match(/\b\d{5}(?:-\d{4})?$/);
    return match ? match[0] : "";
  };

  const handleAddressChange = () => {
    const zip = zipCodeInput(currentAddress);
    setCurrentZip(zip);
    zip == "" ? console.log("") : console.log("ZipCode:", zip);

    if (saltLakeCountyZipCodes.includes(zip)) {
      window.open("https://www.saltlakecounty.gov/assessor/", "_blank");
      openZillowAndGoogle(currentAddress);
    } else if (weberCountyZipCodes.includes(zip)) {
      window.open("https://webercountyutah.gov/parcelsearch/");
      openZillowAndGoogle(currentAddress);
    } else if (davisCountyZipCodes.includes(zip)) {
      window.open(
        "https://webportal.daviscountyutah.gov/App/PropertySearch/esri/map?_gl=1*knbeo4*_ga*NTMyNTczMDU0LjE3NTM1NDgzNjk.*_ga_C4PN7RFDN6*czE3NTM1NDgzNjgkbzEkZzEkdDE3NTM1NDg1NjQkajYwJGwwJGgw"
      );
      openZillowAndGoogle(currentAddress);
    } else if (boxElderCountyZipCodes.includes(zip)) {
      window.open(
        "https://erecord.boxeldercountyut.gov/eaglesoftware/web/login.jsp"
      );
      openZillowAndGoogle(currentAddress);
    } else if (tooeleCountyZipCodes.includes(zip)) {
      window.open(
        "https://erecording.tooeleco.gov/eaglesoftware/web/login.jsp"
      );
      openZillowAndGoogle(currentAddress);
    } else if (utahCountyZipCodes.includes(zip)) {
      window.open("https://maps.utahcounty.gov/ParcelMap/ParcelMap.html");
      openZillowAndGoogle(currentAddress);
    } else {
      console.log("none found");
    }
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <form method="put" action="/" className="w-1/3">
          <div className="my-2 grid grid-cols-5 ">
            <label htmlFor="address_input">Address</label>
            <input
              type="text"
              id="address_input"
              className="border-1 border-gray-900 ml-2 col-span-4"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              className="px-1 py-0.5 text-sm text-stone-50 bg-blue-400 hover:bg-blue-500 hover:scale-110 active:scale-100 "
              onClick={(e) => {
                e.preventDefault();
                handleAddressChange();
              }}
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
