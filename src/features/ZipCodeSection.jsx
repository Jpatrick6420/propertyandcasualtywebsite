import {
  weberCountyZipCodes,
  utahCountyZipCodes,
  saltLakeCountyZipCodes,
  boxElderCountyZipCodes,
  tooeleCountyZipCodes,
  davisCountyZipCodes,
  washingtonCountyZipCodes,
  carbonCountyZips,
  adaZipCodes,
  kootenaiZipCodes,
  bonnerZipCodes,
} from "../data/zip_code_list.js";
import Popup from "../components/Popup.jsx";
import { useState } from "react";

function ZipCodeSection() {
  const allZips = [
    ...weberCountyZipCodes,
    ...utahCountyZipCodes,
    ...saltLakeCountyZipCodes,
    ...boxElderCountyZipCodes,
    ...tooeleCountyZipCodes,
    ...davisCountyZipCodes,
    ...washingtonCountyZipCodes,
    ...carbonCountyZips,
    ...adaZipCodes,
    ...kootenaiZipCodes,
    ...bonnerZipCodes,
  ];
  const [currentAddress, setCurrentAddress] = useState("");

  const [isPopUp, setIsPopUp] = useState(false);

  const openGoogleMaps = (address) => {
    const formatted = address.trim().replace(/\s+/g, "+");
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      formatted
    )}`;
    const win = window.open(url, "_blank");

    if (!win) {
      alert("Popup blocked! Please allow popups for this site.");
    }
  };

  const openZillowDirect = (address) => {
    // Zillow URLs use hyphens, not plus signs or spaces
    const slug = encodeURIComponent(address.replace(/\s+/g, "-"));
    const url = `https://www.zillow.com/homes/${slug}_rb/`;
    window.open(url, "_blank");
  };

  const openZillowAndGoogle = (address) => {
    openGoogleMaps(address);
    openZillowDirect(address);
    setCurrentAddress("");
  };

  const zipCodeInput = (address) => {
    const match = address.match(/\b\d{5}(?:-\d{4})?$/);
    return match ? match[0] : "";
  };
  const handleEnterPopUp = () => {
    setIsPopUp(true);
  };
  const handleLeavePopUp = () => {
    setIsPopUp(false);
  };

  const handleAddressChange = () => {
    const zip = zipCodeInput(currentAddress);

    if (saltLakeCountyZipCodes.includes(zip)) {
      window.open("https://www.saltlakecounty.gov/assessor/", "_blank");
      openZillowAndGoogle(currentAddress);
    } else if (weberCountyZipCodes.includes(zip)) {
      window.open("https://webercountyutah.gov/parcelsearch/");
      openZillowAndGoogle(currentAddress);
    } else if (davisCountyZipCodes.includes(zip)) {
      window.open(
        "https://webportal.daviscountyutah.gov/App/PropertySearch/esri/map?_gl=1*1rf4rwm*_ga*MTEyMjk0NzY0MS4xNzU0NDQ4NjU2*_ga_C4PN7RFDN6*czE3NTQ0NDg2NTUkbzEkZzAkdDE3NTQ0NDg2NTUkajYwJGwwJGgw"
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
      window.open(
        "https://www.utahcounty.gov/landrecords/AddressSearchForm.asp"
      );
      openZillowAndGoogle(currentAddress);
    } else if (washingtonCountyZipCodes.includes(zip)) {
      window.open(
        "https://geoprodvm.washco.utah.gov/Html5Viewer/index.html?viewer=AssessorReport"
      );
      openZillowAndGoogle(currentAddress);
    } else if (carbonCountyZips.includes(zip)) {
      window.open("https://www.carbon.utah.gov/service/property-search/");
      openZillowAndGoogle(currentAddress);
    } else if (adaZipCodes.includes(zip)) {
      window.open(
        "https://apps.adacounty.id.gov/PropertyLookup/SearchProperty"
      );
      openZillowAndGoogle(currentAddress);
    } else if (kootenaiZipCodes.includes(zip)) {
      window.open(
        "https://id-kootenai.publicaccessnow.com/Assessor/PropertySearch.aspx?utm_source=chatgpt.com"
      );
      openZillowAndGoogle(currentAddress);
    } else if (bonnerZipCodes.includes(zip)) {
      window.open("https://cloudgisapps.bonnercountyid.gov/PropertySearch/");
      openZillowAndGoogle(currentAddress);
    } else if (!allZips.includes(zip)) {
      openZillowAndGoogle(currentAddress);
    }
  };
  return (
    <div className="flex justify-center">
      <form method="put" action="/" className="w-1/3">
        <div className="my-2 grid grid-cols-5 relative ">
          <label htmlFor="address_input">Address</label>
          <input
            type="text"
            id="address_input"
            className="border-1 border-gray-900 ml-2 col-span-4 px-1 py-0.5 relative"
            value={currentAddress}
            onChange={(e) => {
              console.log(e.target.value);
              setCurrentAddress(e.target.value);
            }}
            onMouseEnter={handleEnterPopUp}
            onMouseLeave={handleLeavePopUp}
          />
          {isPopUp && <Popup text="* Must include zip code" />}
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
  );
}

export default ZipCodeSection;
