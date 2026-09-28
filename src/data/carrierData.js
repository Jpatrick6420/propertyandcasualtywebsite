const today = new Date().getFullYear();

export const united = {
  name: "united",
  home: {
    restrictions: {
      scheduledRoofYear: 10,
      coversFlatRoof: false,
      maxRoofYear: 200,
      maxWaterClaims: 4,
      forbiddenDogs: [],
      maxFireLine: 8,
      preferredHomeAge: today - 1979,
      updatedPlumbingRestriction: today - 50,
      forbiddenPersonalLines: [],
      maxHomeValue: 1_500_000,
    },
  },
  preferredBuisiness: ["retired", "government employees"],
};
export const openly = {
  name: openly,
  home: {
    restrictions: {
      scheduledRoofYear: 25,
      coversFlatRoof: true,
      maxRoofYear: 30,
      maxWaterClaims: 4,
      forbiddenDogs: [],
      maxFireLine: 8,
      preferredHomeAge: today - 100,
      updatedPlumbingRestriction: today - 60,
      forbiddenPersonalLines: [
        "short term rentals",
        "town homes w/ master HOA",
        "condos",
      ],
      maxHomeValue: 3_000_000,
    },
    preferredBusiness: [
      "auto bundle",
      "whole home water backup",
      "higher liability limits",
    ],
  },
};

export const libertyMutual = {
  name: "liberty mutual",
  home: {
    restrictions: {
      scheduledRoofYear: 15,
      maxRoofYear: 25,
      coversFlatRoof: false,
      maxWaterClaims: 2,
      forbiddenDogs: [],
      maxFireLine: 9,
      preferredHomeAge: today - 100,
      updatedPlumbingRestriction: today - 50,
      forbiddenPersonalLines: ["leveled and skirted manufactured homes"],
      maxHomeValue: 1.5,
    },
  },
  preferredBuisiness: ["**higher educated", "no accidents", "homeowners"],
};
export const travelers = {
  name: "travelers",
  home: {
    restrictions: {
      scheduledRoofYear: 25,
      maxRoofYear: 25,
      coversFlatRoof: false,
      maxWaterClaims: 2,
      forbiddenDogs: [],
      maxFireLine: 8,
      preferredHomeAge: today - 100,
      updatedPlumbingRestriction: today - 50,
      forbiddenPersonalLines: ["manufactured homes", "recreational vehicles"],
      maxHomeValue: 1.5,
    },
  },
};
export { united, openly, libertyMutual, travelers };
