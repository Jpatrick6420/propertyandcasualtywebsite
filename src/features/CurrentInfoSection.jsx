function CurrentInfoSection({ currentInfo, setCurrentInfo }) {
  const handleNameChange = (e) => {
    setCurrentInfo((prev) => ({ ...prev, name: e.target.value }));
  };
  const handlePhoneNumberChange = (e) => {
    setCurrentInfo((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };
  return (
    <section className="w-2/3 mx-4 mb-3">
      <div className="px-4 grid grid-cols-2 w-full sm:w-1/2 my-2">
        <label className="col-span-2 xs:col-start-1 xs:col-end-2">
          User Name
        </label>
        <input
          type="text"
          value={currentInfo.name}
          onChange={(e) => handleNameChange(e)}
          className="border-2 border-black ml-2 col-span-2 px-2 sm:py-0.5 "
        />

        <label className="col-span-2 xs:col-start-1 xs:col-end-2">
          User Phone Number
        </label>
        <input
          type="text"
          value={currentInfo.phoneNumber}
          onChange={(e) => handlePhoneNumberChange(e)}
          className="border-2 border-black ml-2 col-span-2 px-2 sm:py-0.5"
        />
      </div>
    </section>
  );
}

export default CurrentInfoSection;
