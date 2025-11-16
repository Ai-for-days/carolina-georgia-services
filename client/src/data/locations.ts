export interface Location {
  name: string;
  type: 'city' | 'neighborhood' | 'community' | 'region';
}

export const richlandCountyLocations: Location[] = [
  // Cities
  { name: 'Cayce', type: 'city' },
  { name: 'Columbia', type: 'city' },
  { name: 'Forest Acres', type: 'city' },
  { name: 'Arcadia Lakes', type: 'city' },
  { name: 'Blythewood', type: 'city' },
  { name: 'Eastover', type: 'city' },
  { name: 'Elgin', type: 'city' },
  { name: 'Irmo', type: 'city' },
  
  // Neighborhoods
  { name: 'Arthurtown', type: 'neighborhood' },
  { name: 'Capitol View', type: 'neighborhood' },
  { name: 'Dentsville', type: 'neighborhood' },
  { name: 'Gadsden', type: 'neighborhood' },
  { name: 'Hopkins', type: 'neighborhood' },
  { name: 'Lake Murray of Richland', type: 'neighborhood' },
  { name: 'Olympia', type: 'neighborhood' },
  { name: 'St. Andrews', type: 'neighborhood' },
  { name: 'Woodfield', type: 'neighborhood' },
  { name: 'Bookman', type: 'neighborhood' },
  { name: 'Horrell Hill', type: 'neighborhood' },
  { name: 'Pontiac', type: 'neighborhood' },
  { name: 'Wateree', type: 'neighborhood' },
  
  // Communities
  { name: 'Boyden Arbor', type: 'community' },
  { name: 'Cedar Creek', type: 'community' },
  { name: 'Eau Claire', type: 'community' },
  { name: 'Fairwold Acres', type: 'community' },
  { name: 'Killian', type: 'community' },
  { name: 'Kingville', type: 'community' },
  { name: 'Leesburg', type: 'community' },
  { name: 'Lykes', type: 'community' },
  { name: 'Mountain Brook', type: 'community' },
  { name: 'Riverside', type: 'community' },
  { name: 'Spring Hill', type: 'community' },
  { name: 'State Park', type: 'community' },
  { name: 'Windsor Estates', type: 'community' },
  
  // Regions
  { name: 'Dutch Fork', type: 'region' },
  { name: 'Fort Jackson', type: 'region' },
  { name: 'Intown/downtown', type: 'region' },
  { name: 'Lower Richland', type: 'region' },
  { name: 'Northeast Richland', type: 'region' },
  { name: 'Upper Richland', type: 'region' },
];

export const services = [
  {
    title: 'HVAC Services',
    description: 'Expert heating, ventilation, and air conditioning installation, repair, and maintenance for optimal comfort year-round.',
    icon: 'thermometer',
    features: [
      'AC Installation & Repair',
      'Heating System Service',
      'Ductwork & Ventilation',
      'Preventive Maintenance',
      'Emergency 24/7 Service',
      'Energy Efficiency Upgrades'
    ]
  },
  {
    title: 'Plumbing Services',
    description: 'Comprehensive plumbing solutions from routine maintenance to emergency repairs for residential and commercial properties.',
    icon: 'wrench',
    features: [
      'Leak Detection & Repair',
      'Drain Cleaning',
      'Water Heater Service',
      'Pipe Installation & Replacement',
      'Fixture Installation',
      'Sewer Line Services'
    ]
  },
  {
    title: 'Electrical Services',
    description: 'Licensed electricians providing safe, reliable electrical installations, repairs, and upgrades for all your power needs.',
    icon: 'zap',
    features: [
      'Electrical Repairs',
      'Panel Upgrades',
      'Lighting Installation',
      'Outlet & Switch Repair',
      'Generator Installation',
      'Code Compliance Inspections'
    ]
  }
];
