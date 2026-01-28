export const tips = [
  { id: 0, tip: "Sit up" },
  { id: 1, tip: "Don't use upword inflection for statements" },
  {
    id: 2,
    tip: "Do not ask if the person is there. Either start with their name or use their spouses name",
  },
  { id: 3, tip: "Use even inflection" },
  {
    id: 4,
    tip: "Validate at drivers screen.",
    instructions: [
      "Click drivers",
      "Click checkbox next to names or the all names box",
      "Click retrieve MVR",
    ],
  },
];

export const platformTips = [
  {
    id: 1,
    name: "Validation in Alta DOES NOT run mvr",
    instructions: [
      "Click validate",
      "Click bind",
      "Go to Bristol West",
      "Navidgate through the quote (all data should be there)",
      "Go to reports",
      "Select Run MVR",
      "Finally go back to coverage to see the price",
    ],
  },
  {
    id: 2,
    name: "Reduce water deductible",
    instructions: [
      "Select water protection",
      "Select whole home water protection with shutoff",
      "Go to coverage",
      "Select new deductible",
      "Send customer the link for moen.com/farmers",
      "Have them measure the water pipe in their home",
      "Order correct part",
      "Once part gets to home, moen should call to set up install",
      "Upload document to link they recieve from Farmers",
      "Verify that doc was accepted",
      "Customer only has 45 days for install from BIND. If not it will remove discount. If it is installed within 45 days then they can back date. If not then the discount is prorated.",
    ],
  },
];
