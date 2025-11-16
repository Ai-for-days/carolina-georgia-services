import fs from 'fs';
import path from 'path';

const locations = [
  // Quick Win Communities (20)
  { name: 'Boyden Arbor', type: 'community', slug: 'boyden-arbor' },
  { name: 'Windsor Estates', type: 'community', slug: 'windsor-estates' },
  { name: 'Fairwold Acres', type: 'community', slug: 'fairwold-acres' },
  { name: 'Mountain Brook', type: 'community', slug: 'mountain-brook' },
  { name: 'Cedar Creek', type: 'community', slug: 'cedar-creek' },
  { name: 'Eau Claire', type: 'community', slug: 'eau-claire' },
  { name: 'Riverside', type: 'community', slug: 'riverside' },
  { name: 'Spring Hill', type: 'community', slug: 'spring-hill' },
  { name: 'State Park', type: 'community', slug: 'state-park' },
  { name: 'Killian', type: 'community', slug: 'killian' },
  { name: 'Kingville', type: 'community', slug: 'kingville' },
  { name: 'Leesburg', type: 'community', slug: 'leesburg' },
  { name: 'Lykes', type: 'community', slug: 'lykes' },
  { name: 'Bookman', type: 'neighborhood', slug: 'bookman' },
  { name: 'Horrell Hill', type: 'neighborhood', slug: 'horrell-hill' },
  { name: 'Pontiac', type: 'neighborhood', slug: 'pontiac' },
  { name: 'Wateree', type: 'neighborhood', slug: 'wateree' },
  { name: 'Gadsden', type: 'neighborhood', slug: 'gadsden' },
  { name: 'Olympia', type: 'neighborhood', slug: 'olympia' },
  { name: 'Woodfield', type: 'neighborhood', slug: 'woodfield' },
  
  // Tier 1 Cities (5)
  { name: 'Columbia', type: 'city', slug: 'columbia' },
  { name: 'Irmo', type: 'city', slug: 'irmo' },
  { name: 'Cayce', type: 'city', slug: 'cayce' },
  { name: 'Forest Acres', type: 'city', slug: 'forest-acres' },
  { name: 'Blythewood', type: 'city', slug: 'blythewood' },
  
  // Remaining Neighborhoods/Cities (13)
  { name: 'Arthurtown', type: 'neighborhood', slug: 'arthurtown' },
  { name: 'Capitol View', type: 'neighborhood', slug: 'capitol-view' },
  { name: 'Dentsville', type: 'neighborhood', slug: 'dentsville' },
  { name: 'Hopkins', type: 'neighborhood', slug: 'hopkins' },
  { name: 'Lake Murray of Richland', type: 'neighborhood', slug: 'lake-murray' },
  { name: 'St. Andrews', type: 'neighborhood', slug: 'st-andrews' },
  { name: 'Eastover', type: 'city', slug: 'eastover' },
  { name: 'Elgin', type: 'city', slug: 'elgin' },
  { name: 'Arcadia Lakes', type: 'city', slug: 'arcadia-lakes' },
  { name: 'Dutch Fork', type: 'region', slug: 'dutch-fork' },
  { name: 'Fort Jackson', type: 'region', slug: 'fort-jackson' },
  { name: 'Intown Columbia', type: 'region', slug: 'intown-columbia' },
  { name: 'Lower Richland', type: 'region', slug: 'lower-richland' },
];

const pagesDir = './client/src/pages/locations';

// Create locations directory if it doesn't exist
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

locations.forEach(location => {
  const content = `import LocationPageTemplate from "@/components/LocationPageTemplate";

export default function ${location.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}() {
  return (
    <LocationPageTemplate 
      locationName="${location.name}"
      locationType="${location.type}"
    />
  );
}
`;

  const filePath = path.join(pagesDir, `${location.slug}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
});

console.log(`\nSuccessfully created ${locations.length} location pages!`);
