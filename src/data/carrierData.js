export const carrierAppetite = [
  {
    name: "United Insurance Group",
    homeowners: {
      strong: [
        "Owner-occupied homes",
        "Newer homes",
        "Good credit",
        "Clean claims history",
        "Secondary/seasonal homes when supported by HO-3",
      ],
      weak: ["Older homes", "Older roofs", "Prior claims"],
      coverage: {
        restrictions: [
          "Flat/low-pitch roofs (3/12 or less) require a 2% deductible",
          "Commercial exposure requires underwriting approval",
          "Secondary/seasonal homes must be supported by an HO-3 policy",
          "Prior losses may require underwriting approval",
        ],
      },
      product: "HO-3",
      underwritingPhone: "(801) 226-2662",
      underwriting: {
        ineligiblePropertyTypes: [
          "Wood shake roofs",
          "Manufactured/mobile homes in Preferred",
          "Vacant or for-sale homes in Preferred",
        ],
        ineligibleRiskTypes: [
          "Animals with bite history or restricted animals without signed exclusion in Preferred",
        ],
        bindingAuthority: { min: 100000, max: 800000 },
        underwritingApproval: {
          dwellingMin: 800000,
          dwellingMax: 1500000,
          notes: [
            "PPC 1-8: up to $800,000; up to $1.5M with UW approval (Preferred & Standard).",
            "PPC 9-10: up to $500,000 unless UW approved (Standard program only).",
          ],
        },
        secondarySeasonal: "Must have supported HO-3 policy.",
      },
      roof: {
        replacementCostYears: { min: 1, max: 10 },
        afterReplacementCostPeriod: "Scheduled payment thereafter.",
        poorCondition: "Must be excluded.",
        woodShakeEligible: false,
        flatRoof: {
          rule: "Roof pitch of 3/12 or less must be written with 2% deductible.",
        },
      },
      programs: {
        preferred: {
          requirements: [
            "1980 & newer year built",
            "No flat roofs",
            "Good credit",
            "Must be owner occupied",
            "No prior losses",
            "No vacant or for-sale dwellings",
            "No mobile/manufactured homes",
            "No animals with bite history or restricted animals without signed exclusion",
            "No commercial exposure without UW approval",
            "No more than 2 horses",
          ],
          features: [
            "Unique discounts & coverages",
            "HO-6 and HO-4 also available",
          ],
        },
        standard: {
          yearBuilt: { min: 1940, max: 1980 },
          notes: [
            "Automatically reverts to Standard if risk does not qualify for Preferred.",
            "Accepts up to 2 losses with UW approval.",
            "For UW consideration of prior losses, be prepared to provide cause of loss, amount paid, what was done to prevent future losses, and whether claim is open or closed.",
          ],
        },
      },
    },

    landlord: {
      strong: [
        "Long-term rentals",
        "Short-term/vacation rentals",
        "Multi-unit rentals up to four units",
        "Business-owned rentals",
        "Vacant/renovation risks through DP1",
      ],
      weak: [],
      restrictions: [
        "Flat/low-pitch roofs require a 2% deductible or exclusion",
        "Higher dwelling values require underwriting approval",
      ],
      product: "DP3",
      underwriting: {
        use: "Landlord/Rentals",
        primaryResidenceRequired: false,
        unsupportedPolicySurchargeIfPrimaryNotWithUnited: true,
        ownershipAllowed: ["personal", "business"],
        priorLossesOnOlderDwellings: "Accepted if UW approved.",
        maxUnits: 4,
        roof: {
          pitchLessThan3Over12OrPartiallyFlat:
            "Requires 2% deductible or exclusion.",
        },
        dp1: "Same as DP3 except premium is fully earned; used for renovation/vacant.",
        shortTermRental:
          "UUV / Vacation Rental is also written as DP3 with slightly different dwelling limits.",
      },
      coverage: {
        longTermSingleFamilyDwelling: {
          min: 10000,
          max: 500000,
          maxWithPrimaryHomeInsured: 800000,
        },
        longTermMultiUnitDwelling: {
          maxUnits: 4,
          min: 10000,
          max: 500000,
          maxWithUWApproval: 1000000,
        },
        personalPropertyLongTerm: { min: 0, max: 100000 },
        shortTermVacationRental: {
          maxDwelling: 800000,
          maxWithUWApproval: 1000000,
          deductibles: [1000, 2500, 5000, 10000],
        },
        bestDwellingFirePolicyAvailableToday: [
          "Condo loss assessment",
          "125% extended replacement cost",
          "10% building ordinance",
          "Sewer backup",
          "Personal libel/slander",
          "Service line",
          "Equipment breakdown",
        ],
        modifiable: [
          "Separate structures",
          "Fair rental value (loss of rents)",
        ],
        deductibleOptionsPercent: [0.5, 1, 2, 4],
      },
    },

    auto: {
      strong: [
        "Clean driving records",
        "Established prior insurance",
        "Drivers with Utah licenses",
      ],
      weak: [
        "Young named insureds",
        "Older drivers",
        "Multiple violations or claims",
        "SR-22 risks",
        "Limited U.S. driving experience",
      ],
      programs: {
        preferred: {
          underwriting: {
            namedInsuredAge: {
              married: { min: 21, max: 75 },
              single: { min: 25, max: 75 },
            },
            eligibleDriverAge: { min: 15, max: 75 },
            cleanDrivingRecordRequired: true,
            utahDriverLicenseRequiredWithinDays: 30,
            evidenceOfPriorInsuranceRequired: true,
            namedInsuredUSDrivingExperienceYears: 3,
            maxMinorViolationOrClaimUnder1000Within3Years: 1,
            sr22Eligible: false,
          },
          coverage: {
            bodilyInjuryMax: "500/500",
            motorhomeMax: 50000,
            trailerMax: 30000,
            notes: ["Many unique discounts."],
          },
        },
        standard: {
          underwriting: [
            "Peak & Crown Program",
            "If risk does not meet Preferred Auto criteria, it reverts to Standard automatically.",
          ],
          coverage: {
            bodilyInjuryMax: "100/300/50",
            motorhomeMax: 30000,
            trailerMax: 10000,
          },
        },
      },
    },

    renters: {
      strong: ["Renters", "Preferred and Standard risks"],
      weak: ["Roommates under age 25"],
      product: "HO-4",
      programs: ["Preferred", "Standard"],
      underwriting: {
        roommatesUnder25Allowed: false,
      },
      coverage: {
        personalProperty: { min: 6000, max: 100000 },
      },
    },

    condo: {
      strong: ["Condo owners", "Earthquake loss assessment"],
      weak: [],
      product: "HO-6",
      underwriting: "Same as HO-3.",
      coverage: {
        dwelling: { min: 1000, max: 200000 },
        personalProperty: { min: 6000, max: 250000 },
        earthquakeLossAssessmentAvailable: true,
      },
    },

    umbrella: {
      strong: [
        "United auto customers",
        "Customers with qualifying HO-3, HO-4, or HO-6 liability coverage",
      ],
      weak: [],
      restrictions: [
        "Auto must be insured with United",
        "Property underlying personal liability must be at least $300,000",
        "Auto underlying limit must be 500/500/100 and is available only in Preferred",
        "Policy must be paid in full at issue",
      ],
      underwriting: {
        payInFullAtIssueRequired: true,
        propertyUnderlyingPersonalLiabilityMin: 300000,
        autoUnderlyingMin: "500/500/100",
        autoUnderlyingNote: "Only available in Preferred Program.",
        eligiblePropertyForms: ["HO-3", "HO-4", "HO-6"],
        autoMustBeWithUnited: true,
        propertyMayBeInsuredElsewhere: true,
      },
    },

    earthquake: {
      strong: [
        "Standard-frame homes",
        "Homes with qualifying replacement cost",
      ],
      weak: [],
      restrictions: [
        "Lots with more than 10 feet of slope require underwriting approval",
        "Unavailable ZIP codes require special handling for existing United earthquake policies",
      ],
      underwriting: {
        ineligiblePropertyTypes: [
          "Homes built in 1939 or earlier",
          "Solid brick or masonry homes",
          "Homes built on piers or posts",
        ],
        ineligibleRiskTypes: [],
        packages: {
          basic: "Dwelling only coverage",
          standard: "Includes Personal Property & Loss of Use",
        },
        yearBuilt1939OrOlderEligible: false,
        solidBrickOrMasonryEligible: false,
        firstTerm: "100% earned; no refunds.",
        monthlyPayPlanAvailable: true,
        dwellingLimitRule:
          "Must be at least what RCE estimates or match HO-3 policy.",
        lotSlopeGreaterThanFeet: {
          value: 10,
          action: "Contact UW for approval.",
        },
        homesBuiltOnPiersOrPostsEligible: false,
        existingUnitedEQInUnavailableZip: "Call Erica for approval.",
        unavailableZipCodes: [
          "84010",
          "84020",
          "84025",
          "84037",
          "84043",
          "84045",
          "84062",
          "84065",
          "84081",
          "84092",
          "84093",
          "84095",
          "84096",
          "84097",
          "84121",
          "84604",
          "84660",
        ],
      },
      coverage: {
        totalCombinedLimit: 1500000,
        combinedLimitIncludes: [
          "Dwelling",
          "Separate structures",
          "Personal property",
          "Loss of use",
        ],
        deductible: {
          "5%": "Excludes masonry veneer.",
          "10%": "Includes masonry veneer.",
        },
        standardPackageDwellingMax: 1071428,
      },
    },
  },

  {
    name: "Travelers",
    homeowners: {
      strong: [
        "High-value homes",
        "Older homes with updated systems",
        "Homes with qualifying roofs",
        "Customers wanting broad optional endorsements",
      ],
      weak: ["Older roofs", "Multiple prior claims"],
      underwriting: {
        ineligiblePropertyTypes: [
          "Manufactured/mobile homes",
          "Wood shake roofs",
          "Flat/rolled roofs",
        ],
        ineligibleRiskTypes: [
          "Fireline score 8 or above",
          "Unfenced pools",
          "Dogs with bite history",
        ],
        firelineScore8OrAboveEligible: false,
        dwellingMaxWithoutAuthority: 2000000,
        unfencedPoolsEligible: false,
        dogsWithBiteHistoryEligible: false,
        manufacturedMobileHomesEligible: false,
        dwellingLimit1500000AndAbove:
          "Must have central burglar and fire alarm; excludes landlord dwellings and owner-occupied multi-family dwellings. Guide notes this rule is currently being removed.",
        vacantHomes:
          "Not eligible unless under renovation or home is a new purchase and will be occupied within 30 days of inception.",
        roof: {
          maxAge: 25,
          tileException: true,
          woodShakeEligible: false,
          flatRolledRoofEligible: false,
        },
        gasFurnaceHeating: "Cannot be older than 35 years.",
        homeAge:
          "Does not matter assuming electrical, heating, roof and plumbing are updated/up to building code and do not contain knob & tube, galvanized pipes, etc.",
        homes1940AndOlder: "Must use functional replacement cost endorsement.",
        webinarQuestions: [
          "When does roof transition to scheduled payment?",
          "Age requirements for electrical, plumbing and heating?",
          "What values create contingencies for central fire/burglar and water detection?",
        ],
      },
      coverage: {
        restrictions: [
          "Vacant homes are eligible only when under renovation or when a new purchase will be occupied within 30 days",
          "Homes built in 1940 or earlier require the functional replacement cost endorsement",
          "Gas furnace heating cannot be older than 35 years",
          "Older homes must have electrical, heating, roof, and plumbing updated to code",
          "Dwelling limits of $1.5M+ may require central burglar and fire alarms; verify current rule",
          "Roof age cannot exceed 25 years, subject to the tile exception",
        ],
        minimumAllPerilDeductible: 1000,
        optionalPackages: [
          "Plus Additional Coverage Package",
          "Premier Additional Coverage Package",
        ],
        recommendation:
          "Travelers Protect Plus for Homeowners (already set as default in EZLynx).",
        earlyQuoteDiscount: { maxPercent: 15, daysEarly: 8 },
        separateStructuresPersonalPropertyLossOfUse:
          "Available up to 100% of Coverage A limit.",
        personalLiabilityMax: 500000,
        additionalCoveragePackage: [
          "Additional Replacement Cost Protection",
          "Loss Assessment",
          "Refrigerated Property",
          "Special Personal Property",
          "Personal Property Replacement Cost Loss Settlement",
          "Personal Injury",
        ],
        premierAdditionalCoveragePackage: [
          "Includes all Additional Coverage Package endorsements at higher limits",
          "Additional Replacement Cost Protection (100% of Coverage A)",
          "Increased Loss Assessment ($50,000)",
          "Increased Refrigerated Property ($5,000)",
          "Identity Fraud Expense Reimbursement ($25,000)",
          "Increased Ordinance or Law (100% of Coverage A)",
        ],
        optionalEndorsements: {
          buriedUtilityLines: "$10,000 or $20,000",
          equipmentBreakdown: "$50,000",
          limitedHiddenWaterOrSteamSeepageLeakage: "$5,000-$20,000",
          matchingUndamagedRoofSurface: "$10,000 or $20,000",
          matchingUndamagedSiding: "$10,000 or $20,000",
          decreasingDeductible: true,
          lossForgiveness: true,
          homeSharing: true,
        },
      },
      claimsHistory: {
        note: "Risks exceeding these loss-history thresholds are ineligible.",
        thresholds: {
          "12Months": { nonWeather: 1, weatherIncludingCATs: 1, total: 1 },
          "36Months": { nonWeather: 1, weatherIncludingCATs: 2, total: 2 },
          "60Months": {
            nonWeather: "2*",
            weatherIncludingCATs: 2,
            total: "2*",
          },
        },
        footnote: "No more than 1 of the same non-weather peril.",
      },
      otherInsurableItems: [
        "Landlord/Rental",
        "Condo",
        "Renters (Tenants)",
        "Umbrella",
        "Personal Article Floater – Jewelry & valuable items, monoline policy",
        "Private Events & Wedding Insurance",
        "Boat & Yacht",
      ],
      umbrella: {
        liabilityLimits: { min: 1000000, max: 5000000 },
      },
    },

    auto: {
      strong: [
        "Home/auto bundles",
        "Clean driving records",
        "Customers willing to use IntelliDrive",
        "Customers wanting accident/violation forgiveness",
      ],
      weak: [
        "Monoline customers seeking a 12-month term",
        "Multiple incidents",
        "Major violations",
      ],
      underwriting: {
        twelveMonthTermRequirement:
          "Must be accompanied by Homeowners, Condo, or Renter's policy.",
        incidents:
          "No more than 1 incident and no major violations within 5 years (DUI, hit & run, reckless driving, etc.).",
        intelliDrive: {
          firstTermSignupAndFirstDriveDiscountPercent: 10,
          renewalDiscountUpToPercent: 35,
          possibleIncreaseForRiskierDriversPercent: 45,
        },
      },
      coverage: {
        packages: {
          responsibleDriverPlan: {
            accidentForgiveness: true,
            minorViolationForgiveness: true,
            allVehiclesMayBeLiabilityOnly: true,
          },
          premierResponsibleDriverPlan: {
            accidentForgiveness: true,
            minorViolationForgiveness: true,
            decreasingDeductible: true,
            totalLossDeductibleWaiver: true,
            comprehensiveRequiredOnAtLeastOneVehicle: true,
          },
        },
        earlyQuoteDiscountPercent: { min: 6, max: 15 },
        earlyQuoteDays: 15,
      },
    },
  },

  {
    name: "Liberty Mutual",
    homeowners: {
      strong: [
        "High-value homes",
        "Older homes with updated systems",
        "Pools with qualifying protection",
        "Trampolines with safety nets",
        "Aggressive dog breeds with conditions",
        "Course of construction",
        "Some higher-fire-risk homes with qualifying protections",
      ],
      weak: [
        "Older roofs",
        "Multiple prior claims",
        "Older homes requiring system updates",
      ],
      underwritingPhone: "(877) 566-6001",
      underwriting: {
        ineligiblePropertyTypes: [
          "Wood roofs",
          "Vacant or unoccupied homes unless a construction/renovation exception applies",
        ],
        ineligibleRiskTypes: [
          "Pre-1976 homes with fuses, knob & tube wiring, or aluminum wiring",
          "Dogs with bite history",
          "Exotic pets",
        ],
        pre1976:
          "Homes built prior to 1976 containing fuses, knob & tube wiring, or aluminum wiring are not eligible.",
        roof: {
          maxAge: {
            asphalt: 20,
            metal: 20,
            slate: 20,
            tile: 20,
          },
          woodRoofEligible: false,
        },
        claims: {
          moreThanOneHomeClaim: "Call UW to determine eligibility.",
        },
        locationEligibility:
          "Use Analyze address/territory tool to determine location eligibility (Fireline, PPC).",
        inspection:
          "Not required on all insured homes; high-value dwelling inspections (interior/exterior) are ordered for higher replacement costs.",
        pool: "Must be fenced; hard cover is acceptable.",
        trampoline: "Must have safety net.",
        pets: "No exotic pets. Any 'aggressive' breed dog is eligible if it has no bite history, a fenced yard with 6 ft tall fence, and is vaccinated.",
        vacantOrUnoccupiedEligible: false,
        renovationConstructionException: {
          eligibleIf: [
            "Construction will not be completed within 12 months",
            "Work is being performed by a licensed, bonded, and insured contractor",
            "The contractor is the named insured",
            "Theft of Building Materials Endorsement is not carried while dwelling is under construction, if vacant",
            "All other bindability rules are met",
          ],
        },
        highFirelinePPC: {
          appliesTo:
            "Protection Class 9 with Coverage A between $1.5M and $3M and all Protection Class 10 homes.",
          requirements: [
            "Dwelling is within 15 miles of a responding fire department",
            "Dwelling does not use wood or coal burning stove as primary heat source",
            "Smoke or heat alarm on every floor and fire extinguishers OR Central Station Fire Alarm",
            "Local water source",
            "Property accessible year-round",
          ],
        },
        losses:
          "All losses in the prior 5 years are subject to underwriting review.",
      },
      coverage: {
        restrictions: [
          "Pools must be fenced; a hard cover is acceptable",
          "Trampolines must have a safety net",
          "Aggressive-breed dogs require no bite history, a fenced yard with a 6-foot fence, and vaccination",
          "Homes with higher fireline/PPC exposure must meet the listed protection requirements",
          "All losses in the prior 5 years are subject to underwriting review",
          "More than one home claim requires an underwriting eligibility review",
          "Roof age limits are 20 years for asphalt, metal, slate, and tile",
        ],
        packageLevels: ["Essential", "New Quality-Plus", "Optimum", "Premier"],
        recommendation:
          "New Quality Plus for Homeowners; add correct endorsements for risk.",
        dwellingMax: 4000000,
        ruleOfThumb: {
          homesOnBenches: 1500000,
          midRiskPPC: 3000000,
          lowFirelineHomes: 4000000,
          note: "Logan – territory rep.",
        },
        courseOfConstructionCoverageAMax: 1000000,
        personalLiabilityMax: 500000,
      },
    },

    manufacturedHome: {
      strong: [
        "Newer double-wide manufactured homes",
        "Manufactured homes on permanent foundations",
      ],
      weak: [
        "Older manufactured homes",
        "Single-wide homes",
        "Low-pitch roofs",
        "Homes without permanent foundations",
      ],
      underwriting: {
        maxAgeYears: 20,
        minimumWidth: "Double wide",
        roof: {
          minimumLifeCompositionYears: 20,
          minimumPitch: "4:12",
          snowLoadPounds: { min: 30, max: 40 },
        },
        foundation:
          "Permanent concrete block/brick foundation or concrete slab. Vinyl/metal skirting is not eligible as foundation.",
        photosRequired: ["front", "back"],
      },
    },

    auto: {
      strong: [
        "Customers wanting multiple coverage-package options",
        "Customers seeking accident forgiveness",
        "Customers wanting enhanced replacement and roadside features",
      ],
      weak: [],
      available: true,
      recommendedCoverageLevels: ["Essential", "Enhanced"],
      coverageLevels: {
        essential: {
          notes: [
            "No Accident Forgiveness",
            "Lower limits for Loss of Earnings for trial, Bail Bonds, Auto Theft Transportation, AV Limit, Customized Equipment",
            "OEM optional coverage is not available",
          ],
        },
        enhanced: {
          equivalentTo: "Safeco Personal Auto Contract",
          policyForm: "SA-1852UTEP Utah Personal Auto Policy",
          accidentForgivenessYears: 6,
        },
        superior: {
          addsToEnhanced: [
            "SA-2982UTEP Utah Personal Auto Policy",
            "Accident Forgiveness 3 years",
            "Deductibles waived: Not At-Fault; Comprehensive (total loss)",
            "Diminishing deductible added",
            "New vehicle replacement",
            "Electronic key replacement",
            "Worldwide Rental",
            "Claims-Free Cash Back",
          ],
        },
        premier: {
          addsToSuperior: [
            "SA-3090UTEP Utah Personal Auto Policy",
            "New Business Accident Forgiveness",
            "New vehicle replacement 2 years",
            "No adjustment for depreciation/betterment",
            "Personal Property Roadside Assistance with up to 100 miles of towing",
            "Emergency Expenses, Key Lockout – RV",
            "Transportation Loss of Use coverage up to $3,000",
            "Loan Lease",
            "Higher limit loss of earnings for trial",
            "Extra Death Benefit",
            "Replace Airbag (no accident)",
            "Dog and Cat Coverage",
            "Exclusions removed – Business Use (except liability)",
          ],
        },
      },
    },

    umbrella: {
      strong: [
        "Customers with qualifying underlying home, auto, recreational vehicle, or watercraft coverage",
      ],
      weak: [
        "Customers with insufficient underlying liability limits",
        "Interrupted underlying coverage",
      ],
      available: true,
      notes: [
        "Primary underlying insurance must be maintained in force without interruption.",
        "Underlying limits must meet or exceed the limits shown in the source table.",
        "The source guide contains separate underlying-limit requirements by exposure (auto, motorcycle, off-road recreational vehicles, watercraft, sailboats, premises liability, landlord, incidental farming, in-home business) and umbrella limit; verify the table before binding.",
      ],
    },

    otherProducts: [
      "Motorcycle",
      "Watercraft",
      "Classic Car",
      "Recreational Vehicle",
      "Snowmobile",
      "ATV & Off-road vehicle",
      "Condo",
      "Renters",
      "Landlord",
    ],
  },

  {
    name: "National General",
    homeowners: {
      strong: [
        "Standard single-family homes",
        "Secondary homes when primary is also with National General",
        "Solar-equipped homes",
        "Course of construction",
      ],
      weak: ["Older roofs that remain eligible with scheduled roof settlement"],
      underwritingPhone: "888-325-1190",
      underwriting: {
        ineligiblePropertyTypes: [
          "Manufactured/mobile homes",
          "Homes with wood roofs",
          "Homes with replacement cost over $1.5M",
        ],
        ineligibleRiskTypes: [],
        ineligibleHomeTypes: ["manufactured/mobile", "wood roofs"],
        roof: {
          asphaltMaxAgeYears: 21,
          metalTileMaxAgeYears: 26,
          replacementCostOver1500000Eligible: false,
          replacementCostEndorsementMaxAge: {
            metalTileSlate: 20,
            composition: 15,
            allOther: 10,
          },
          note: "Guide says roof replacement-cost ages vary by state; confirm for Utah.",
        },
        secondaryResidence:
          "Primary home must be written with National General.",
      },
      coverage: {
        restrictions: [
          "Secondary residences require the primary home to be written with National General",
          "Roof replacement-cost eligibility varies by roof age and material",
          "Older eligible roofs may use scheduled payment for wind/hail total roof losses",
        ],
        coverageA: { min: 150000, max: 1500000 },
        productLevels: ["Signature", "Preferred", "Elite"],
        recommendation: "Signature with endorsements.",
        endorsementsAvailable: [
          "Structure rented to others",
          "Course of construction",
        ],
        homeSystemsProtection:
          "Equipment Breakdown includes coverage for Solar Panels.",
        roofScheduledPayment: {
          requiredWhen: "Roof is not eligible for Roof Replacement Coverage.",
          appliesTo: "Wind/hail total roof losses only.",
          settlement:
            "Percentage of replacement cost based on roof age and material.",
          removalCost:
            "Cost to remove old roof is not subject to the payment schedule.",
          note: "Exact percentages are established in the schedule and included in policy documents.",
        },
      },
    },

    auto: {
      strong: [
        "Private passenger auto",
        "Customers who fit multiple National General auto programs",
        "Allstate multi-policy discount opportunities",
      ],
      weak: ["Motorcycles in Utah"],
      productTypes: [
        "Custom 360 Auto",
        "PPA Value (Private Passenger Auto)",
        "Personal Auto Advantage",
      ],
      notes: [
        "Apply Allstate multi-policy discounts.",
        "No motorcycle product in Utah; only RV.",
        "Workflow: quote through EZLynx and move forward with best rate regardless of auto product type.",
        "Ineligible auto product types will not show in rater.",
      ],
    },

    umbrella: {
      strong: [
        "National General home and auto customers",
        "Customers with higher underlying liability limits",
      ],
      weak: [],
      restrictions: [
        "Home and auto must both be written with National General",
        "Auto underlying limits must be 250/500 or 500 CSL",
        "Home underlying liability must be at least $300,000",
      ],
      underwriting: {
        autoAndHomeMustBeWrittenWithNationalGeneral: true,
        autoUnderlying: ["250/500", "500 CSL"],
        homeUnderlyingLiabilityMin: 300000,
      },
      coverage: {
        bodilyInjury: { min: 500000, max: 5000000 },
        propertyDamage: { min: 500000, max: 5000000 },
        umUim: 1000000,
      },
    },

    otherProducts: [
      "Renters",
      "Condo",
      "Recreational Vehicle (Travel Trailer & Motorhome)",
    ],
  },

  {
    name: "Openly",
    homeowners: {
      strong: [
        "High-value homes",
        "Newer homes",
        "Older homes",
        "Single-family homes",
        "Short-term rentals",
        "Long-term rentals",
        "Secondary/seasonal homes",
        "Pools",
        "Trampolines",
        "Dogs without bite history",
        "Customers wanting guaranteed replacement cost",
      ],
      weak: [],
      coverage: {
        guaranteedReplacementCostMax: 5000000,
        rceMax: 3000000,
        liabilityMax: 1000000,
        forms: {
          primarySecondarySeasonal: "HO-5 (open peril)",
          longTermRental: "HO-3",
        },
        shortTermRentalEligible: true,
        singleFamilyPreference:
          "Openly 'loves' single-family, well-maintained, newer-construction homes (1990 & newer) with RCE between $400k & $2M.",
        restrictions: [
          "Dogs may be any breed but must not have bite history",
          "Pools must meet Openly's fencing/type requirements",
          "Pay in full only",
        ],
        ageOfHome: "Does not matter.",
        payPlan: "Pay in full only.",
        minimumDeductible: {
          allPeril: 2500,
          windHail: 2500,
        },
        roof: "Never transitions to Scheduled Payment on roof materials.",
      },
      underwriting: {
        secondarySeasonalRequiresPrimaryWithOpenly: false,
        ratingTip: "Quote each spouse as PNI for best rate or if ineligible.",
        ineligiblePropertyTypes: [
          "Multi Family Homes (Duplex, Triplex, Multi)",
          "Townhomes/Condos & Rowhomes",
          "Homes Built on Stilts or Piers",
          "Mobile Homes",
          "Log Cabins",
          "Historical Homes (on registry)",
        ],
        ineligibleRiskTypes: [
          "PPC 9 & 10",
          "Unconventional heating sources (non-thermostatically controlled)",
          "Out-of-code electrical systems (knob & tube wiring)",
          "Non-standard roofing materials (rolled roofs, gravel, asbestos)",
          "On-site business (homes hosting over five monthly visitors)",
          "Missing handrails, railings, banisters",
          "Dogs with bite history",
        ],
        claims:
          "To check claims-history eligibility, quote it and see if it qualifies.",
      },
    },
  },
];

export default carrierAppetite;
