export const createInitialClientState = () => {
  return {
    notification: {
      isError: false,
      isErrorNotification: "",
      isErrorMessage: "",
      isTip: false,
      isTipNotification: "",
      isTipMessage: "",
      errorHeaders: [],
      errorMessages: [],
      tipHeaders: [],
      isTipMessages: [],
    },
    pni: {
      name: "",
      pniEducation: "not_asked",
      pniProfession: "",
      pniDob: "",
    },
    sni: {
      name: "",
      sniDob: "",
      sniEducation: "not_asked",
      sniProfession: "",
    },
    auto: {
      additionalDrivers: [],
      claims: [],
      currentCoverage: "not_confirmed",
      whatIsImportant: "",
      vehicles: [],
      vehiclesEmpty: true,
    },
    home: {
      //calculate replacement year or age
      roof: "",
      yearBuilt: "",
      plumbingUpdated: "",
      electricalUpdated: "",
      dogs: "not_asked",
      dogTypes: [],
      solar: "",
      goodShape: "not_asked",
      businessUse: "not_asked",
      swimmingPool: "not_asked",
      fenced: "not_asked",
      claims: [],
      trampoline: "not_asked",
      addresses: [],
      notes: "",
    },
    otherRisks: {
      umbrella: false,
      otherAddresses: [],
      motorHomes: [],
      offRoad: [],
      motorcycles: [],
    },
  };
};
export const createInitialIntakeState = () => ({
  iteration: 0,
  openIntakes: [],
});
