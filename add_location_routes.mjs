import fs from 'fs';

const locations = [
  'boyden-arbor', 'windsor-estates', 'fairwold-acres', 'mountain-brook', 'cedar-creek',
  'eau-claire', 'riverside', 'spring-hill', 'state-park', 'killian', 'kingville',
  'leesburg', 'lykes', 'bookman', 'horrell-hill', 'pontiac', 'wateree', 'gadsden',
  'olympia', 'woodfield', 'columbia', 'irmo', 'cayce', 'forest-acres', 'blythewood',
  'arthurtown', 'capitol-view', 'dentsville', 'hopkins', 'lake-murray', 'st-andrews',
  'eastover', 'elgin', 'arcadia-lakes', 'dutch-fork', 'fort-jackson', 'intown-columbia',
  'lower-richland'
];

// Generate import statements
const imports = locations.map(slug => {
  const componentName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return `import ${componentName} from "./pages/locations/${slug}";`;
}).join('\n');

// Generate route statements
const routes = locations.map(slug => {
  const componentName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  return `      <Route path={"/locations/${slug}"} component={${componentName}} />`;
}).join('\n');

console.log('=== ADD THESE IMPORTS AFTER OTHER PAGE IMPORTS ===');
console.log(imports);
console.log('\n=== ADD THESE ROUTES AFTER OTHER ROUTES ===');
console.log(routes);
