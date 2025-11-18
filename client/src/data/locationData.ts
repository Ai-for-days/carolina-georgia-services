export interface LocationData {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  county: string;
  latitude: number;
  longitude: number;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  
  // Hero content
  heroTitle: string;
  heroDescription: string;
  avgResponseTime: string;
  
  // Response times by area
  responseTimes: {
    area: string;
    time: string;
  }[];
  
  // Local landmarks for directions
  landmarks: {
    name: string;
    directions: string[];
    driveTime: string;
  }[];
  
  // Weather challenges
  weatherChallenges: {
    season: string;
    title: string;
    description: string;
    issues: string[];
    solution: string;
  }[];
  
  // Major employers
  employers: {
    category: string;
    list: string[];
  }[];
  
  // Neighborhoods
  neighborhoods: {
    name: string;
    description: string;
    responseTime: string;
  }[];
  
  // Local details
  localDetails: {
    title: string;
    description: string;
    points: string[];
  }[];
  
  // Competitive advantages
  competitiveAdvantages: string[];
}

export const locationData: Record<string, LocationData> = {
  cayce: {
    name: "Cayce",
    slug: "cayce",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Lexington",
    latitude: 33.9663,
    longitude: -81.0740,
    
    metaTitle: "Emergency HVAC, Plumbing & Electrical Cayce SC | 24/7 Service",
    metaDescription: "Need emergency HVAC, plumbing, or electrical service in Cayce, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!",
    keywords: "emergency HVAC Cayce SC, emergency plumber Cayce, 24/7 electrician Cayce, AC repair Cayce, burst pipe Cayce, emergency service Cayce South Carolina",
    
    heroTitle: "Emergency HVAC, Plumbing & Electrical Services in Cayce, SC",
    heroDescription: "AC died in Cayce's brutal heat? Pipe burst flooding your Riverwalk home? Power outage at your business near the Cayce Riverwalk? We're here 24/7 with the fastest emergency response in Cayce. Average arrival time: 10-15 minutes.",
    avgResponseTime: "10-15 minutes",
    
    responseTimes: [
      { area: "Riverwalk/Downtown Cayce", time: "8-12 minutes" },
      { area: "Guignard Park area", time: "10-15 minutes" },
      { area: "Airport Boulevard corridor", time: "12-18 minutes" },
      { area: "Residential neighborhoods", time: "10-15 minutes" }
    ],
    
    landmarks: [
      {
        name: "Cayce Riverwalk & Amphitheater",
        directions: [
          "From the Riverwalk, head east on Knox Abbott Drive",
          "Turn right onto 12th Street",
          "We serve all of Cayce - call for specific directions",
          "Emergency response available 24/7"
        ],
        driveTime: "5-8 minutes"
      },
      {
        name: "Guignard Park",
        directions: [
          "Exit Guignard Park onto Naples Avenue",
          "Head toward Knox Abbott Drive",
          "Turn right onto 12th Street",
          "Call (888) 885-7330 for immediate dispatch"
        ],
        driveTime: "6-10 minutes"
      },
      {
        name: "Columbia Metropolitan Airport",
        directions: [
          "Take Airport Boulevard toward Cayce",
          "Continue onto Knox Abbott Drive",
          "We'll come to you anywhere in Cayce!",
          "Average response: 10-15 minutes"
        ],
        driveTime: "8-12 minutes"
      },
      {
        name: "West Columbia Border (Meeting Street)",
        directions: [
          "Cross Meeting Street into Cayce",
          "Continue on Knox Abbott Drive",
          "We serve the entire Cayce area",
          "24/7 emergency service available"
        ],
        driveTime: "5-10 minutes"
      }
    ],
    
    weatherChallenges: [
      {
        season: "Summer",
        title: "Extreme Heat Emergencies (May-September)",
        description: "Cayce summers regularly hit 95-102°F with oppressive humidity. Proximity to the Congaree River adds moisture to already brutal heat. AC failures become medical emergencies.",
        issues: [
          "AC units fail under extreme heat load",
          "Compressors burn out from constant operation",
          "Refrigerant leaks cause total cooling loss",
          "Electrical panels overload from AC power draw",
          "Older homes near Riverwalk struggle with outdated systems"
        ],
        solution: "AC emergency? Don't risk heat stroke. Call (888) 885-7330 for same-day AC repair."
      },
      {
        season: "Year-Round",
        title: "Flood & Storm Emergencies",
        description: "Cayce's location on the Congaree River makes flooding a constant threat. The historic 2015 flood devastated Cayce. Severe thunderstorms create immediate crises.",
        issues: [
          "Sump pump failures causing rapid flooding",
          "Lightning strikes destroying HVAC/electrical systems",
          "Power surges frying expensive equipment",
          "Sewer backups during heavy rainfall",
          "River flooding affecting low-lying areas"
        ],
        solution: "Flooding or storm damage? 24/7 emergency line: (888) 885-7330"
      },
      {
        season: "Winter",
        title: "Cold Snap Emergencies (December-February)",
        description: "While Cayce winters are mild, sudden cold snaps catch homeowners unprepared. Older homes near the Riverwalk are especially vulnerable.",
        issues: [
          "Frozen pipes bursting when temperatures drop below 25°F",
          "Heat pumps failing in extreme cold",
          "Water heaters overwhelmed by increased demand",
          "Furnaces refusing to start after months of disuse",
          "Outdoor faucets and irrigation systems freezing"
        ],
        solution: "No heat or burst pipes? Emergency service: (888) 885-7330"
      }
    ],
    
    employers: [
      {
        category: "Manufacturing & Industrial",
        list: [
          "Nephron Pharmaceuticals",
          "Southeastern Freight Lines",
          "Distribution centers along Airport Blvd",
          "Industrial facilities near Congaree River",
          "Manufacturing plants"
        ]
      },
      {
        category: "Retail & Services",
        list: [
          "Knox Abbott Drive commercial corridor",
          "Airport Boulevard businesses",
          "Restaurants and retail shops",
          "Auto dealerships",
          "Service businesses"
        ]
      },
      {
        category: "Government & Public",
        list: [
          "City of Cayce offices",
          "Cayce Department of Public Safety",
          "Lexington County facilities",
          "Schools and educational facilities"
        ]
      }
    ],
    
    neighborhoods: [
      {
        name: "Riverwalk/Downtown Cayce",
        description: "Historic downtown area with the popular Cayce Riverwalk, amphitheater, and mix of residential and commercial properties. Beautiful river views but flood-prone.",
        responseTime: "8-12 minutes"
      },
      {
        name: "Guignard Park Area",
        description: "Residential neighborhoods surrounding Guignard Park. Mix of older and newer homes, family-friendly area with good schools.",
        responseTime: "10-15 minutes"
      },
      {
        name: "Airport Boulevard Corridor",
        description: "Commercial and industrial area with businesses, warehouses, and distribution centers. Critical for Cayce's economy.",
        responseTime: "12-18 minutes"
      },
      {
        name: "Residential Neighborhoods",
        description: "Established residential areas throughout Cayce with homes ranging from 1950s-2000s construction. Many need system upgrades.",
        responseTime: "10-15 minutes"
      }
    ],
    
    localDetails: [
      {
        title: "Fastest Response Across All Cayce Neighborhoods",
        description: "We know every street in Cayce. From the Riverwalk to Guignard Park, from Airport Boulevard to the residential areas, we reach you faster than anyone else. Our average emergency response time in Cayce is just 10-15 minutes.",
        points: [
          "Riverwalk/Downtown area: 8-12 minutes",
          "Guignard Park area: 10-15 minutes",
          "Airport Boulevard: 12-18 minutes",
          "Residential neighborhoods: 10-15 minutes"
        ]
      },
      {
        title: "We Understand Cayce's Unique Challenges",
        description: "Cayce's location on the Congaree River, the devastating 2015 flood, and South Carolina's extreme heat create unique challenges. We understand what Cayce properties face:",
        points: [
          "Extreme summer heat: AC units struggle in 95-102°F temperatures",
          "Flood vulnerability: River proximity means drainage is critical",
          "Older homes: Many properties need system upgrades",
          "Severe storms: Lightning and flooding are constant threats"
        ]
      }
    ],
    
    competitiveAdvantages: [
      "10-15 minute average response time in Cayce",
      "All three trades (HVAC, plumbing, electrical) under one roof",
      "No overtime charges for nights/weekends/holidays",
      "Upfront pricing before work begins",
      "Licensed, insured, and locally trusted",
      "Fully stocked trucks ready 24/7",
      "Understand Cayce's flood and heat challenges"
    ]
  },
  
  columbia: {
    name: "Columbia",
    slug: "columbia",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Richland",
    latitude: 34.0007,
    longitude: -81.0348,
    
    metaTitle: "Emergency HVAC, Plumbing & Electrical Columbia SC | 24/7 Service",
    metaDescription: "Need emergency HVAC, plumbing, or electrical service in Columbia, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!",
    keywords: "emergency HVAC Columbia SC, emergency plumber Columbia, 24/7 electrician Columbia, AC repair Columbia, burst pipe Columbia, emergency service Columbia South Carolina",
    
    heroTitle: "Emergency HVAC, Plumbing & Electrical Services in Columbia, SC",
    heroDescription: "AC died in Columbia's brutal heat? Pipe burst flooding your downtown home? Power outage at your USC-area business? We're here 24/7 with the fastest emergency response in the capital city. Average arrival time: 12-18 minutes.",
    avgResponseTime: "12-18 minutes",
    
    responseTimes: [
      { area: "Downtown/State House area", time: "10-15 minutes" },
      { area: "USC/Five Points", time: "12-18 minutes" },
      { area: "Shandon/Rosewood", time: "15-20 minutes" },
      { area: "Forest Acres/Trenholm", time: "12-18 minutes" }
    ],
    
    landmarks: [
      {
        name: "SC State House",
        directions: [
          "Head north on Main Street",
          "Turn right onto Gervais Street",
          "Continue to Assembly Street",
          "We serve all of Columbia - call for directions"
        ],
        driveTime: "5-8 minutes"
      },
      {
        name: "USC Campus / Five Points",
        directions: [
          "Exit campus onto Harden Street",
          "Head north toward downtown",
          "Turn right onto Blossom Street",
          "Call (888) 885-7330 for specific directions"
        ],
        driveTime: "6-10 minutes"
      },
      {
        name: "Columbia Metropolitan Airport",
        directions: [
          "Take Airport Boulevard toward I-26",
          "Merge onto I-26 East",
          "Take exit for downtown Columbia",
          "We'll come to you anywhere in Columbia!"
        ],
        driveTime: "12-18 minutes"
      },
      {
        name: "I-26 / I-126 / I-77 Interchange",
        directions: [
          "Take I-126 East toward downtown",
          "Exit at Assembly Street or Main Street",
          "Follow signs to your Columbia neighborhood",
          "Available 24/7 for emergencies"
        ],
        driveTime: "8-12 minutes"
      }
    ],
    
    weatherChallenges: [
      {
        season: "Summer",
        title: "Summer Heat Emergencies (May-September)",
        description: "Columbia regularly hits 95-102°F with crushing humidity. AC failures become medical emergencies, especially for elderly residents, young children, and those with health conditions.",
        issues: [
          "AC units fail under extreme heat load",
          "Compressors burn out from constant operation",
          "Refrigerant leaks cause total cooling loss",
          "Electrical panels overload from AC power draw",
          "Ductwork leaks waste precious cool air"
        ],
        solution: "AC emergency? Don't risk heat stroke. Call (888) 885-7330 for same-day AC repair."
      },
      {
        season: "Year-Round",
        title: "Storm & Flood Emergencies",
        description: "Columbia's three rivers and the devastating 2015 '1000-year flood' remind us that water emergencies are always a threat. Severe thunderstorms create immediate plumbing and electrical crises.",
        issues: [
          "Sump pump failures causing rapid basement flooding",
          "Lightning strikes destroying HVAC and electrical systems",
          "Power surges frying expensive equipment",
          "Sewer backups during heavy rainfall",
          "Tree damage to power lines and roof penetrations"
        ],
        solution: "Flooding or storm damage? 24/7 emergency line: (888) 885-7330"
      },
      {
        season: "Winter",
        title: "Winter Cold Snap Emergencies (December-February)",
        description: "While Columbia winters are generally mild, sudden cold snaps catch homeowners unprepared.",
        issues: [
          "Frozen pipes bursting when temperatures drop below 25°F",
          "Heat pumps failing in extreme cold (backup heat needed)",
          "Water heaters overwhelmed by increased demand",
          "Furnaces that haven't run in months refusing to start",
          "Outdoor faucets and irrigation systems freezing"
        ],
        solution: "No heat or burst pipes? Emergency service: (888) 885-7330"
      }
    ],
    
    employers: [
      {
        category: "Government",
        list: [
          "State of South Carolina government",
          "City of Columbia",
          "Richland County",
          "Fort Jackson (Army)",
          "Federal offices",
          "Court buildings"
        ]
      },
      {
        category: "Healthcare",
        list: [
          "Prisma Health",
          "Lexington Medical Center",
          "Palmetto Health",
          "VA Hospital",
          "Medical practices",
          "Dental offices"
        ]
      },
      {
        category: "Education",
        list: [
          "University of South Carolina",
          "Columbia College",
          "Benedict College",
          "Allen University",
          "Richland School Districts",
          "Private schools"
        ]
      },
      {
        category: "Business & Retail",
        list: [
          "BlueCross BlueShield SC",
          "SCANA/Dominion Energy",
          "Colonial Life",
          "Downtown businesses",
          "Vista restaurants and retail"
        ]
      }
    ],
    
    neighborhoods: [
      {
        name: "Downtown/State House",
        description: "Heart of South Carolina's capital with government buildings, businesses, and urban residential. High-rise buildings and historic properties.",
        responseTime: "10-15 minutes"
      },
      {
        name: "USC/Five Points",
        description: "University area with student housing, restaurants, bars, and entertainment. Mix of older homes and newer apartments.",
        responseTime: "12-18 minutes"
      },
      {
        name: "Shandon/Rosewood",
        description: "Historic neighborhoods with beautiful homes from 1920s-1950s. Tree-lined streets, established families, aging systems need expert care.",
        responseTime: "15-20 minutes"
      },
      {
        name: "Forest Acres/Trenholm",
        description: "Upscale shopping and residential area. Trenholm Plaza, nice homes, professional families.",
        responseTime: "12-18 minutes"
      },
      {
        name: "The Vista",
        description: "Revitalized warehouse district with restaurants, nightlife, condos, and businesses. Modern systems but high-density challenges.",
        responseTime: "10-15 minutes"
      },
      {
        name: "Elmwood Park",
        description: "Residential neighborhood near downtown. Mix of older and renovated homes, young professionals and families.",
        responseTime: "12-18 minutes"
      }
    ],
    
    localDetails: [
      {
        title: "Fastest Response Across All Columbia Neighborhoods",
        description: "We know every street in Columbia. From downtown to Five Points, from Shandon to Forest Acres, from the Vista to Rosewood, we reach you faster than anyone else. Our average emergency response time in Columbia is just 12-18 minutes - not the 2-3 hours other companies make you wait.",
        points: [
          "Downtown/State House area: 10-15 minutes",
          "USC/Five Points: 12-18 minutes",
          "Shandon/Rosewood: 15-20 minutes",
          "Forest Acres/Trenholm: 12-18 minutes"
        ]
      },
      {
        title: "We Understand Columbia's Unique Challenges",
        description: "Columbia's position at the confluence of the Saluda, Broad, and Congaree rivers, combined with South Carolina's extreme heat and the historic 2015 flood, creates unique challenges.",
        points: [
          "Extreme summer heat: AC units struggle in 95-102°F temperatures with high humidity",
          "Flood vulnerability: River proximity means drainage and sump pumps are critical",
          "Historic homes: Shandon, Rosewood, and Elmwood have aging systems needing expert care",
          "Severe storms: Lightning strikes, power surges, and wind damage are common"
        ]
      }
    ],
    
    competitiveAdvantages: [
      "12-18 minute average response time in Columbia",
      "All three trades (HVAC, plumbing, electrical) under one roof",
      "No overtime charges for nights/weekends/holidays",
      "Upfront pricing before work begins",
      "Licensed, insured, trusted by Columbia's largest employers",
      "Fully stocked trucks ready 24/7",
      "Understand Columbia's unique flood and heat challenges"
    ]
  },
  
  "forest-acres": {
    name: "Forest Acres",
    slug: "forest-acres",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Richland",
    latitude: 34.0251,
    longitude: -80.9898,
    
    metaTitle: "Emergency HVAC, Plumbing & Electrical Forest Acres SC | 24/7 Service",
    metaDescription: "Need emergency HVAC, plumbing, or electrical service in Forest Acres, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!",
    keywords: "emergency HVAC Forest Acres SC, emergency plumber Forest Acres, 24/7 electrician Forest Acres, AC repair Forest Acres, burst pipe Forest Acres, emergency service Forest Acres South Carolina",
    
    heroTitle: "Emergency HVAC, Plumbing & Electrical Services in Forest Acres, SC",
    heroDescription: "AC died in Forest Acres' brutal heat? Pipe burst flooding your Trenholm Plaza-area home? Power outage at your Forest Lake business? We're here 24/7 with the fastest emergency response in Forest Acres. Average arrival time: 10-15 minutes.",
    avgResponseTime: "10-15 minutes",
    
    responseTimes: [
      { area: "Trenholm Plaza District", time: "8-12 minutes" },
      { area: "Forest Lake area", time: "10-15 minutes" },
      { area: "Decker Boulevard corridor", time: "12-18 minutes" },
      { area: "Residential neighborhoods", time: "10-15 minutes" }
    ],
    
    landmarks: [
      {
        name: "Trenholm Plaza",
        directions: [
          "From Trenholm Plaza, head south on Forest Drive",
          "Turn onto Beltline Boulevard",
          "We serve all of Forest Acres - call for directions",
          "Emergency response available 24/7"
        ],
        driveTime: "5-8 minutes"
      },
      {
        name: "Forest Lake",
        directions: [
          "Exit Forest Lake area onto Forest Drive",
          "Head toward Trenholm Road",
          "Turn right onto Beltline Boulevard",
          "Call (888) 885-7330 for immediate dispatch"
        ],
        driveTime: "6-10 minutes"
      },
      {
        name: "Richland Mall Area",
        directions: [
          "From Richland Mall, take Forest Drive west",
          "Continue toward Trenholm Plaza",
          "We'll come to you anywhere in Forest Acres!",
          "Average response: 10-15 minutes"
        ],
        driveTime: "8-12 minutes"
      },
      {
        name: "I-77 / Forest Drive Exit",
        directions: [
          "Take I-77 to Forest Drive exit",
          "Head west on Forest Drive",
          "We serve the entire Forest Acres area",
          "24/7 emergency service available"
        ],
        driveTime: "10-15 minutes"
      }
    ],
    
    weatherChallenges: [
      {
        season: "Summer",
        title: "Extreme Heat Emergencies (May-September)",
        description: "Forest Acres summers regularly hit 95-102°F with oppressive humidity. Many homes were built in the 1950s-1980s with aging HVAC systems that struggle under extreme heat.",
        issues: [
          "Aging AC units fail under extreme heat load",
          "Compressors burn out in older systems",
          "Refrigerant leaks in outdated equipment",
          "Electrical panels overload (many homes need upgrades)",
          "Ductwork in older homes leaks precious cool air"
        ],
        solution: "AC emergency? Don't risk heat stroke. Call (888) 885-7330 for same-day AC repair."
      },
      {
        season: "Year-Round",
        title: "Storm & Infrastructure Emergencies",
        description: "Forest Acres' mature tree canopy is beautiful but creates risks during severe storms. Aging infrastructure in older neighborhoods means frequent plumbing and electrical issues.",
        issues: [
          "Tree damage to power lines during storms",
          "Lightning strikes destroying HVAC/electrical systems",
          "Power surges frying expensive equipment",
          "Aging galvanized pipes failing (common in 1950s-1970s homes)",
          "Outdated electrical systems overloading"
        ],
        solution: "Storm damage or system failure? 24/7 emergency line: (888) 885-7330"
      },
      {
        season: "Winter",
        title: "Cold Snap Emergencies (December-February)",
        description: "While Forest Acres winters are mild, sudden cold snaps expose weaknesses in aging home systems. Many older homes lack proper insulation.",
        issues: [
          "Frozen pipes in older homes (especially galvanized pipes)",
          "Heat pumps failing in extreme cold",
          "Water heaters overwhelmed (many are 15+ years old)",
          "Furnaces refusing to start after months of disuse",
          "Poor insulation causing system strain"
        ],
        solution: "No heat or burst pipes? Emergency service: (888) 885-7330"
      }
    ],
    
    employers: [
      {
        category: "Retail & Commercial",
        list: [
          "Trenholm Plaza shopping center",
          "Forest Drive commercial corridor",
          "Restaurants and retail shops",
          "Professional offices",
          "Medical practices"
        ]
      },
      {
        category: "Healthcare & Professional",
        list: [
          "Medical offices and clinics",
          "Dental practices",
          "Professional services",
          "Financial services",
          "Real estate offices"
        ]
      },
      {
        category: "Government & Education",
        list: [
          "City of Forest Acres offices",
          "Richland County facilities",
          "Schools and educational facilities",
          "Library and community centers"
        ]
      }
    ],
    
    neighborhoods: [
      {
        name: "Trenholm Plaza District",
        description: "Upscale shopping and dining area with surrounding residential neighborhoods. Mix of older and renovated homes, professional families.",
        responseTime: "8-12 minutes"
      },
      {
        name: "Forest Lake",
        description: "Established neighborhood surrounding Forest Lake. Beautiful homes from 1950s-1970s, many with original systems needing upgrades.",
        responseTime: "10-15 minutes"
      },
      {
        name: "Decker Boulevard Corridor",
        description: "Commercial and residential mix along Decker Boulevard. Businesses, apartments, and single-family homes.",
        responseTime: "12-18 minutes"
      },
      {
        name: "North Forest Acres",
        description: "Residential area with homes from 1960s-1980s. Mature trees, established families, aging infrastructure.",
        responseTime: "10-15 minutes"
      },
      {
        name: "South Forest Acres",
        description: "Mix of residential and commercial. Close to Columbia border, convenient location, diverse housing stock.",
        responseTime: "10-15 minutes"
      },
      {
        name: "Forest Drive Corridor",
        description: "Main commercial artery through Forest Acres. Businesses, restaurants, retail, and nearby residential areas.",
        responseTime: "8-12 minutes"
      }
    ],
    
    localDetails: [
      {
        title: "Fastest Response Across All Forest Acres Neighborhoods",
        description: "We know every street in Forest Acres. From Trenholm Plaza to Forest Lake, from Decker Boulevard to the residential neighborhoods, we reach you faster than anyone else. Our average emergency response time in Forest Acres is just 10-15 minutes.",
        points: [
          "Trenholm Plaza District: 8-12 minutes",
          "Forest Lake area: 10-15 minutes",
          "Decker Boulevard: 12-18 minutes",
          "Residential neighborhoods: 10-15 minutes"
        ]
      },
      {
        title: "We Understand Forest Acres' Unique Challenges",
        description: "Forest Acres' beautiful mature trees, aging home infrastructure (many homes built 1950s-1980s), and South Carolina's extreme heat create unique challenges. We understand what Forest Acres properties face:",
        points: [
          "Aging systems: Many homes have original HVAC, plumbing, electrical from 1950s-1980s",
          "Galvanized pipes: Common in older homes, prone to corrosion and failure",
          "Outdated electrical: Many homes need panel upgrades for modern demands",
          "Tree damage: Mature canopy beautiful but creates storm risks"
        ]
      }
    ],
    
    competitiveAdvantages: [
      "10-15 minute average response time in Forest Acres",
      "All three trades (HVAC, plumbing, electrical) under one roof",
      "No overtime charges for nights/weekends/holidays",
      "Upfront pricing before work begins",
      "Experts in aging home systems (1950s-1980s homes)",
      "Fully stocked trucks ready 24/7",
      "Understand Forest Acres' unique infrastructure challenges"
    ]
  },
  
  irmo: {
    name: "Irmo",
    slug: "irmo",
    state: "South Carolina",
    stateAbbr: "SC",
    county: "Lexington/Richland",
    latitude: 34.0860,
    longitude: -81.1834,
    
    metaTitle: "Emergency HVAC, Plumbing & Electrical Irmo SC | 24/7 Service",
    metaDescription: "Need emergency HVAC, plumbing, or electrical service in Irmo, SC? Call (888) 885-7330 for 24/7 rapid response. AC failures, burst pipes, power outages - we fix it fast!",
    keywords: "emergency HVAC Irmo SC, emergency plumber Irmo, 24/7 electrician Irmo, AC repair Irmo, burst pipe Irmo, emergency service Irmo South Carolina",
    
    heroTitle: "Emergency HVAC, Plumbing & Electrical Services in Irmo, SC",
    heroDescription: "AC died in Irmo's brutal heat? Pipe burst flooding your Lake Murray-area home? Power outage at your Harbison business? We're here 24/7 with the fastest emergency response in Irmo. Average arrival time: 12-18 minutes.",
    avgResponseTime: "12-18 minutes",
    
    responseTimes: [
      { area: "Harbison area", time: "10-15 minutes" },
      { area: "Lake Murray/Ballentine", time: "15-20 minutes" },
      { area: "Downtown Irmo", time: "12-18 minutes" },
      { area: "Seven Oaks/St. Andrews", time: "12-18 minutes" }
    ],
    
    landmarks: [
      {
        name: "Harbison Boulevard / Columbiana Centre",
        directions: [
          "From Harbison, take Harbison Boulevard toward I-26",
          "Continue onto St. Andrews Road",
          "We serve all of Irmo - call for directions",
          "Emergency response available 24/7"
        ],
        driveTime: "6-10 minutes"
      },
      {
        name: "Lake Murray Dam",
        directions: [
          "From Lake Murray Dam, take Lake Murray Boulevard",
          "Head toward Irmo Drive",
          "Turn onto St. Andrews Road",
          "Call (888) 885-7330 for immediate dispatch"
        ],
        driveTime: "10-15 minutes"
      },
      {
        name: "Downtown Irmo / Irmo Town Park",
        directions: [
          "From Irmo Town Park, head south on Lake Murray Boulevard",
          "Turn onto Irmo Drive",
          "We'll come to you anywhere in Irmo!",
          "Average response: 12-18 minutes"
        ],
        driveTime: "8-12 minutes"
      },
      {
        name: "I-26 / Harbison Exit",
        directions: [
          "Take I-26 to Harbison Boulevard exit",
          "Head north toward Irmo",
          "We serve the entire Irmo area",
          "24/7 emergency service available"
        ],
        driveTime: "10-15 minutes"
      }
    ],
    
    weatherChallenges: [
      {
        season: "Summer",
        title: "Extreme Heat Emergencies (May-September)",
        description: "Irmo summers regularly hit 95-102°F with crushing humidity. Lake Murray adds moisture to already oppressive heat. AC failures become medical emergencies.",
        issues: [
          "AC units fail under extreme heat load",
          "Lakefront homes have additional humidity challenges",
          "Compressors burn out from constant operation",
          "Refrigerant leaks cause total cooling loss",
          "Electrical panels overload from AC power draw"
        ],
        solution: "AC emergency? Don't risk heat stroke. Call (888) 885-7330 for same-day AC repair."
      },
      {
        season: "Year-Round",
        title: "Storm & Lake-Related Emergencies",
        description: "Irmo's proximity to Lake Murray creates unique challenges. Severe thunderstorms, high humidity, and occasional flooding affect home systems.",
        issues: [
          "Lightning strikes over Lake Murray destroying systems",
          "High humidity causing mold and system strain",
          "Power surges from storms frying equipment",
          "Sump pump failures in lakefront properties",
          "Tree damage to power lines during storms"
        ],
        solution: "Storm damage or system failure? 24/7 emergency line: (888) 885-7330"
      },
      {
        season: "Winter",
        title: "Cold Snap Emergencies (December-February)",
        description: "While Irmo winters are mild, sudden cold snaps and lakefront conditions create unique challenges. Lakefront homes especially vulnerable.",
        issues: [
          "Frozen pipes when temperatures drop below 25°F",
          "Heat pumps failing in extreme cold",
          "Water heaters overwhelmed by increased demand",
          "Lakefront properties face additional freeze risks",
          "Outdoor faucets and boat house plumbing freezing"
        ],
        solution: "No heat or burst pipes? Emergency service: (888) 885-7330"
      }
    ],
    
    employers: [
      {
        category: "Retail & Commercial",
        list: [
          "Harbison area shopping centers",
          "Columbiana Centre proximity",
          "Restaurants and retail shops",
          "Professional offices",
          "Service businesses"
        ]
      },
      {
        category: "Healthcare & Professional",
        list: [
          "Medical offices and clinics",
          "Dental practices",
          "Professional services",
          "Financial services",
          "Real estate offices"
        ]
      },
      {
        category: "Recreation & Tourism",
        list: [
          "Lake Murray tourism businesses",
          "Marinas and boat services",
          "Restaurants and entertainment",
          "Recreation facilities"
        ]
      },
      {
        category: "Government & Education",
        list: [
          "Town of Irmo offices",
          "Lexington-Richland School District 5",
          "Schools and educational facilities",
          "Library and community centers"
        ]
      }
    ],
    
    neighborhoods: [
      {
        name: "Harbison Area",
        description: "Upscale shopping and business district with surrounding neighborhoods. Modern homes, professional families, convenient to I-26.",
        responseTime: "10-15 minutes"
      },
      {
        name: "Lake Murray/Ballentine",
        description: "Lakefront and near-lake properties. Beautiful views, higher humidity, unique maintenance challenges. Mix of year-round and vacation homes.",
        responseTime: "15-20 minutes"
      },
      {
        name: "Downtown Irmo",
        description: "Historic downtown area with Irmo Town Park. Mix of older and newer homes, established community, small-town feel.",
        responseTime: "12-18 minutes"
      },
      {
        name: "Seven Oaks",
        description: "Established neighborhood with homes from 1970s-1990s. Family-friendly, good schools, many homes need system upgrades.",
        responseTime: "12-18 minutes"
      },
      {
        name: "St. Andrews Area",
        description: "Large established community with diverse housing. Mix of ages and styles, convenient location, active community.",
        responseTime: "12-18 minutes"
      },
      {
        name: "Friarsgate",
        description: "Newer planned community with modern homes. Well-maintained properties, professional families, newer systems.",
        responseTime: "15-20 minutes"
      }
    ],
    
    localDetails: [
      {
        title: "Fastest Response Across All Irmo Neighborhoods",
        description: "We know every street in Irmo. From Harbison to Lake Murray, from downtown Irmo to Seven Oaks, from St. Andrews to Ballentine, we reach you faster than anyone else. Our average emergency response time in Irmo is just 12-18 minutes.",
        points: [
          "Harbison area: 10-15 minutes",
          "Lake Murray/Ballentine: 15-20 minutes",
          "Downtown Irmo: 12-18 minutes",
          "Seven Oaks/St. Andrews: 12-18 minutes"
        ]
      },
      {
        title: "We Understand Irmo's Unique Challenges",
        description: "Irmo's proximity to Lake Murray, South Carolina's extreme heat and humidity, and the mix of lakefront and suburban properties create unique challenges. We understand what Irmo properties face:",
        points: [
          "Lake humidity: Properties near Lake Murray face extra moisture and mold challenges",
          "Extreme summer heat: AC units struggle in 95-102°F temperatures",
          "Lakefront risks: Freezing, flooding, and humidity affect lakefront homes",
          "Severe storms: Lightning over the lake and tree damage are common"
        ]
      }
    ],
    
    competitiveAdvantages: [
      "12-18 minute average response time in Irmo",
      "All three trades (HVAC, plumbing, electrical) under one roof",
      "No overtime charges for nights/weekends/holidays",
      "Upfront pricing before work begins",
      "Experts in lakefront property challenges",
      "Fully stocked trucks ready 24/7",
      "Understand Lake Murray area's unique conditions"
    ]
  }
};
