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
      editInfo: [],
      editModal: false,
      editItem: "",
      editValue: "",
      index: undefined,
      editAttribute: "",
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
      autoNotes: "",
    },
    home: {
      //calculate replacement year or age
      roof: "",
      yearBuilt: "",
      plumbingUpdated: "",
      electricalUpdated: "",
      heatingUpdated: "",
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

export const colors = {
  primaryColor: "stone",
  newDriverColor: "stone",
  newVehicleColor: "rose",
  newClaimColor: "orange",
};
