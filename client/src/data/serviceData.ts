export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  metaTitleTemplate: string; // e.g., "{service} in {city}, SC | Carolina Georgia Services"
  metaDescriptionTemplate: string;
  keywordsTemplate: string[];
  heroTitle: string;
  heroDescription: string;
  services: {
    title: string;
    description: string;
    items: string[];
  }[];
  commonProblems: {
    title: string;
    description: string;
    solutions: string[];
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  whyChooseUs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  emergencyInfo: {
    title: string;
    description: string;
    responseTime: string;
  };
}

export const serviceData: Record<string, ServiceData> = {
  hvac: {
    slug: "hvac",
    name: "HVAC",
    icon: "wind",
    metaTitleTemplate: "HVAC Services in {city}, SC | AC Repair & Heating | Carolina Georgia Services",
    metaDescriptionTemplate: "Expert HVAC services in {city}, South Carolina. AC repair, heating, installation, and 24/7 emergency service. Fast response times. Call (888) 885-7330 now!",
    keywordsTemplate: [
      "HVAC {city} SC",
      "AC repair {city}",
      "heating repair {city}",
      "air conditioning {city} SC",
      "HVAC installation {city}",
      "emergency HVAC {city}",
      "{city} HVAC contractor",
      "furnace repair {city} SC"
    ],
    heroTitle: "Expert HVAC Services in {city}, SC",
    heroDescription: "When your AC stops cooling or your heater fails in {city}, you need help NOW. We provide fast, reliable HVAC repair, installation, and maintenance with 15-25 minute response times across {city}.",
    services: [
      {
        title: "Air Conditioning Services",
        description: "Keep your {city} home cool during brutal South Carolina summers",
        items: [
          "AC repair and diagnostics",
          "Central air installation",
          "Ductless mini-split systems",
          "AC maintenance and tune-ups",
          "Refrigerant recharge",
          "Thermostat installation and repair",
          "Emergency AC repair 24/7"
        ]
      },
      {
        title: "Heating Services",
        description: "Stay warm during {city}'s cold winter months",
        items: [
          "Furnace repair and replacement",
          "Heat pump installation",
          "Boiler service",
          "Heating system maintenance",
          "Emergency heating repair",
          "Ductwork inspection and repair",
          "Indoor air quality solutions"
        ]
      },
      {
        title: "HVAC Installation & Replacement",
        description: "Upgrade to energy-efficient systems",
        items: [
          "Complete HVAC system replacement",
          "Energy-efficient system upgrades",
          "Ductwork installation",
          "Zoned heating and cooling",
          "Smart thermostat integration",
          "Free estimates on new systems",
          "Financing options available"
        ]
      }
    ],
    commonProblems: [
      {
        title: "AC Not Cooling in {city} Heat",
        description: "Your AC is running but not cooling your {city} home. This is the #1 emergency call we get during summer.",
        solutions: [
          "Check and replace air filters",
          "Inspect refrigerant levels",
          "Clean condenser coils",
          "Test thermostat calibration",
          "Inspect ductwork for leaks",
          "Emergency same-day service available"
        ]
      },
      {
        title: "HVAC System Making Strange Noises",
        description: "Grinding, squealing, or banging sounds from your HVAC system indicate serious problems.",
        solutions: [
          "Inspect blower motor bearings",
          "Check for loose components",
          "Examine belt condition",
          "Test compressor function",
          "Lubricate moving parts",
          "Prevent costly breakdowns with immediate repair"
        ]
      },
      {
        title: "High Energy Bills",
        description: "{city} homeowners see energy bills spike when HVAC systems lose efficiency.",
        solutions: [
          "Perform system efficiency audit",
          "Seal ductwork leaks",
          "Upgrade to programmable thermostat",
          "Replace aging inefficient systems",
          "Install energy-efficient equipment",
          "Reduce bills by up to 40%"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Emergency Call",
        description: "Call (888) 885-7330 anytime, 24/7. We answer immediately and dispatch a certified HVAC technician to your {city} location."
      },
      {
        step: 2,
        title: "Rapid Response",
        description: "Our GPS-tracked technician arrives at your {city} home in 15-25 minutes with a fully-stocked truck ready to diagnose and repair."
      },
      {
        step: 3,
        title: "Honest Diagnosis",
        description: "We inspect your HVAC system, explain the problem in plain English, and provide upfront pricing before any work begins."
      },
      {
        step: 4,
        title: "Expert Repair",
        description: "Our licensed technicians fix the problem right the first time using quality parts and proven techniques."
      },
      {
        step: 5,
        title: "Quality Guarantee",
        description: "We test the system, clean up completely, and guarantee our work. You're back to comfort in hours, not days."
      }
    ],
    whyChooseUs: [
      "15-25 minute response times across {city}",
      "24/7/365 emergency HVAC service",
      "Licensed and insured HVAC technicians",
      "Upfront pricing - no hidden fees",
      "Same-day service available",
      "100% satisfaction guarantee",
      "Financing options for new systems",
      "Serving {city} families for years"
    ],
    faqs: [
      {
        question: "How quickly can you respond to an HVAC emergency in {city}?",
        answer: "We typically arrive within 15-25 minutes for emergency HVAC calls in {city}. Our technicians are strategically located across Richland County and use GPS dispatch to reach you fast."
      },
      {
        question: "Do you offer 24/7 emergency HVAC service in {city}?",
        answer: "Yes! We provide 24/7/365 emergency HVAC service in {city} with no overtime charges. Whether it's 2 AM or Christmas Day, we're here to help."
      },
      {
        question: "How much does AC repair cost in {city}, SC?",
        answer: "AC repair costs in {city} typically range from $150-$600 depending on the issue. We provide upfront pricing before any work begins, so you'll know the exact cost with no surprises."
      },
      {
        question: "Should I repair or replace my old HVAC system in {city}?",
        answer: "If your HVAC system is over 15 years old, requires frequent repairs, or your energy bills are high, replacement is usually more cost-effective. We'll provide honest recommendations based on your specific situation."
      },
      {
        question: "Do you service all HVAC brands in {city}?",
        answer: "Yes, we service all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, and more. Our technicians are trained on all systems."
      }
    ],
    emergencyInfo: {
      title: "24/7 Emergency HVAC Service in {city}",
      description: "AC failure in {city}'s 95°F heat? Heater broken on a freezing night? We're available 24/7/365 for emergency HVAC service. No overtime charges. Fast response guaranteed.",
      responseTime: "15-25 minutes"
    }
  },
  plumbing: {
    slug: "plumbing",
    name: "Plumbing",
    icon: "droplet",
    metaTitleTemplate: "Plumbing Services in {city}, SC | Emergency Plumber | Carolina Georgia Services",
    metaDescriptionTemplate: "Expert plumbing services in {city}, South Carolina. Leak repair, drain cleaning, water heaters, and 24/7 emergency plumber. Fast response. Call (888) 885-7330!",
    keywordsTemplate: [
      "plumber {city} SC",
      "emergency plumber {city}",
      "plumbing services {city}",
      "leak repair {city} SC",
      "drain cleaning {city}",
      "water heater {city}",
      "{city} plumbing contractor",
      "24 hour plumber {city}"
    ],
    heroTitle: "Expert Plumbing Services in {city}, SC",
    heroDescription: "Burst pipe? Clogged drain? Water heater failure? When plumbing emergencies strike your {city} home, we respond in 15-25 minutes with expert solutions. Available 24/7.",
    services: [
      {
        title: "Emergency Plumbing",
        description: "24/7 emergency plumbing service for {city} homes and businesses",
        items: [
          "Burst pipe repair",
          "Sewer line backups",
          "Water heater failures",
          "Gas leak detection",
          "Frozen pipe thawing",
          "Major leak repair",
          "Available 24/7/365"
        ]
      },
      {
        title: "Drain & Sewer Services",
        description: "Clear stubborn clogs and restore proper drainage",
        items: [
          "Drain cleaning and unclogging",
          "Sewer line inspection (camera)",
          "Hydro-jetting services",
          "Sewer line repair and replacement",
          "Root removal",
          "Preventive maintenance",
          "Grease trap cleaning"
        ]
      },
      {
        title: "Water Heater Services",
        description: "Installation, repair, and replacement",
        items: [
          "Water heater repair",
          "Tank water heater installation",
          "Tankless water heater installation",
          "Water heater maintenance",
          "Emergency water heater replacement",
          "Energy-efficient upgrades",
          "Same-day installation available"
        ]
      },
      {
        title: "Plumbing Repairs & Installation",
        description: "Complete plumbing solutions for your {city} property",
        items: [
          "Leak detection and repair",
          "Pipe repair and replacement",
          "Fixture installation (faucets, toilets, sinks)",
          "Garbage disposal repair/installation",
          "Sump pump installation",
          "Water line repair",
          "Re-piping services"
        ]
      }
    ],
    commonProblems: [
      {
        title: "Burst Pipes in {city}",
        description: "Burst pipes cause catastrophic water damage. Common in {city} during winter freezes and when old pipes corrode.",
        solutions: [
          "Shut off main water immediately",
          "Emergency pipe repair within 20 minutes",
          "Water damage mitigation",
          "Pipe replacement if needed",
          "Prevent future bursts with insulation",
          "Available 24/7 for emergencies"
        ]
      },
      {
        title: "Clogged Drains & Sewers",
        description: "Slow drains, backups, and foul odors indicate serious clogs in your {city} plumbing.",
        solutions: [
          "Professional drain cleaning",
          "Camera inspection to locate blockage",
          "Hydro-jetting for tough clogs",
          "Root removal from sewer lines",
          "Sewer line repair if damaged",
          "Same-day service available"
        ]
      },
      {
        title: "Water Heater Failure",
        description: "No hot water in your {city} home? Water heaters typically last 8-12 years before failing.",
        solutions: [
          "Diagnose water heater problem",
          "Repair if cost-effective",
          "Same-day replacement if needed",
          "Upgrade to tankless for efficiency",
          "Install energy-efficient models",
          "Financing available"
        ]
      },
      {
        title: "Leaking Pipes & Fixtures",
        description: "{city}'s hard water and aging infrastructure cause leaks that waste water and damage property.",
        solutions: [
          "Electronic leak detection",
          "Repair leaking pipes",
          "Replace corroded pipes",
          "Fix dripping faucets",
          "Seal toilet leaks",
          "Prevent water damage and mold"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Emergency Call",
        description: "Call (888) 885-7330 immediately. We answer 24/7 and dispatch a licensed plumber to your {city} location right away."
      },
      {
        step: 2,
        title: "Fast Arrival",
        description: "Our plumber arrives at your {city} property in 15-25 minutes with professional equipment and parts to fix the problem."
      },
      {
        step: 3,
        title: "Accurate Diagnosis",
        description: "We inspect your plumbing, use advanced tools like cameras if needed, and explain the issue and solution clearly."
      },
      {
        step: 4,
        title: "Expert Repair",
        description: "Our licensed plumbers fix the problem correctly using quality materials and proven techniques. We guarantee our work."
      },
      {
        step: 5,
        title: "Complete Cleanup",
        description: "We test the repair, clean up thoroughly, and ensure you're completely satisfied before we leave."
      }
    ],
    whyChooseUs: [
      "15-25 minute emergency response in {city}",
      "24/7/365 emergency plumbing service",
      "Licensed and insured plumbers",
      "Upfront pricing before we start",
      "No overtime charges - ever",
      "Same-day service available",
      "100% satisfaction guarantee",
      "Trusted by {city} homeowners"
    ],
    faqs: [
      {
        question: "How fast can you respond to a plumbing emergency in {city}?",
        answer: "We typically arrive within 15-25 minutes for plumbing emergencies in {city}. Our plumbers are strategically located across Richland County for rapid response."
      },
      {
        question: "Do you offer 24/7 emergency plumbing in {city}?",
        answer: "Yes! We provide 24/7/365 emergency plumbing service in {city} with no overtime charges. Burst pipe at 3 AM? We're on our way."
      },
      {
        question: "How much does emergency plumbing cost in {city}, SC?",
        answer: "Emergency plumbing costs in {city} vary by issue. Simple repairs start around $150-$300, while major repairs like burst pipes can be $500-$1500. We provide upfront pricing before any work."
      },
      {
        question: "Can you fix a burst pipe in {city} immediately?",
        answer: "Yes, we specialize in emergency burst pipe repair in {city}. We'll shut off your water, repair or replace the damaged pipe, and minimize water damage - usually within hours."
      },
      {
        question: "Do you install tankless water heaters in {city}?",
        answer: "Yes, we install both tank and tankless water heaters in {city}. Tankless units provide endless hot water and save energy. We'll help you choose the right system for your home."
      }
    ],
    emergencyInfo: {
      title: "24/7 Emergency Plumber in {city}",
      description: "Burst pipe flooding your {city} home? Sewer backup? Water heater failure? We're available 24/7/365 for plumbing emergencies. No overtime charges. Fast response guaranteed.",
      responseTime: "15-25 minutes"
    }
  },
  electrical: {
    slug: "electrical",
    name: "Electrical",
    icon: "zap",
    metaTitleTemplate: "Electrical Services in {city}, SC | Licensed Electrician | Carolina Georgia Services",
    metaDescriptionTemplate: "Expert electrical services in {city}, South Carolina. Panel upgrades, wiring, repairs, and 24/7 emergency electrician. Licensed & insured. Call (888) 885-7330!",
    keywordsTemplate: [
      "electrician {city} SC",
      "emergency electrician {city}",
      "electrical services {city}",
      "panel upgrade {city} SC",
      "electrical repair {city}",
      "rewiring {city}",
      "{city} electrical contractor",
      "24 hour electrician {city}"
    ],
    heroTitle: "Expert Electrical Services in {city}, SC",
    heroDescription: "Power outage? Electrical fire risk? Breaker keeps tripping? When electrical emergencies threaten your {city} home, we respond in 15-25 minutes with licensed electricians. Available 24/7.",
    services: [
      {
        title: "Emergency Electrical Services",
        description: "24/7 emergency electrical service for {city} homes and businesses",
        items: [
          "Power outage diagnosis and repair",
          "Electrical fire prevention",
          "Breaker panel emergencies",
          "Sparking outlet repair",
          "Emergency generator hookup",
          "Storm damage electrical repair",
          "Available 24/7/365"
        ]
      },
      {
        title: "Electrical Panel Services",
        description: "Upgrade outdated panels for safety and capacity",
        items: [
          "Electrical panel upgrades (100A to 200A)",
          "Circuit breaker replacement",
          "Fuse box to breaker panel conversion",
          "Sub-panel installation",
          "Panel inspection and testing",
          "Code compliance upgrades",
          "Surge protection installation"
        ]
      },
      {
        title: "Wiring & Rewiring",
        description: "Safe, code-compliant electrical wiring for {city} properties",
        items: [
          "Whole-home rewiring",
          "Aluminum wiring replacement",
          "Knob-and-tube wiring removal",
          "New circuit installation",
          "GFCI and AFCI installation",
          "Dedicated appliance circuits",
          "Code violation corrections"
        ]
      },
      {
        title: "Electrical Repairs & Installation",
        description: "Complete electrical solutions for your {city} property",
        items: [
          "Outlet and switch repair/installation",
          "Lighting installation (indoor/outdoor)",
          "Ceiling fan installation",
          "Smoke detector installation",
          "EV charger installation",
          "Generator installation",
          "Smart home electrical integration"
        ]
      }
    ],
    commonProblems: [
      {
        title: "Frequent Breaker Trips in {city}",
        description: "Circuit breakers that constantly trip indicate overloaded circuits or electrical faults - a serious fire risk.",
        solutions: [
          "Diagnose circuit overload",
          "Install additional circuits",
          "Upgrade electrical panel capacity",
          "Repair faulty breakers",
          "Balance electrical load",
          "Prevent electrical fires"
        ]
      },
      {
        title: "Outdated Electrical Panels",
        description: "Many {city} homes built before 1990 have 100-amp panels insufficient for modern electrical demands.",
        solutions: [
          "Upgrade to 200-amp panel",
          "Replace Federal Pacific panels (fire hazard)",
          "Install modern circuit breakers",
          "Add surge protection",
          "Meet current electrical codes",
          "Support modern appliances and EVs"
        ]
      },
      {
        title: "Flickering Lights",
        description: "Flickering lights in your {city} home indicate loose connections, overloaded circuits, or failing fixtures.",
        solutions: [
          "Inspect and tighten connections",
          "Test voltage levels",
          "Replace faulty fixtures",
          "Repair damaged wiring",
          "Upgrade inadequate circuits",
          "Prevent electrical fires"
        ]
      },
      {
        title: "Aluminum Wiring Fire Risk",
        description: "Homes in {city} built 1960s-1970s may have aluminum wiring - a known fire hazard that needs immediate attention.",
        solutions: [
          "Inspect aluminum wiring",
          "Replace with copper wiring",
          "Install COPALUM connectors",
          "Upgrade to code compliance",
          "Eliminate fire risk",
          "Increase home value and safety"
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: "Emergency Call",
        description: "Call (888) 885-7330 anytime, 24/7. We dispatch a licensed electrician to your {city} location immediately."
      },
      {
        step: 2,
        title: "Rapid Response",
        description: "Our electrician arrives at your {city} property in 15-25 minutes with professional tools and equipment."
      },
      {
        step: 3,
        title: "Safe Diagnosis",
        description: "We inspect your electrical system, identify the problem, test for safety hazards, and explain the solution clearly."
      },
      {
        step: 4,
        title: "Expert Repair",
        description: "Our licensed electricians fix the problem to code using quality materials. All work is inspected and tested."
      },
      {
        step: 5,
        title: "Safety Guarantee",
        description: "We verify safe operation, clean up completely, and guarantee our work meets all electrical codes."
      }
    ],
    whyChooseUs: [
      "15-25 minute emergency response in {city}",
      "24/7/365 emergency electrical service",
      "Licensed and insured electricians",
      "Upfront pricing - no surprises",
      "Code-compliant work guaranteed",
      "Same-day service available",
      "100% satisfaction guarantee",
      "Trusted by {city} families"
    ],
    faqs: [
      {
        question: "How quickly can you respond to an electrical emergency in {city}?",
        answer: "We typically arrive within 15-25 minutes for electrical emergencies in {city}. Our licensed electricians are strategically located across Richland County for fast response."
      },
      {
        question: "Do you offer 24/7 emergency electrical service in {city}?",
        answer: "Yes! We provide 24/7/365 emergency electrical service in {city} with no overtime charges. Power outage or electrical fire risk? We're on our way."
      },
      {
        question: "How much does an electrical panel upgrade cost in {city}, SC?",
        answer: "Electrical panel upgrades in {city} typically cost $1,500-$3,500 depending on the panel size and complexity. We provide free estimates and upfront pricing."
      },
      {
        question: "Can you install an EV charger in my {city} home?",
        answer: "Yes, we install Level 2 EV chargers in {city} homes. We'll assess your electrical panel capacity, install a dedicated circuit if needed, and set up your charger safely."
      },
      {
        question: "Do you replace aluminum wiring in {city}?",
        answer: "Yes, we specialize in aluminum wiring replacement in {city}. Aluminum wiring is a fire hazard, and we'll replace it with safe copper wiring or install COPALUM connectors."
      }
    ],
    emergencyInfo: {
      title: "24/7 Emergency Electrician in {city}",
      description: "Power outage? Sparking outlet? Burning smell from electrical panel? We're available 24/7/365 for electrical emergencies in {city}. No overtime charges. Licensed electricians respond fast.",
      responseTime: "15-25 minutes"
    }
  }
};
